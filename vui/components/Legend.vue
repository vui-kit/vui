<template>
	<legend :class="align">
		<slot></slot>
	</legend>
</template>

<script>
export default {
	name: 'vui-legend',
	props: {
		'align': { type: String, default: null }
	}
}
</script>

<style scoped>
legend {
	font-size: 1.2rem;
  padding: 6px;
	width: auto;
}
legend.center {
	text-align: center;
}
legend.right {
	text-align: right;
}
legend + * {
    -webkit-margin-top-collapse: separate;
}
</style>