import Vue from 'vue'

Vue.directive('color', {
	bind: function(el, binding) {
		if (binding.arg === 'txt' && binding.value !== '') {
			// Overrides preset router-link color property
			el.style.color = ''
			el.classList.add(`text-${binding.value}`)			
		}
		if (binding.arg === 'bg' && binding.value !== '') {
			el.classList.add(`bg-${binding.value}`) 			
		}
	}
})