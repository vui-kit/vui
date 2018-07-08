<template>
<div>
	<div v-if="setType === 'router-link'">
		<router-link 
			:to="to" 
			class="dropdown-item text-secondary"
			@click.native="$parent.toggleMenu(), $emit('click')"
		>
			<slot></slot>
		</router-link>
	</div>
	<div v-else-if="setType === 'link'">
		<a 
			class="dropdown-item text-secondary" 
			:href="href" 
			:target="target"
			@click="$parent.toggleMenu(), $emit('click')"
		>
			<slot></slot>
		</a>
	</div>
	<div v-else>
		<span 
			class="dropdown-item text-secondary" 
			@click="$emit('click'), $parent.hasAutoClose ? $parent.toggleMenu() : null"
		>
			<slot></slot>
		</span>
	</div>
</div>
</template>

<script>
//bg-light text-secondary
export default {
	name: 'vui-dropdown-item',
	props: {
		'to': { type: String, default: '' },
		'href': { type: String, default: '' },
		'target': { type: String, default: '' }
		
	},
	computed: {
		setType() {
			if (this.to) {
				return 'router-link'
			}
			else if (this.href) {
				return 'link'
			}
		}
	}
}
</script>

<style scoped>
.dropdown-item.active, 
.dropdown-item:active {
	background-color: #fff;
}
.dropdown-item.active:hover, 
.dropdown-item:active:hover {
	background-color: #f8f9fa;
}

span.dropdown-item, 
span.dropdown-item {
	background-color: #fff;
	cursor: pointer;
	color: dimgrey;
}
span.dropdown-item.active:hover, 
span.dropdown-item:active:hover {
	background-color: #f8f9fa;
}
</style>
