<template>
	<nav class="breadcrumb">
			<span 
				class="" 
				v-for="(path, index) in paths" 
				:key="index"
			>	
				<span v-if="index < paths.length -1">
					<router-link :to="buildPath(index)">
						{{ path }}
					</router-link> 
					<span class="breadcrumb-seperator">{{ seperator }}</span>
				</span>
				<span v-else>{{ path }}</span>
			</span>
	</nav>
</template>

<script>
let to = ''

export default {
	name: 'vui-breadcrumb',
	props: {
		'seperator': { type: String, default: '/' }
	},
	data() {
		return {
			paths: [],
			routePath: ''
		}
	},
	mounted() {
		// clear previous stored route data
		to = ''
		this.paths = []
		// set fresh route data
		this.routePath = ''
		let routePath = this.$route.path
		let pathArray = routePath.split("/")

		pathArray.forEach((item) => {
			if (item !== "") {
				this.paths.push(item.charAt(0).toUpperCase() + item.slice(1))
			}
		})	
	},
	methods: {
		buildPath(idx) {
			to += `/${this.paths[idx].toLowerCase()}`
			return to
		}
	}
}
</script>

<style scoped>
.breadcrumb-item {
	cursor: pointer;
}

.breadcrumb-seperator {
	padding-left: 10px;
	padding-right: 10px;
}
</style>
