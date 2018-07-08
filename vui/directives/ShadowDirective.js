import Vue from 'vue'

Vue.directive('shadow', {
	bind: function(el, binding) {
		if (!binding.arg) {
			el.classList.add('shadow')			
		}
		else {
			el.classList.add(`shadow-${binding.arg}`)
		}
	}
})