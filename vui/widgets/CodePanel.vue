<template>
	<div class="example-panel">
		<div class="example" v-if="this.$slots.example">
			<slot name="example"></slot>
		</div>
		<div class="code">
			<button class="btn btn-light copy-btn" :data-clipboard-text="this.$slots.code[0].text">
				Copy
			</button>
			<pre>
				<code :class="hasType">
					<slot name="code"></slot>
				</code>
			</pre>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-code-panel',
	props: {
		'type': { type: String }
	},
	mounted() {
		const clipboard = new ClipboardJS('.copy-btn')
		Prism.highlightAll()
	},
	computed: {
		hasType() {
			return this.type ? `language-${this.type}` : 'language-html'
		}
	}
}
</script>

<style scoped>
.example-panel {
	border: 1px solid #ccc;
}

.example {
	padding: 20px;
	position: relative;
}

.code {
	overflow: auto;
	white-space: pre-line;
	position: relative;
}

code {
	tab-size: 2;
}

pre {
	margin: 0;
	padding: 0 20px;
	margin-bottom: 0px;
	overflow: auto;
	word-break: break-word;
	font-size: 15px;
	background-color: rgba(0,0,0,.05);
	border: 0px;
	tab-size: 2;
}

.copy-btn {
	position: absolute;
	right: 10px;
	margin-top: 5px;
	margin-right: -10px;
	font-size: 12px;
	background-color: transparent;
	z-index: 10;
}
</style>