<template>
	<div class="card-footer" :class="hasColor">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-card-footer',
	props: {
		'color': { type: String, default: null }
	},
	computed: {
		hasColor() {
			return this.color ? `bg-${this.color} text-white` : 'text-dark'
		}
	}
}
</script>