<template>
	<div class="container">
		<div class="row">
			<div class="col-md-10 offset-md-1">
				<div 
					class="card shadow rounded" 
					:class="`vertical-${modalPosition}`"
					:style="`
						top:${topOffset}%; 
						transform: translate(-50%, -${topOffset}%);
						width: ${width}%
					`"
				>
					<div class="card-header" :class="hasColor">
						
						<div class="row" v-if="!hasHeaderTemplate">
							<div class="col-10">
								<h5 class="modal-title">
									<i :class="[`ficon-${icon}`, `mr-1`]"></i> {{ title }}
								</h5>
							</div>
							<div class="col-2">
								<button
									type="button" 
									class="close float-right"
									@click="closeModal"
								>
									&times;
								</button>	
							</div>
						</div>

						<slot name="header" v-if="hasHeaderTemplate"></slot>

					</div>
					<div class="card-body card-text w-100">
						<slot></slot>
					</div>
					<div class="card-footer text-muted text-right" v-if="hasFooter">
						<template v-if="!hasFooterTemplate">
							<vui-button @click="closeModal">Cancel</vui-button>
							<vui-button color="primary" @click="$emit('ok')">Ok</vui-button>
						</template>

						<slot name="footer" v-if="hasFooterTemplate"></slot>
					</div>
				</div>
				<div class="lightbox"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vui-modal',
	props: {
		'icon': { type: String, default: '' },
		'title': { type: String, default: 'Modal' },
		'color': { type: String, default: 'light' },
		'position': { type: String, default: 'top' },
		'topOffset': { type: String, default: '50' },
		'width': { type: String, default: '50' },
		'headerTemplate': { type: Boolean, default: false },
		'footerTemplate': { type: Boolean, default: false },
		'noFooter': { type: Boolean, default: false }
	},
	data() {
		return {
			close: false,
			modalPosition: this.position
		}
	},
	computed: {
		hasColor() {
			if (this.color === 'warning' || this.color === 'light') {
				return `bg-${this.color} text-dark`
			}
			else if (this.color !== 'warning' || this.color !== 'light') {
				return `bg-${this.color} text-white`
			}
			else if(!this.color) {
				return null
			}
		},
		hasHeaderTemplate() {
			return !!this.headerTemplate
		},
		hasFooterTemplate() {
			return !!this.footerTemplate
		},
		hasFooter() {
			return this.noFooter ? false : true
		}
	},
	methods: {
		closeModal() {
			return this.$emit('close')
		}
	}
}
</script>

<style scoped>
.vertical-center {
	position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	-webkit-animation-duration: 1s;
  animation-duration: 1s;
	-webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.vertical-top {
	position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
	-webkit-animation-duration: 1s;
  animation-duration: 1s;
	-webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeIn {
	0% {opacity: 0;}
	100% {opacity: 1;}
}

@keyframes fadeIn {
	0% {opacity: 0;}
	100% {opacity: 1;}
}

.card {
	z-index: 1022 !important;
}

.lightbox {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0,0,0,.5);
	z-index: 1021 !important;
}
</style>
