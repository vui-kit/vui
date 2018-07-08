<template>
	<ul class="navbar-nav mr-auto">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'vui-navbar-nav',
	data() {
		return {
			showMenu: false
		}
	},
	methods: {
		toggleMenu(child) {
			this.$children.forEach(item => {
				if (child == item._uid) {
					item.showMenu = !item.showMenu
				}
				else {
					item.showMenu = false
				}
			})
		}
	}
}
</script>
