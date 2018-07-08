<template>
	<div class="input-group-append">
		<span class="input-group-text" v-if="text">
			<slot></slot>
		</span>
		<slot v-if="!text"></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-input-group-append',
	props: {
		'text': { type: Boolean, default: false }
	},
	computed: {
		isText() {
			return !!this.text
		}
	}
}
</script>

<style>

</style>
