<template>
	<div class="jumbotron" :class="{ 'jumbotron-fluid': isFluid }">
		<div :class="{ 'container': isFluid }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-jumbotron',
	props: {
		'fluid': { type: Boolean, default: false }
	},
	computed: {
		isFluid() {
			return !!this.fluid
		}
	}
}
</script>