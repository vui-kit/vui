<template>
	<button 
		type="button" 
		class="btn"
		:class="[hasColor, btnSize, isBlock, isActive, isDisabled]"
		:disabled="isDisabled"
		@click="$emit('click')"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'vui-button',
	props: {
		'color': { type: String, default: 'secondary' },
		'theme': { type: String, default: null },
		'size': { type: String, default: null },
		'outline': { type: Boolean, default: false },
		'block': { type: Boolean, default: false },
		'active': { type: Boolean, default: false },
		'disabled': { type: Boolean, default: false }
	},
	data() {
		return {
			partOfButtonGroup: false
		}
	},
	mounted() {
		if (this.$parent.$el.classList.contains('btn-group')) {
			this.partOfButtonGroup = true
		}
	},
	computed: {
		btnGroup() {
			// Is the button part of a button-group?
			return !!this.partOfButtonGroup
		},
		hasColor() {
			// check to see if we use button-group color or this prop color
			if (this.partOfButtonGroup) {
				return `btn-${this.$parent.$props.color}`
			}
			else {
				if (this.outline === false) {
					return this.color ? `btn-${this.color}` : null
				}
				// Theme is only used when button is part of a navbar
				else {
					if (this.theme == 'light' || this.theme == 'dark') {
						if (this.theme === 'light') {
							if (this.color.charAt(0) === '#') {
								return `btn-outline-secondary btn-transparent text-secondary`
							}
							else {
								return this.color ? `btn-outline-secondary bg-light btn-light-transparent text-secondary` : null
							}
						}
						else if (this.theme === 'dark') {
							if (this.color.charAt(0) === '#') {
								return `btn-outline-light btn-transparent text-white`
							}
							else {
								return this.color ? `btn-outline-light bg-${this.color} text-white` : null
							}
						}
					}
					else {
						return this.color ? `btn-outline-${this.color}` : null
					}
				} 
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
		isBlock() {
			return this.block ? 'btn-block' : null
		},
		isActive() {
			return this.active && !this.disabled ? 'active' : null
		},
		isDisabled() {
			return this.disabled && !this.active ? !!this.disabled : null
		}
	}
}
</script>

<style scoped>
.btn-transparent {
	background: transparent !important;
}
.btn-transparent:hover {
	background: rgba(255,255,255,.2) !important;
}
.btn-light-transparent:hover {
	background: rgba(0,0,0,.1) !important;
}
</style>
