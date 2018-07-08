<template>
	<img :src="`https://via.placeholder.com/${size}/${hasColor}/${hasText}`">
</template>

<script>
export default {
	name: 'vui-img-placeholder',
	props: {
		'size': { type: String, default: null },
		'color': { type: String, default: 'secondary' },
		'text': { type: String, default: null }
	},
	computed: {
		hasColor() {
			if (this.color === 'primary') {
				return '007bff/ffffff'
			}
			else if (this.color === 'secondary') {
				return '6c757d/ffffff'
			}
			else if (this.color === 'success') {
				return '28a745/ffffff'
			}
			else if (this.color === 'danger') {
				return 'dc3545/ffffff'
			}
			else if (this.color === 'warning') {
				return 'ffc107/343a40'
			}
			else if (this.color === 'info') {
				return '17a2b8/ffffff'
			}
			else if (this.color === 'light') {
				return 'ffffff/343a40'
			}
			else if (this.color === 'dark') {
				return '343a40/ffffff'
			}
		},
		hasText() {
			return this.text ? `?text=${this.text}` : null
		}
	}
}
</script>