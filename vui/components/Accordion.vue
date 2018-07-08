<template>
	<div class="accordion">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-accordian',
	methods: {
    openChild(child) {
			this.$children.forEach(item => {
				if (child !== item) {
					item.open = false
				}
			})
    }
  }
}
</script>
