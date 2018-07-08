<template>
	<div class="btn-group" :class="hasSize" role="group">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-button-group',
	props: {
		'size': { type: String, default: null },
		'color': { type: String, default: 'secondary' }
	},
	computed: {
		hasSize() {
			return this.size ? `btn-group-${this.size}` : null
		}
	}
}
</script>