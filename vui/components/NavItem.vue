<template>
	<li class="nav-item">
		<router-link
			v-if="!isDisabled && !isTab && !isPill" 
			:to="to"
			:exact="isExact"
			class="nav-link"
			:class="{ 'active-link': isActive }"
		>
			<slot></slot>
		</router-link>

		<a class="nav-link disabled-link disabled" disabled v-else-if="isDisabled">
			<slot></slot>
		</a>

		<a 
			class="nav-link"
			:class="{ 'active': isActive, 'active-link': isActive }" 
			href="#" 
			v-else-if="!isDisabled && isTab && !isPill"
		>
			<slot></slot>
		</a>

		<router-link 
			class="nav-link pill"
			:class="{ 'active-link': isActive }" 
			:to="to"
			:exact="isExact"
			v-else-if="!isDisabled && !isTab && isPill"
		>
			<slot></slot>
		</router-link>

	</li>
</template>

<script>
export default {
	name: 'vui-nav-item',
	props: {
		'to': { type: String, default: '/' },
		'exact': { type: Boolean, default: null },
		'active': { type: Boolean, default: false },
		'disabled': { type: Boolean, default: false },
		'tab': { type: Boolean, default: false },
		'pill': { type: Boolean, default: false },
	},
	computed: {
		isExact() {
			return this.exact ? true : false
		},
		isActive() {
			return !!this.active
		},
		isDisabled() {
			return !!this.disabled
		},
		isTab() {
			return !!this.tab
		},
		isPill() {
			return !!this.pill
		}
	}
}
</script>

<style scoped>
.nav-link.disabled-link {
	font-weight: 400;
	color: rgba(0,0,0,.4) !important;
	cursor: default !important;
}
.nav-link.active-link {
	font-weight: 600;
	color: #007bff !important;
}
.nav-link {
	color: #007bff !important;
	font-weight: 400;
}
.nav-link.pill.active-link {
	color: white !important;
	background: #007bff!important;
	font-weight: 600;
}
.nav-link.pill {
	color: b#007bff !important;
	background: transparent !important;
	font-weight: 600;
}
</style>

