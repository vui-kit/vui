import Vue from 'vue'

Vue.directive('font', {
	bind: function(el, binding) {
		if (binding.arg === 'lcase') {
			el.classList.add('text-lowercase')			
		}
		else if (binding.arg === 'ucase') {
			el.classList.add('text-uppercase')			
		}
		else if (binding.arg === 'cap') {
			el.classList.add('text-capitalize')			
		}

		else if (binding.arg === 'justify') {
			el.classList.add('text-justify')			
		}
		else if (binding.arg === 'left') {
			el.classList.add('text-left')			
		}
		else if (binding.arg === 'center') {
			el.classList.add('text-center')			
		}
		else if (binding.arg === 'right') {
			el.classList.add('text-right')			
		}

		else if (binding.arg === 'truncate') {
			el.classList.add('text-truncate')
		}

		else if (binding.arg === 'bold') {
			el.classList.add('font-weight-bold')
		}
		else if (binding.arg === 'normal') {
			el.classList.add('font-weight-normal')
		}
		else if (binding.arg === 'light') {
			el.classList.add('font-weight-light')
		}
		else if (binding.arg === 'italic') {
			el.classList.add('font-italic')
		}
		else if (binding.arg === 'monospace') {
			el.classList.add('text-monospace')
		}
	}
})