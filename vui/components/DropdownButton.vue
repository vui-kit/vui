<template>
	<div class="dropdown">
		<button
			class="btn dropdown-toggle"
			:class="[hasColor, btnSize, { 'navLink': hasNavLink }]" 
			type="button"
			@click="toggleMenu"
		>
			{{ text }}
		</button>
		<div class="dropdown-menu shadow" :class="{ 'show': showMenu }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-dropdown-button',
	props: {
		'text': { type: String, default: 'Dropdown button' },
		'color': { type: String, default: 'secondary' },
		'outline': { type: Boolean, default: false },
		'size': { type: String, default: null },
		'navLink': { type: Boolean, default: false }
	},
	data() {
		return {
			showMenu: false
		}
	},
	computed: {
		hasColor() {
			if (this.outline === false) {
				return this.color ? `btn-${this.color}` : null
			}
			else {
				return this.color ? `btn-outline-${this.color}` : null
			} 
		},
		hasOutline() {
			return !!this.outline
		},
		btnSize() {
			if (this.size === 'lg') {
				return 'btn-lg'
			}
			else if (this.size === 'sm') {
				return 'btn-sm'
			}
		},
		hasNavLink() {
			return !!this.navLink
		}
	},
	methods: {
		toggleMenu() {
			return this.showMenu = !this.showMenu
		}
	}
}
</script>

<style scoped>
.navLink {
	color: #007bff !important;
	font-weight: 400;
}
</style>
