<template>
	<ul 
		class="list-group" 
		:class="{ 'list-group-flush': isFlush }"
	>
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'vui-list-group',
	props: {
		'flush': { type: Boolean, default: false }
	},
	computed: {
		isFlush() {
			return !!this.flush
		}
	}
}
</script>