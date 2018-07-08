<template>
	<router-link :to="to" class="navbar-brand" v-if="!isHeading">
		<slot></slot>
	</router-link>
	<span class="navbar-brand mb-0 h1" v-else-if="isHeading">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: 'vui-navbar-brand',
	props: {
		'to': { type: String, default: '/' },
		'heading': { type: Boolean, default: false }
	},
	computed: {
		isHeading() {
			return !!this.heading
		}
	}
}
</script>