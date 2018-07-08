<template>
	<div class="alert" :class="hasColor" role="alert" v-show="isShown">
		<slot></slot>
		<button 
			type="button" 
			class="close alert-close-btn" 
			@click="close"
			v-show="dismissible"
		>
			<i class="fa icon-remove"></i>
		</button>
	</div>
</template>

<script>
export default {
	name: 'vui-alert',
	props: {
		'color': { type: String, default: 'danger' },
		'dismissible': { type: Boolean, default: false },
		'timer': { type: Number, default: null }
	},
	data() {
		return {
			isShown: true
		}
	},
	updated() {		
		this.timer ? this.setTimer() : null
	},
	computed: {
		hasColor() {
			return this.color ? `alert-${this.color}` : null
		},
		isDismissible() {
			return this.dismissible ? true : false
		}
	},
	methods: {
		close() {
			return this.isShown = false
		},
		setTimer() {			
			let vm = this
			setTimeout(() => {
				vm.close()
			}, vm.timer);
		}
	}
}
</script>

<style scoped>
.alert-close-btn {
	position: absolute;
	top: .5em;
	right: .5em;
}
</style>
