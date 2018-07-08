<template>
	<div 
		class="progress-bar"
		:class="[`bg-${color}`, { 
			'progress-bar-striped': hasStripes,
			'progress-bar-animated': isAnimated 
		}]" 
		role="progressbar" 
		:style="`width: ${width}%`"
		aria-valuemax="50"
	>
		{{ label }}
	</div>
</template>

<script>
export default {
	name: 'vui-progress-bar',
	props: {
		'width': { type: String },
		'color': { type: String, default: 'primary' },
		'label': { type: String },
		'striped': { type: Boolean, default: false },
		'animated': { type: Boolean, default: false }
	},
	computed: {
		hasStripes() {
			return !!this.striped
		},
		isAnimated() {
			return this.striped ? !!this.animated : null
		}
	}
}
</script>