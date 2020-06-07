<template>
	<div id="layout-login" class="justify-content-center">
		<LayoutLogin id="LayoutLogin" class="
		col-sm-12
		col-md-12
		col-lg-3
		align-self-center
		m-3
		p-2
		">
		<slot></slot>
		</LayoutLogin>
		
		<div id="circle-animate" class="
		d-none 
		d-md-block
		">
			<div class="outer-ring center"></div>
			<div class="inner-ring center"></div>
		</div>
	</div>
</template>

<script>
import LayoutLogin from './SignIn/LayoutLogin.vue'

export default {
	components: {
		LayoutLogin
	}
}
</script>

<style scooped>
#LayoutLogin {
	z-index: 2;
}
#layout-login {
	display         : flex;
	flex-direction  : row;
	width           : 100vw;
	height          : 100vh;
	min-height: 820px;
	margin          : 0;
	overflow-y      : auto;
	justify-content : center;
	background-color: var(--first-color);
	z-index         : -1;
}
#circle-animate {
	position       : absolute;
	left           : calc(50% - 400px);
	top            : calc(50% - 400px);
	z-index        : 1;
	width          : 800px;
	height         : 800px;
	overflow       : hidden;
	flex-wrap      : wrap;
	justify-content: center;
	align-items    : center;
}
.center {
  margin: 0 auto;
}

.outer-ring {
	position        : absolute;
	z-index         : 1;
	left            : calc(50% - 400px);
	top             : calc(50% - 400px);
	width           : 800px;
	height          : 800px;
	background-image: linear-gradient(135deg, var(--first-color) 0%, var(--second-color) 5%, var(--third-color) 15%, var(--fourth-color) 50%, var(--fifth-color) 100%);
	border-radius   : 50%;

	/*  Rotate  */
	animation-duration       : 4s;
	animation-name           : rotate;
	animation-iteration-count: infinite;
}

.inner-ring {
	z-index         : 1;
	position        : absolute;
	left            : calc(50% - 375px);
	top             : calc(50% - 375px);
	width           : 750px;
	height          : 750px;
	background-color: white;
	border-radius   : 50%;
}

@keyframes rotate {
	0% {
	transform: rotate(0deg);
	}
	100% {
	transform: rotate(360deg);
	}
}
</style>