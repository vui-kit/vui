<template>
	<form :class="{ 'form-inline': isInline }">
		<slot></slot>
	</form>
</template>

<script>
export default {
	name: 'vui-form',
	props: {
		'inline': { type: Boolean, default: false }
	},
	computed: {
		isInline() {
			return !!this.inline
		}
	}
}
</script>