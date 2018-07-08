import Vue from 'vue'

Vue.directive('float', {
	bind: function(el, binding) {
		if (binding.arg) {
			el.classList.add(`float-${binding.arg}`)			
		}
	}
})