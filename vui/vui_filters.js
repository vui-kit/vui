import Vue from 'vue'

Vue.filter('capFirst', function(value) {
	if (!value) return ''
	value = value.toString()
	return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('capAll', function(value) {
	if (!value) return ''
	value = value.toString()
	return value.toUpperCase()
})

Vue.filter('lowercase', function(value) {
	if (!value) return ''
	value = value.toString()
	return value.toLowerCase()
})