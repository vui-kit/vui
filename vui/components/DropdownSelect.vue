<template>
	<div class="dropdown-select">
		<vui-input 
			ref="selectInput"
			@click.native="toggleMenu()" 
			:value="inputValue || value" 
			class="select-input"
			:placeholder="placeholder"
		/>
		<div class="dropdown-menu shadow" :class="{ 'show': showMenu }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-dropdown-select',
	props: {
		'placeholder': { type: String, default: null },
		'value': { type: String, default: null }
	},
	data() {
		return {
			showMenu: false,
			inputValue: null
		}
	},
	watch: {
		inputValue() {
			this.$emit('input', this.inputValue)
		}
	},
	computed: {
		hasValue() {
			if (this.value && this.inputValue === '') {
				return this.inputValue = this.value
			}
		}
	},
	methods: {
		toggleMenu() {
			return this.showMenu = !this.showMenu
		}
	}
}
</script>

<style scoped>
.dropdown-select {
	position: relative;
}

.dropdown-menu {
	position: absolute;
	width: 100% !important;
	margin-top: 0px;
	margin-left: 0px;
}

.select-input {
	padding-right: 8px !important;
	background-image: url('../../vui/images/angle-down.svg');
	background-size: 12px;
	background-position: right;
	background-origin: content-box, padding-box;
	background-repeat: no-repeat;
	cursor: default;
}
</style>
