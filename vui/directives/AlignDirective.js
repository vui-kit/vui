import Vue from 'vue'

Vue.directive('align', {
	bind: function(el, binding) {
		if (binding.arg) {
			el.classList.add(`align-${binding.arg}`)			
		}
	}
})