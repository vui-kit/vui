<template>
	<!-- Less than 10 pages -->
	<ul v-if="totalPages > 1 && totalPages <= 10" :class="`pagination pagination-${size} justify-content-${alignment}`">
		<!-- Prev -->
		<li v-if="withNextPrev" class="page-item" :class="disablePrev">
				<a class="page-link" @click="!disablePrev ? btnPrev() : ''">
					<span v-html="prevText"></span>
				</a>
		</li>

		<!-- Pagers -->
		<li 
		  v-for="(n, index) in totalPages" 
			:key="index" class="page-item" 
			:class="n == selected ? 'active ' + color  : ''"
		>
				<a class="page-link" @click="emitBtnClick(n)">{{ n }}</a>
		</li>

		<!-- Next -->
		<li v-if="withNextPrev" class="page-item" :class="disableNext">
				<a class="page-link" @click="!disableNext ? btnNext() : ''">
					<span v-html="nextText"></span>
				</a>
		</li>
	</ul>

	<!-- More than 10 pages -->
	<ul v-else-if="totalPages >= 11" :class="`pagination pagination-${size} justify-content-${alignment}`">
		<!-- Prev -->
		<li v-if="withNextPrev" class="page-item" :class="disablePrev">
				<a class="page-link" @click="!disablePrev ? btnPrev() : ''">
					<span v-html="prevText"></span>
				</a>
		</li>

		<!-- Pagers -->
		<li 
			v-for="(n, index) in pages"
			:key="index"
			class="page-item" 
			v-if="n.show" 
			:class="n.content == selected ? 'active ' + color : '' + n.disable"
		>
			<a class="page-link" v-if="n.disable != 'disabled'" @click="emitBtnClick(n.content)">
				{{ n.content }}
			</a>
			<a class="page-link" v-else>{{ n.content }}</a>
		</li>

		<!-- Next -->
		<li v-if="withNextPrev" class="page-item" :class="disableNext">
			<a class="page-link" @click="!disableNext ? btnNext() : ''">
				<span v-html="nextText"></span>
			</a>
		</li>
	</ul> 
</template>

<script>
export default {
	name: 'vui-pagination',
	props: {
		totalPages: { type : Number, required: true },
		currentPage: { type : Number, default: 1 },
		withNextPrev: { type : Boolean, default : true },
		lastText: { type : String, default : '&raquo;' },
		nextText: { type : String, default : 'Next' },
		prevText: { type : String, default : 'Prev' },
		color: { type : String, default: 'primary' },
		align: { type: String, default: '' },
		size: { type: String, default: 'md' },
	},
	data() {
		const pageRange = this.perPage
		return {
			selected: this.currentPage,
			pageRange: 3,
			disableNext : '',
			disablePrev : '',
			lastBtnClicked: false
		}
	},
	mounted() {
		this.disablePrevNext()
		this.$emit('pageChange', {
			'page': this.currentPage,
			'pages': this.totalPages
		})
	},
	computed: {
		alignment() {
			if (this.align === 'left') {
				return 'start'
			}
			else if (!this.align || this.align === '') {
				return 'center'
			}
			else if (this.align === 'right') {
				return 'end'
			}
		},
		pages() {
			let items = [];

			for (let i = 0; i < this.totalPages; i++) {
				let page = { content: i + 1, disable: '', show: false }
				items[i] = page
			}

			let page1 = { content: "...", disable : 'disabled', show : false }
			let page2 = { content: "...", disable : 'disabled', show : false }

			items.splice(1, 0, page1)
			items.splice(items.length - 1, 0, page2)

			for (let i = 0; i < items.length; i++) {
				if (i == 0 || i == items.length-1) {
					items[i].show = true
				}
					
				if (this.selected <= this.pageRange) {
					if (this.selected == this.pageRange) {
						if (i >= 2 && i <= this.pageRange + 1) {
							items[i].show = true
						}				
					}
					else {
						if (i >= 2 && i <= this.pageRange) {
							items[i].show = true
						}		
					}
					items[items.length - 2].show = true
				}
				else if (this.selected > this.pageRange) {
					if (i >= this.selected - 1 && (this.selected + 2) < items.length - 2 && i <= this.selected + 1) {
						items[1].show = true
						items[items.length - 2].show = true
						items[i].show = true
					}
					else if (i >= items.length - 2 - this.pageRange && (this.selected + 2) >= items.length - 2) {
						items[1].show = true
						items[items.length - 2].show = false
						items[i].show = true
					}
				}
			}
			return items
		},
	},
	methods: {
		emitBtnClick(n) {
			this.selected = n
			this.$emit('pageChange', {
				'page': n,
				'pages': this.totalPages
			})
			this.disablePrevNext()
		},
		btnNext() {
			this.selected++
			this.$emit('pageChange', {
				'page': this.selected,
				'pages': this.totalPages
			})
			this.disablePrevNext()
		},
		btnPrev() {
			this.selected--
			this.$emit('pageChange', {
				'page': this.selected,
				'pages': this.totalPages
			})
			this.disablePrevNext()
		},
		disablePrevNext() {
			this.disablePrev = this.selected == 1 ? 'disabled' : ''
			this.disableNext = this.selected == this.totalPages ? 'disabled' : ''
		}
	}
}
</script>

<style lang="css" scoped>
.pagination .active a {
	z-index: 0;
}
a:hover {
	cursor: pointer;
}
.active.primary a {
	background: #007BFF;
	border-color: #007BFF;
}
.active.secondary a {
	background: #6c757d;
	border-color: #6c757d;
}
.active.success a {
	background: #28A745;
	border-color: #28A745;
}
.active.danger a {
	background: #DC3545;
	border-color: #DC3545;
}
.active.warning a {
	background: #FFC107;
	border-color: #FFC107;
}
.active.info a {
	background: #17A2B8;
	border-color: #17A2B8;
}
.active.dark a {
	background: #343A40;
	border-color: #343A40;
}
</style>