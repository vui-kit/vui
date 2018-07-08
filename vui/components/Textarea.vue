<template>
	<textarea class="form-control" :value="value" :placeholder="ph">
		<slot name="textarea"></slot>
	</textarea>
</template>

<script>
export default {
	name: 'vui-textarea',
	props: ['placeholder'],
	data() {
		return {
			ph: ''
		}
	},
	computed: {
		value() {
			if (this.$slots.textarea === undefined) {
				return this.ph = 'Enter your text...'
			}
			else {
				return this.$slots.default[0].text.replace(/^\s+/g, '')
			}
			
		}
	}
}
</script>