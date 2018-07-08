<template>
	<li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" @click="toggleMenu">
			{{ text }} 
		</a>
		<div ref="menu" class="dropdown-menu" :class="{ 'show': showMenu }">
			<slot></slot>
		</div>
	</li>
</template>

<script>
export default {
	name: 'vui-nav-item-dropdown',
	props: {
		'text': { type: String, default: 'Nav Item' },
		'autoClose': { type: Boolean, default: false }
	},
	data() {
		return {
			showMenu: false
		}
	},
	computed: {
		hasAutoClose() {
			return !!this.autoClose
		}
	},
	methods: {
		toggleMenu() {
			this.$parent.toggleMenu(this._uid)
		}
	}
}
</script>

<style scoped>
.nav-link {
	color: dimgrey !important;
	font-weight: 400;
	cursor: pointer;
}
</style>
