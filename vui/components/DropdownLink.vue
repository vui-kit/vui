<template>
	<div class="dropdown">
		<span
			class="btn dropdown-toggle"
			:class="[hasColor, hasOutline, btnSize]"
			@click="toggleMenu"
		>
			<i class="mr-1" :class="`fa ${icon}`" v-show="hasIcon"></i>
			{{ text }}
		</span>
		<div class="dropdown-menu shadow" :class="{ 'show': showMenu }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-dropdown-link',
	props: {
		'text': { type: String, default: 'Dropdown link' },
		'icon': { type: String, default: null },
		'color': { type: String, default: 'secondary' },
		'outline': { type: Boolean, default: true },
		'size': { type: String, default: null },
		'href': { type: String, default: null },
		'autoClose': { type: Boolean, default: false }
	},
	data() {
		return {
			showMenu: false
		}
	},
	computed: {
		hasColor() {
			return this.color ? `btn-${this.color}` : null
		},
		hasOutline() {
			return this.outline ? `btn-outline-${this.color}` : null
		},
		btnSize() {
			if (this.size === 'lg') {
				return 'btn-lg'
			}
			else if (this.size === 'sm') {
				return 'btn-sm'
			}
		},
		hasIcon() {
			return this.icon ? true : false
		},
		hasAutoClose() {
			return !!this.autoClose
		}
	},
	methods: {
		toggleMenu() {
			return this.showMenu = !this.showMenu
		},
		preventDefault() {
			return null
		}
	}
}
</script>