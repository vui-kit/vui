<template>
	<div class="card">
		<div 
			class="card-header"
			:class="[{ 'active': open }, `bg-${activeColor}`, `text-${activeTextColor}`]" 
			@click="expandItem"
		>
			<h6 class="mb-0 font-weight-normal" :class="{ 'active': open }">
				{{ header }}
			</h6>
		</div>
		<div class="card-body" v-show="open">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AccordianPanel',
	props: {
		'header': { type: String, default: null },
		'active': { type: Boolean, default: false },
		'bgColor': { type: String, default: null }
	},
	data() {
		return {
			open: false
		}
	},
	mounted() {
		this.active ? this.open = true : this.open = false
	},
	computed: {
		activeColor() {
			return this.open ? this.bgColor : 'light'
		},
		activeTextColor() {
			return this.open && this.bgColor ? 'light' : null
		}
	},
	methods: {
		expandItem() {
			this.open = true
			this.$parent.openChild(this)
			this.$emit('click')
		}
	}
}
</script>

<style scoped>
.card-header {
	cursor: pointer;
}
.card-header.active {
	cursor: default;
}
h6.active {
	font-weight: bold !important;
}
</style>
