<template>
	<div 
		class="card"
		:class="`text-${align}`"
		:style="{ 'width': width }"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vui-card',
	props: {
		'width': { type: String, default: null },
		'align': { type: String, default: 'left' }
	}
}
</script>
