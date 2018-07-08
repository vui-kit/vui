<template>
	<span class="badge" :class="[hasColor, hasPill]">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: 'vui-badge',
	props: {
		'color': { type: String, default: 'secondary' },
		'pill': { type: Boolean, default: false }
	},
	computed: {
		hasColor() {
			return this.color ? `badge-${this.color}` : null
		},
		hasPill() {
			return this.pill ? 'badge-pill' : null
		}
	}
}
</script>