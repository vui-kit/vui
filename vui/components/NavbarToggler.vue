<template>
	<button 
		class="navbar-toggler" 
		type="button" 
		data-toggle="collapse"
		@click="$parent.toggleNavbar()"
	>
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<script>
export default {
	name: 'vui-navbar-toggler'
}
</script>
