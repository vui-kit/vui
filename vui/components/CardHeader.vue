<template>
	<div class="card-header" :class="[hasColor, hasSize]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-card-header',
	props: {
		'color': { type: String, default: null },
		'size': { type: String, default: null }
	},
	computed: {
		hasColor() {
			return this.color ? `bg-${this.color} text-white` : 'text-dark'
		},
		hasSize() {
			return this.size ? this.size : null
		}
	}
}
</script>