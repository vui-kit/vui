<template>
	<li class="breadcrumb-item" :class="{ 'active': isActive }">
		<router-link :to="to" v-if="!isActive">
			<a href="#"><slot></slot></a>
		</router-link>

		<slot v-else></slot>
	</li>
</template>

<script>
export default {
	name: 'vui-breadcrumb-item',
	props: {
		'active': { type: Boolean, default: true },
		'to': { type: String, default: null }
	},
	mounted() {
		console.log(this.$route.path);
	},
	computed: {
		isActive() {
			return this.active ? true : false
		}
	}
}
</script>