<template>
	<input 
		ref="input"
		class="form-control"
		:type="type"
		:autocomplete="autocomplete" 
		:autofocus="autofocus"
		:placeholder="placeholder"
		:required="required"
		:pattern="pattern"
		:value="value"
		@input="update()"
	>
</template>

<script>
export default {
	name: 'vui-input',
	props: {
		'autocomplete': { type: String,  default: null },
		'autofocus': 		{ type: Boolean, default: false },
		'type': 				{ type: String,  default: null },
		'placeholder': 	{ type: String,  default: null },
		'required': 		{ type: Boolean, default: false },
		'pattern': 			{ type: String,  default: null },
		'value': 				{ type: String,  default: null }
	},
	computed: {
		hasAutofocus() {
			return !!this.autofocus
		},
		isRequired() {
			return !!this.required
		}
	},
	methods: {
		update() {
			this.$emit('input', this.$refs.input.value)
		}
	}
}
</script>

<style scoped>
input[type="color"] {
	/* -webkit-appearance: none;
	border: none; */
	width: 42px;
	height: 32px;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 0;
}
input[type="color"]::-webkit-color-swatch {
	border: none;
}

input[type="file"] {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

input[type="file"] + label {
	font-size: 1.25em;
	font-weight: 700;
	color: white;
	background-color: black;
	display: inline-block;
}

input[type="file"]:focus + label,
input[type="file"]:hover + label {
	background-color: #eee;
}
</style>
