<template>
	<div class="wrapper">
		<span class="caption" :class="capAlign">
			{{ cap }}
		</span>
		<img class="image" :src="src" />
	</div>
</template>

<script>
export default {
	name: 'vui-card-image',
	props: {
		'src': { type: String, default: null },
		'cap': { type: String, default: null },
		'capAlign': { type: String, default: 'middle' }
	}
}
</script>

<style scoped>
.wrapper {
	position: relative;
}

image {
	z-index: 1;
	width: 100%;
	height: auto;
}

.caption {
	left: 0;
	position: absolute;
	text-align: center;
	width: 100%;
	color: white;
	font-size: 20px;
	z-index: 2;
	margin: auto;
}

.caption.top {
	top: 20px;
}
.caption.middle {
	top: 45%;
}
.caption.bottom {
	bottom: 20px;
}
</style>
