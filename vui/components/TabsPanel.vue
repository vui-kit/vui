<template>
	<div class="card shadow-sm rounded">
		<ul class="nav nav-tabs">
			<li 
				v-for="(tab, index) in tabs"
				class="nav-item"
				:key="index"
				@click="tabClick(tab.content, index)"
			>
				<a 
					class="nav-link" 
					:class="{ 'active': tab.active }"  
					ref="tab1-tab"
					href="#"
				>
					{{ tab.label }}
				</a>
			</li>
		</ul>

		<div class="card-body">
			<div class="tab-content">
				<div 
					class="tab-pane fade"
					:class="{ 'active': tab.active, 'show': tab.active }"
					v-for="(tab, index) in tabs"
					:key="index"	 
					:ref="tab.content"
				>
					<slot :name="tab.content"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabPanel',
	props: {
		'tabs': { type: Array, required: true }
	},
	methods: {
		tabClick(tab, index) {
			// clear all active classes
			this.tabs.forEach(tab => {
				tab.active = false
			})

			// set current active class
			this.tabs[index].active = true
		}
	}
}
</script>

<style scoped>
.nav-link.active {
	font-weight: bold;
}
</style>
