<template>
	<div class="callout mt-2 mb-2" :class="type">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-callout',
	props: {
		'type': { type: String, default: 'info' }
	}
}
</script>

<style scoped>
.callout {
	padding: 20px;
	border-top: 1px solid #ccc;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-radius: 5px;
	width: 100%;
}
.callout.success {
	border-left: 8px solid #28a745;
	background-color: rgba(40,167,69,.1);
}
.callout.info {
	border-left: 8px solid #17a2b8;
	background-color: rgba(23,162,184,.1);
}
.callout.warning {
	border-left: 8px solid #ffc107;
	background-color: rgba(255,193,7,.1);
}
.callout.danger {
	border-left: 8px solid #dc3545;
	background-color: rgba(220,53,69,.1);
}
</style>
