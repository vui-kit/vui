<template>
	<div style="margin-bottom:-80px;">
		<!-- DataTable ToolBar -->
		<div class="d-flex flex-row-reverse mb-3" v-if="showToolBar">
			<!-- DT-HIDE-SHOW-COLUMNS -->
			<vui-dropdown-link icon="icon-th-list" text="Columns" outline v-show="hasColShowHide">
				<vui-dropdown-item v-for="(header, index) in headerCols" :key="index">
					<label>
						<input type="checkbox" v-model="header.selected" :value="header.selected">
							{{ header.label }}
					</label>
				</vui-dropdown-item>
			</vui-dropdown-link>
			
			<!-- FILTERING -->
			<vui-input-group :class="{ 'mr-3': hasColShowHide }" v-show="hasFilter">
				<vui-input-group-prepend>
					<vui-dropdown-select placeholder="Filter by" v-model="searchBy">
						<vui-dropdown-select-option 
							v-for="(header, index) in headers" 
							:key="index"
							v-show="header.selected"
						>
							{{ header.label }}
						</vui-dropdown-select-option>
					</vui-dropdown-select>
				</vui-input-group-prepend>
				<vui-input 
					type="text" 
					class="form-control form-control-sm" 
					v-model="searchQuery"
					placeholder="Type to Search..."
				/>
			</vui-input-group>
			
		</div>

		<!-- DataTable -->
		<table
			:id="`table-${id}`" 
			class="table mt-0 pt-0"
			:class="[hasTableColor, {
				'shadow': hasShadow,
				'text-dark': hasTableColor === 'table-warning',  
				'table-striped': isStriped,
				'table-bordered': isBordered,
				'border-top': !isBordered,
				'border-sides': !isBordered,
				'table-borderless': isBorderless,
				'table-hover': isHoverable,
				'table-sm': isSmall,
				'scroll': isScrollable
			}]"
		>
			<!-- DT HEADERS -->
			<thead :class="hasHeaderColor">
				<tr>
					<th 
						v-for="(header, key) in headers" 
						:key="key"
						@click="header.sortable === true ? sortBy(header.value, key, id) : null"
						:class="{ 'pointer': header.sortable === true }"
						v-show="header.selected"
					>
						{{ header.label }}
						<i
							:id="`sortIcon${key}_${id}`" 
							class="ml-1 fa"
							:class="{ 
								'icon-sort': orderBy !== header.value,
								'icon-caret-up': orderBy == header.value && direction == 'asc', 
								'icon-caret-down': orderBy == header.value && direction == 'desc'
							}"
							v-show="header.sortable === true"
						></i>
					</th>
					<th class="spacer" v-if="isScrollable"></th>
				</tr>
			</thead>

			<!-- DT ROWS -->
			<tbody :style="isScrollable ? `height: ${49 * pageSize}px` : null" :class="{ 'editable': isEditable }">
				<tr 
					v-show="hasTemplateRow === false"
					v-for="(row, index) in sortedRows"
					:key="index"
					:class="{ 'pointer': isEditable }"
					@click="getRowData(row)"
				>
					<td 
						v-for="(key, idx) in Object.keys(row)" 
						:key="idx"
						v-show="showColumns(key)"
					>
						{{ row[key] }}
					</td>
				</tr>

				<!-- ROW TEMPLATE SLOT -->
				<slot
					name="rowTemplate" 
					v-show="hasTemplateRow === true"
					v-for="row in sortedRows" 
					:row="row" 
					:showColumns="showColumns"
					:getRowData="getRowData"
				></slot>
			</tbody>
		</table>

		<!-- PAGINATION -->
		<nav class="mt-3" v-if="hasPagination">
			<span>Showing {{ pageSize }} of {{ totalRows }} records</span>

			<ul class="pagination" style="float: right">
				<li class="page-item" :class="{ 'disabled': currentPage === 1 }">
					<a class="page-link" @click="prevPage">
						<span>&laquo;</span>
					</a>
				</li>
				
				<li 
					v-for="(page, index) in (totalRows / pageSize)" 
					:key="index"
					class="page-item"
					:class="{ 'active': currentPage === index + 1 }" 
					@click="thisPage(index + 1)"
				>
					<a class="page-link">{{ index + 1 }}</a>
				</li>
				
				<li 
					class="page-item" 
					:class="{ 'disabled': currentPage === (totalRows / pageSize) }"
				>
					<a class="page-link" @click="nextPage">
						<span>&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>

		<br><br><br><br>

		<!-- ROW EDIT FORM -->
		<div class="lightbox" v-if="showEditForm">
			<vui-card 
				class="edit-form shadow" 
				style="width:18rem"  
			>
				<div class="header" :class="`bg-${formHasColor}`">
					<span :class="{
						'text-dark': formHasColor === 'warning' || formHasColor === 'light', 
						'text-white': formHasColor !== 'warning'
						}"
					>
						<strong>Edit Form</strong>
					</span>
					<i 
						class="fa icon-remove"
						:class="{
							'text-dark': formHasColor === 'warning' || formHasColor === 'light', 
							'text-white': formHasColor !== 'warning'
						}" 
						style="float:right; font-size:1.3em; cursor:pointer;"
						@click="showEditForm = false"
					></i>
				</div>
				<vui-card-body>

					<vui-form-group 
						v-for="(value, key, index) in selectedRow" 
						:key="index"
						v-if="!hasTemplateForm"
					>
						<vui-form-label>{{ key | capFirst }}</vui-form-label>
						<vui-input :value="String(value)" />
					</vui-form-group>
					<vui-button 
						:color="formHasColor" 
						style="width:100%;" 
						@click="updateRow"
						v-if="!hasTemplateForm"
					>
						Update
					</vui-button>

					<slot 
						name="formTemplate" 
						:selectedRow="selectedRow"
						v-if="hasTemplateForm"
					></slot>

				</vui-card-body>
			</vui-card>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-dtable',
	props: {
		'id': { type: String },
		'rows': { type: Array },
		'headers': { type: Array },

		'color': { type: String, default: null },
		'headerColor': { type: String, default: null },
		'striped': { type: Boolean, default: false },
		'border': { type: Boolean, default: false },
		'borderless': { type: Boolean, default: false },
		'hover': { type: Boolean, default: false },
		'small': { type: Boolean, default: false },
		'shadow': { type: Boolean, default: false },

		'scroll': { type: Boolean, default: false },
		'pageSize': { type: String, default: '10' },
		'pagination': { type: Boolean, default: false },
		'toolbar': { type: Boolean, default: false },
		'filter': { type: Boolean, default: false },
		'colShowHide': { type: Boolean, default: false },
		'rowTemplate': { type: Boolean, default: false },
		'editable': { type: Boolean, default: false },
		'formTemplate': { type: Boolean, default: false }
	},
	data() {
		let dataRows = this.rows.map(row => { return row })
		let headerCols = this.headers.map(col => { return col })
		let orderBy = this.headers[0].value
		return {
			dataRows: dataRows,
			headerCols: headerCols,
			orderBy: orderBy,
			direction: 'asc',
  		currentPage: 1,
			totalRows: '',
			searchBy: '',
			searchQuery: '',
			selectedRow: [],
			showEditForm: false
		}
	},
	filters: {
		capFirst: function (value) {
			if (!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	},
	created() {
		this.totalRows = this.rows.length
	},
	computed: {
		hasTableColor() {
			return this.color ? `table-${this.color}` : 'table-light'
		},
		hasHeaderColor() {
			return this.headerColor ? `thead-${this.headerColor}` : null
		},
		formHasColor() {
			if (this.color) {
				return this.color
			}
			else if (this.headerColor) {
				return this.headerColor
			}
			else {
				return 'secondary'
			}
		},
		isStriped() {
			return !!this.striped
		},
		isBordered() {
			return !!this.border
		},
		isBorderless() {
			return !!this.borderless
		},
		isHoverable() {
			return !!this.hover
		},
		isSmall() {
			return !!this.small
		},
		hasShadow() {
			return !!this.shadow
		},

		isScrollable() {
			return !!this.scroll
		},
		hasPagination() {
			return !!this.pagination
		},
		showToolBar() {
			return this.filter || this.colShowHide ? true : false
		},
		hasFilter() {
			return !!this.filter
		},
		hasColShowHide() {
			return !!this.colShowHide
		},
		hasTemplateRow() {
			return !!this.rowTemplate
		},
		isEditable() {
			return !!this.editable
		},
		hasTemplateForm() {
			return !!this.formTemplate
		},

		sortedRows() {
			/**
			* Special thanks to Raymond Camden for his contribution
			* of the code used for column sorting and pagination.
			* https://www.raymondcamden.com/
			*/
			return this.dataRows.sort((a, b) => {
				let modifier = 1
				if (this.direction == 'desc') modifier = -1

				if (typeof this.orderBy === 'string') {
					if (a[this.orderBy] < b[this.orderBy]) return -1 * modifier
					if (a[this.orderBy] > b[this.orderBy]) return 1 * modifier
				}
				else if (typeof this.orderBy === 'number') {
					if (a[this.orderBy] - b[this.orderBy]) return -1 * modifier
					if (b[this.orderBy] - a[this.orderBy]) return 1 * modifier
				}
				return false
			}).filter((row, index) => {
				if (this.hasPagination) {
					let start = (this.currentPage - 1) * this.pageSize
					let end = this.currentPage * this.pageSize
					if (index >= start && index < end) return true
				}
				else {
					return true
				}
			}).filter((row, index) => {
				if (this.searchBy !== '') {
					let searchBy = this.searchBy.toLowerCase()
					return String(row[`${searchBy}`]).toLowerCase().indexOf(this.searchQuery) > -1
				}
				else {
					return true
				}
			})
		}
	},
	methods: {
		showColumns(col) {
      return this.headers.find(h => h.value === col).selected
    },
		sortBy(value, key, id) {
			// update the current sort direction
      if (value == this.orderBy) {
				this.direction = this.direction == 'asc' ? 'desc' : 'asc'
			}

			// set the curentSort to this value
			this.orderBy = value
    },
		prevPage() {
			if (this.currentPage > 1) {
				this.currentPage--
			}
		},
		thisPage(page) {
			this.currentPage = page
		},
		nextPage() {
			if ((this.currentPage * this.pageSize) < this.rows.length) {
				this.currentPage++
			}
		},
		getRowData(row) {
			if (this.isEditable) {
				this.selectedRow = row
				this.showEditForm = true
			}
		},
		updateRow() {
			this.$root.$emit('update')
		}
	}
}
</script>

<style scoped>
.card {
	margin-bottom: 0 !important;
}

.pointer {
	cursor: pointer;
}

.dark {
	color: #fff;
  background-color: #212529;
}

.disabled, .disabled:hover {
	cursor: default;
}

.border-top {
	border-top: 1px solid #ccc !important;
}

.border-sides {
	border-left: 1px solid #ccc !important;
	border-right: 1px solid #ccc !important;
}

.border-bottom {
	border-bottom: 1px solid #ccc !important;
}


/** Table: Primary *******************************/
.table-primary {
  color: #fff;
  background-color: #007bff;
}
.table-primary td, .table-primary th, .table-primary thead th {
  border-color: #1e82ed;
}
table .thead-primary th {
	color: #fff;
	background-color: #007bff;
	border-color: #1e82ed;
}

/** Table: Secondary *******************************/
.table-secondary {
	color: #fff;
	background-color: #6c757d;
}
.table-secondary td, .table-secondary th, .table-secondary thead th {
  border-color: #a0adba;
}
table .thead-secondary th {
	color: #fff;
	background-color: #6c757d;
	border-color: #a0adba;
}


/** Table: Success *******************************/
.table-success {
	color: #fff;
	background-color: #28a745;
}
.table-success td, .table-success th, .table-success thead th {
  border-color: #59f27c;
}
table .thead-success th {
	color: #fff;
	background-color: #28a745;
	border-color: #59f27c;
}


/** Table: Info *******************************/
.table-info {
	color: #fff;
	background-color: #17a2b8;
}
.table-info td, .table-info th, .table-info thead th {
  border-color: #45d1e8;
}
table .thead-info th {
	color: #fff;
	background-color: #17a2b8;
	border-color: #45d1e8;
}


/** Table: Warning *******************************/
.table-warning {
	color: #fff;
	background-color: #ffc107;
}
.table-warning td, .table-warning th, .table-warning thead th {
  border-color: #f2c94d;
}
table .thead-warning th {
	color: #000;
	background-color: #ffc107;
	border-color: #f2c94d;
}


/** Table: Danger *******************************/
.table-danger {
	color: #fff;
	background-color: #dc3545;
}
.table-danger td, .table-danger th, .table-danger thead th {
  border-color: #ed7d88;
}
table .thead-danger th {
	color: #ffffff;
	background-color: #dc3545;
	border-color: #ed7d88;
}


/* TABLE STYLES *****************************/
table {
	margin-top: 0;
	margin-bottom: 0;
	border-bottom: 1px solid #ccc;
}

table th {
	border-top: 0px !important;
	padding-top: 10px;
}

table tbody.editable tr {
	cursor: pointer;
}

/* SCROLL TABLE STYLES *********************/
table.scroll tbody {
	scrollbar-face-color: #007bff;
	scrollbar-shadow-color: #FFFFFF;
	scrollbar-highlight-color: #FFFFFF;
	scrollbar-3dlight-color: #FFFFFF;
	scrollbar-darkshadow-color: #FFFFFF;
	scrollbar-track-color: #ccc;
	scrollbar-arrow-color: #FFFFFF;
}

/* Let's get this party started */
table.scroll tbody::-webkit-scrollbar {
    width: 15px;
}
 
/* Track */
table.scroll tbody::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
	-webkit-border-radius: 10px;
	border-radius: 10px;
}
 
/* Handle */
table.scroll tbody::-webkit-scrollbar-thumb {
	-webkit-border-radius: 10px;
	border-radius: 10px;
	
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
	box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

/* Handle: Primary */
table.scroll.table-primary tbody::-webkit-scrollbar-thumb {
	background: #0056b3;
}

/* Handle: Secondary */
table.scroll.table-secondary tbody::-webkit-scrollbar-thumb {
	background: #474747;
}

/* Handle: Success */
table.scroll.table-success tbody::-webkit-scrollbar-thumb {
	background: #1e7e34;
}

/* Handle: Info */
table.scroll.table-info tbody::-webkit-scrollbar-thumb {
	background: #19afc8;
}

/* Handle: Warning */
table.scroll.table-warning tbody::-webkit-scrollbar-thumb {
	background: #ba8b00;
}

/* Handle: Danger */
table.scroll.table-danger tbody::-webkit-scrollbar-thumb {
	background: #a71d2a;
}

table.scroll {
	display: table;
}

/* THEAD */
table.scroll thead tr {
	display: table;
	width: 100%;
	table-layout: fixed;
}

table.scroll thead tr th:nth-last-child(2) {
	border-right: 0px !important;
}

table.scroll thead tr th.spacer {
	width: 15px;
	border-left: 0px !important;
	padding: 0 !important;
}

/* TBODY */
table.scroll tbody {
	overflow-y: auto;
	overflow-x: hidden;
	display: block;
	width: 100%;
}

table.scroll tbody tr {
	display: table;
	width: 100%;
	table-layout: fixed;
}

/* ROW EDIT FORM STYLES *********************/
.lightbox {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0,0,0,.5);
	z-index: 1;
}
.edit-form {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
}

.edit-form .header {
	padding: 10px;
}
</style>
