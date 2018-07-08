<template>
	<div class="progress mt-2 mb-2" :style="`height: ${height}`">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-progress',
	props: {
		'height': { type: String }
	},
	data() {
		return {
			
		}
	},
	computed: {
		
	}
}
</script>

<style scoped>

</style>