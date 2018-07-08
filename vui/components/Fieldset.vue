<template>
	<fieldset>
		<slot></slot>
	</fieldset>
</template>

<script>
export default {
	name: 'vui-fieldset'
}
</script>

<style scoped>
fieldset {
	border: 1px solid #ccc;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;	
	border-radius: 4px;	
	padding: 10px;
}
legend + * {
	clear:both;
}
</style>
