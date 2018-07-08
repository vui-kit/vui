<template>
	<span class="dropdown-item" @click="selectOption()">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: 'vui-dropdown-select-option',
	methods: {
		selectOption() {
			this.$emit('click')
			this.$parent.toggleMenu()
			this.$parent.inputValue = this.$slots.default[0].text.trim()
		}
	}
}
</script>

<style scoped>
.dropdown-item {
	cursor: pointer !important;
}
</style>