<template>
	<div class="input-group" :class="hasSize">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-input-group',
	props: {
		'size': { type: String, default: null }
	},
	computed: {
		hasSize() {
			if (this.size === 'sm') {
				return 'input-group-sm'
			}
			else if (this.size === 'lg') {
				return 'input-group-lg'
			}
		}
	}
}
</script>

<style>

</style>
