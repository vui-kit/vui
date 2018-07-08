<template>
	<nav 
		class="navbar" 
		:class="[`navbar-expand-${expand}`, position, hasTheme, hasColor, hasShadow]"
		:style="`background-color: ${bgColor};`"
	>
		<slot></slot>
	</nav>
</template>

<script>
export default {
	name: 'vui-navbar',
	props: {
		'position': { type: String, default: null },
		'theme': { type: String, default: 'light' },
		'color': { type: String, default: null },
		'bgColor': { type: String, default: null },
		'expand': { type: String, default: 'sm' },
		'shadow': { type: Boolean, default: false }
	},
	data() {
		return {
			expandNavbar: false
		}
	},
	computed: {
		hasTheme() {
			return this.theme ? `navbar-${this.theme}` : null
		},
		hasColor() {
			return this.color ? `bg-${this.color}` : null
		},
		hasShadow() {
			return !!this.shadow
		}
	},
	methods: {
		toggleNavbar() {
			return this.expandNavbar = !this.expandNavbar
		}
	}
}
</script>

<style scoped>
.navbar {
	display: flex !important;
	justify-content: space-between !important;
}
</style>
