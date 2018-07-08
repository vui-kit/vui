<template>
	<li 
		class="list-group-item list-group-item-action" 
		:class="[hasColor, { 
			'active': isActive, 
			'disabled': isDisabled,
			'm-0': isLink || isRlink || isButton,
			'p-0': isLink || isRlink || isButton,
		}]"
	>
		<slot v-if="!isLink && !isRlink && !isButton"></slot>

		<a 
			:href="href" 
			class="list-group-item list-group-item-action"
			:class="[hasColor, { 'active': isActive, 'disabled': isDisabled }]"
			v-if="isLink"
		>
			<slot v-if="isLink"></slot>
		</a>

		<router-link 
			:to="to"
			tag="a" 
			class="list-group-item list-group-item-action rlink"
			:class="[hasColor, { 'disabled': isDisabled }]"
			:active="isActive"
			v-if="isRlink"
		>
			<slot v-if="isRlink"></slot>
		</router-link>

		<button @click="$emit('click')" 
			class="list-group-item list-group-item-action"
			:class="[hasColor, { 'active': isActive, 'disabled': isDisabled }]"
			v-if="isButton"
		>
			<slot v-if="isButton"></slot>
		</button>
	</li>
</template>

<script>
export default {
	name: 'vui-list-group-item',
	props: {
		'active': { type: Boolean, default: false },
		'disabled': { type: Boolean, default: false },
		'link': { type: Boolean, default: false },
		'rlink': { type: Boolean, default: false },
		'button': { type: Boolean, default: false },
		'href': { type: String, default: '' },
		'to': { type: String, default: '' },
		'color': { type: String, default: '' }
	},
	computed: {
		isActive() {
			return !!this.active
		},
		isDisabled() {
			return !!this.disabled
		},
		isLink() {
			return !!this.link
		},
		isRlink() {
			return !!this.rlink
		},
		isButton() {
			return !!this.button
		},
		hasColor() {
			return this.color ? `list-group-item-${this.color}` : null
		}
	}
}
</script>

<style scoped>
.disabled {
	pointer-events: none; 
	opacity: 0.6;
}

.rlink {
	background: #fff; 
	color: #000; 
	border: 1px solid #ccc
}
.rlink:hover {
	background-color: rgba(240,248,255,.5) !important;
}
.rlink.router-link-active,
.rlink.router-link-exact-active
 {
	background: inherit; 
	color: inherit;
	border: inherit;
}
a, button, .rlink {
	border-top: none !important;
	border-bottom: none !important;
}
</style>
