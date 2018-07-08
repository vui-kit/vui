<template>
	<div class="input-group-prepend">
		<span class="input-group-text" v-if="!isButton">
			<slot></slot>
		</span>
		<slot v-if="isButton"></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-input-group-prepend',
	props: {
		'button': { type: Boolean, default: false }
	},
	computed: {
		isButton() {
			return !!this.button
		}
	}
}
</script>

<style scoped>
span {
	margin: 0 auto;
}
</style>
