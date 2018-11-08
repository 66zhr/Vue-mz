<template>
		<div>
			<Swiper/>
			<nowPlaying/>
			<comingSoon/>
		</div>
</template>
<script>
	import Swiper from "../Common/Swiper"
	import nowPlaying from './nowPlaying'
	import comingSoon from './comingSoon'
	export default {
		components:{
            Swiper,nowPlaying,comingSoon
		},
		created(){
			
		}
    }
</script>
<style  scoped lang="scss">

</style>
