<template>
	<ul 
		class="nav" 
		:class="{ 
			'nav-tabs': hasTabs, 
			'nav-pills': hasPills, 
			'nav-fill': hasFill,
			'nav-justified': isJustified 
		}"
	>
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'vui-nav',
	props: {
		'tabs': { type: Boolean, default: false },
		'pills': { type: Boolean, default: false },
		'fill': { type: Boolean, default: false },
		'justified': { type: Boolean, default: false }
	},
	computed: {
		hasTabs() {
			return !!this.tabs
		},
		hasPills() {
			return !!this.pills
		},
		hasFill() {
			return !!this.fill
		},
		isJustified() {
			return !!this.justified
		}
	}
}
</script>