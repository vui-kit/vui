<template>
	<a :href="href" class="alert-link">
		<slot></slot>
	</a>
</template>

<script>
export default {
	name: 'vui-alert-link',
	props: {
		'href': { type: String, default: null }
	}
}
</script>