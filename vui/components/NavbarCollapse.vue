<template>
	<div class="collapse navbar-collapse text-left" :class="{'show': isExpanded}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-navbar-collapse',
	computed: {
		isExpanded() {
			return this.$parent.expandNavbar
		}
	}
}
</script>
