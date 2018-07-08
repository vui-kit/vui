import Vue from 'vue'

Vue.directive('drag', {
	inserted: function(el, binding) {
		Draggable.create(el, {
			type: "x,y", 
			edgeResistance: .8, 
			trigger: binding.value,
			bounds: "#" + binding.arg, 
			throwProps: true
		})
	}
})