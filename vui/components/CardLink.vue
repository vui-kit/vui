<template>
	<a class="card-link" :href="href" :target="target">
		<slot></slot>
	</a>
</template>

<script>
export default {
	name: 'vui-card-link',
	props: {
		'href': { type: String, default: null },
		'target': { type: String, default: '_blank' }
	}
}
</script>