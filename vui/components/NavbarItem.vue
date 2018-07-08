<template>
	<li class="nav-item">
		<router-link 
			v-if="!isDisabled" 
			:to="to"
			:exact="isExact"
			class="nav-link"
			:class="{ 'active-link': isActive }"
			@click.native="$parent.$parent.$parent.toggleNavbar()"
		>
			<slot></slot>
		</router-link>

		<a class="nav-link disabled-link disabled" disabled v-else-if="isDisabled">
			<slot></slot>
		</a>
	</li>
</template>

<script>
export default {
	name: 'vui-nav-item',
	props: {
		'to': { type: String, default: '/' },
		'exact': { type: Boolean, default: null },
		'active': { type: Boolean, default: false },
		'disabled': { type: Boolean, default: false }
	},
	computed: {
		isExact() {
			return this.exact ? true : false
		},
		isActive() {
			return !!this.active
		},
		isDisabled() {
			return !!this.disabled
		},
	}
}
</script>

<style scoped>
/* LIGHT THEME CLASSES */
.nav-link .active {
	font-weight: 400;
	color: rgba(0,0,0,.7);
}
.nav-link.disabled-link {
	font-weight: 400;
	color: rgba(0,0,0,.4) !important;
	cursor: default !important;
}
.nav-link.active-link {
	font-weight: 600;
	color: rgba(0,0,0,.7) !important;
}
.nav-link {
	color: dimgrey !important;
	font-weight: 400;
}

/* DARK THEME CLASSES */
.navbar.navbar-dark .nav-link.disabled-link.disabled {
	font-weight: 400 !important;
	color: rgba(255,255,255,.45) !important;
	cursor: default !important;
}
.navbar.navbar-dark .nav-link.active-link {
	font-weight: 400 !important;
	color: white !important;
}
.navbar.navbar-dark .nav-link:active {
	font-weight: 400 !important;
	color: white !important;
}
.navbar.navbar-dark .nav-link {
	color: rgba(255,255,255,.8) !important;
	font-weight: 400 !important;
}
.navbar.navbar-dark .nav-link:hover {
	color: rgba(255,255,255,.95) !important;
	font-weight: 400 !important;
}
</style>

