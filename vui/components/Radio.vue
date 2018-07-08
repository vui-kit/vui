<template>
	<div 
		class="custom-control custom-radio"
		:class="[hasColor, {'custom-control-inline': isInline}]"
	>
		<input 
			class="custom-control-input" 
			type="radio" 
			:value="value"
			:name="name"
			:id="id"
			:checked="isChecked"
			:disabled="isDisabled"
			:autofocus="autofocus"
		>
		<label class="custom-control-label mr-0 d-block" :class="hasColor" :for="id">
			<slot></slot>
		</label>
	</div>
</template>

<script>
export default {
	name: 'vui-radio',
	props: {
		'name': 			{ type: String, default: null },
		'id': 				{ type: String, default: 'radio1' },
		'value': 			{ type: String, default: null },
		'disabled': 	{ type: Boolean, default: false },
		'checked': 		{ type: Boolean, default: false },
		'autofocus': 	{ type: Boolean, default: false },
		'inline': 		{ type: Boolean, default: false },
		'color':			{ type: String, default: 'default' }
	},
	computed: {
		isDisabled() {
			return !!this.disabled
		},
		isChecked() {
			return !!this.checked
		},
		isInline() {
			return !!this.inline
		},
		hasColor() {
			return this.color ? `custom-${this.color}` : null
		}
	}
}
</script>

<style scoped>
/* .custom-control-label:before{
  background-color: #eee;
} */

.custom-default.custom-radio .custom-control-input:checked 
~ .custom-default.custom-control-label::before {
  background-color: #bfcad4;
}
.custom-default.custom-radio .custom-control-input:checked 
~ .custom-default.custom-control-label::after {
  background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='black' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom-primary.custom-radio .custom-control-input:checked 
~ .custom-primary.custom-control-label::before {
  background-color: #007bff;
}

.custom-secondary.custom-radio .custom-control-input:checked 
~ .custom-secondary.custom-control-label::before {
  background-color: #6c757d;
}

.custom-success.custom-radio .custom-control-input:checked 
~ .custom-success.custom-control-label::before {
  background-color: #28a745;
}

.custom-danger.custom-radio .custom-control-input:checked 
~ .custom-danger.custom-control-label::before {
  background-color: #dc3545;
}

.custom-warning.custom-radio .custom-control-input:checked 
~ .custom-warning.custom-control-label::before {
  background-color: #ffc107;
}

.custom-info.custom-radio .custom-control-input:checked 
~ .custom-info.custom-control-label::before {
  background-color: #17a2b8;
}

.custom-dark.custom-radio .custom-control-input:checked 
~ .custom-dark.custom-control-label::before {
  background-color: #343a40;
}
</style>
