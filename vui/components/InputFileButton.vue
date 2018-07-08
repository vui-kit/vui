<template>
	<div class="fileinputs">
		<input type="file" :id="id" class="file" />
		<div class="fakefile">
			<vui-button
				class="btn"
				:class="[hasColor, btnSize, isBlock, isActive, isDisabled]"
				:disabled="isDisabled"
				@click="$emit('click')"
			>
				<i class="fa icon-download-alt"></i> Choose a file...
			</vui-button>
			<input class="fake-input" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-input-file',
	props: {
		'id': { type: String,  default: null },
		'color': { type: String, default: 'secondary' },
		'size': { type: String, default: null },
		'outline': { type: Boolean, default: false },
		'block': { type: Boolean, default: false },
		'active': { type: Boolean, default: false },
		'disabled': { type: Boolean, default: false },
		'btnText': { type: String, default: null },
		'btnIcon': { type: String, default: null },
	},
	computed: {
		hasColor() {
			// check to see if we use button-group color or this prop color
			if (this.partOfButtonGroup) {
				return `btn-${this.$parent.$props.color}`
			}
			else {
				if (this.outline === false) {
					return this.color ? `btn-${this.color}` : null
				}
				else {
					return this.color ? `btn-outline-${this.color}` : null
				} 
			}
		},
		hasOutline() {
			return !!this.outline
		},
		btnSize() {
			if (this.size === 'lg') {
				return 'btn-lg'
			}
			else if (this.size === 'sm') {
				return 'btn-sm'
			}
		},
		isBlock() {
			return this.block ? 'btn-block' : null
		},
		isActive() {
			return this.active && !this.disabled ? 'active' : null
		},
		isDisabled() {
			return this.disabled && !this.active ? !!this.disabled : null
		}
	}
}
</script>

<style>
div.fileinputs {
	position: relative;
}

div.fakefile {
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 1;
}

input.file {
	position: relative;
	text-align: right;
	opacity: 0;
	z-index: 2;
}

input.fake-input {
	border: none;
}
</style>
