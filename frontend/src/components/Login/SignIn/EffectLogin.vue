<template>
    <div>
        <div class="efect-title">
			<h1>FIRST WEB</h1>
        </div>
        <div class="efect-subtitle">
		SUBTITLE	
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.efect-title {
	position: relative;
	font-size: 5rem;
	margin: 0 -20px -10px -20px;
	-webkit-animation: efect-login 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation        : efect-login 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.efect-subtitle {
	position: relative;
	font-size: 1em;
	margin: 0;
	-webkit-animation: efect-login 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation        : efect-login 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes efect-login {
	0% {
	letter-spacing: -0.5em;
	-webkit-filter: blur(12px);
	filter        : blur(12px);
	opacity       : 0;
	}
	100% {
	-webkit-filter: blur(0px);
	filter        : blur(0px);
	opacity       : 1;
	}
}
@keyframes efect-login {
	0% {
	letter-spacing: -0.5em;
	-webkit-filter: blur(12px);
	filter        : blur(12px);
	opacity       : 0;
	}
	100% {
	-webkit-filter: blur(0px);
	filter        : blur(0px);
	opacity       : 1;
	}
}
</style>