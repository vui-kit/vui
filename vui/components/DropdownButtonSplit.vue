<template>
	<div class="btn-group">
		<button 
			type="button" 
			class="btn"
			:class="[hasColor, btnSize]"
			@click="$emit('click')"
		>
			{{ text }}
		</button>
		<button
			class="btn dropdown-toggle dropdown-toggle-split"
			:class="[hasColor, btnSize]" 
			type="button"
			@click="toggleMenu"
		>
		</button>
		<div class="dropdown-menu shadow" :class="{ 'show': showMenu }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-dropdown-button-split',
	props: {
		'text': { type: String, default: 'Dropdown button' },
		'color': { type: String, default: 'secondary' },
		'outline': { type: Boolean, default: false },
		'size': { type: String, default: null },
		'action': { type: String, default: null }
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
		}
	},
	methods: {
		toggleMenu() {
			return this.showMenu = !this.showMenu
		}
	}
}
</script>