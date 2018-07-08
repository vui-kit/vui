<template>
	<label :for="labelFor">
		<slot></slot>
	</label>
</template>

<script>
export default {
	name: 'vui-form-label',
	props: {
		'for': { type: String, default: null }
	},
	computed: {
		labelFor() {
			return this.for
		}
	}
}
</script>