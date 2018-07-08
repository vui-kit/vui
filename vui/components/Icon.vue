<template>
	<i 
		ref="icon"
		:class="[
			`icon-${name} icon-rotate-${rotate} icon-flip-${flip} pull-${pull}`, 
			{ 'icon-spin': hasSpin, 'icon-border': hasBorder, 'icon-muted': isMuted }
		]" 
		:style="`font-size: ${size}; color: ${color}; font-weight: normal`"
	></i>
</template>

<script>
export default {
	name: 'vui-icon',
	props: {
		'name': { type: String },
		'size': { type: String, default: '14px' },
		'color': { type: String, default: null },
		'rotate': { type: String, default: null },
		'flip': { type: String, default: null },
		'spin': { type: Boolean, default: false },
		'pull': { type: String, default: null },
		'border': { type: Boolean, default: false },
		'muted': { type: Boolean, default: false }
	},
	computed: {
		hasSpin() {
			return !!this.spin
		},
		hasBorder() {
			return !!this.border
		},
		isMuted() {
			return !!this.muted
		}
	}
}
</script>