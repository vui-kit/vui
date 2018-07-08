import Vue from 'vue'

Vue.directive('border', {
	bind: function(el, binding) {

		// Additive: All Boders
		if (!binding.arg && !binding.modifiers[0]) {
			el.classList.add("border")			
		}
		// Additive: Top Boder
		else if (binding.arg === 'top' && !binding.modifiers[0]) {
			el.classList.add("border-top")
		}
		// Additive: Right Boder
		else if (binding.arg === 'right' && !binding.modifiers[0]) {
			el.classList.add("border-right")
		}
		// Additive: Bottom Boder
		else if (binding.arg === 'bottom' && !binding.modifiers[0]) {
			el.classList.add("border-bottom")
		}
		// Additive: Left Boder
		else if (binding.arg === 'left' && !binding.modifiers[0]) {
			el.classList.add("border-left")
		}

		// Subtractive: No Boders
		else if (!binding.arg && binding.modifiers[0]) {
			el.classList.add("border-0")			
		}
		// Subtractive: No Top Boder
		else if (binding.arg === 'top' && binding.modifiers[0]) {
			el.classList.add("border")
			el.classList.add("border-top-0")			
		}
		// Subtractive: No Right Boder
		else if (binding.arg === 'right' && binding.modifiers[0]) {
			el.classList.add("border")
			el.classList.add("border-right-0")			
		}
		// Subtractive: No Bottom Boder
		else if (binding.arg === 'bottom' && binding.modifiers[0]) {
			el.classList.add("border")
			el.classList.add("border-bottom-0")			
		}
		// Subtractive: No Left Boder
		else if (binding.arg === 'left' && binding.modifiers[0]) {
			el.classList.add("border")
			el.classList.add("border-left-0")			
		}

		// Border Colors
		if (binding.value) {
			el.classList.add("border-" + binding.value)
		}

		// Border Radius: All
		if (binding.modifiers['rounded']) {
			el.classList.add("rounded")
		}
		// Border Radius: Top
		else if (binding.modifiers['rounded-top']) {
			el.classList.add("rounded-top")
		}
		// Border Radius: Right
		else if (binding.modifiers['rounded-right']) {
			el.classList.add("rounded-right")
		}
		// Border Radius: Bottom
		else if (binding.modifiers['rounded-bottom']) {
			el.classList.add("rounded-bottom")
		}
		// Border Radius: Left
		else if (binding.modifiers['rounded-left']) {
			el.classList.add("rounded-left")
		}
		// Border Radius: Circle
		else if (binding.modifiers['rounded-circle']) {
			el.classList.add("rounded-circle")
		}
		// Border Radius: None
		else if (binding.modifiers['rounded-0']) {
			el.classList.add("rounded-0")
		}
		
		// el.innerHTML =
		// 	'name - '       + binding.name + '<br>' +
		// 	'expression - ' + binding.expression + '<br>' +
		// 	'argument - '   + binding.arg + '<br>' +
		// 	'modifiers - '  + JSON.stringify(binding.modifiers) + '<br>' +
		// 	'value - '      + binding.value
  }
})