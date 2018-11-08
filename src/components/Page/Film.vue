<template>
   <div class="bjcolor">
	   <div class="list">
   		<router-link to="/film/now-playing" :class="[(type === 'now-playing')?'listcolor':'']">正在热映</router-link>
   		<router-link to="/film/coming-soon" :class="[(type === 'coming-soon')?'listcolor':'']" >即将上映</router-link>
	   </div>
   		<div><router-view /></div>
   </div>
</template>
<script>
export default {
	data(){
		return{
			type:'now-playing'
		}
	},
	watch:{
		$route:{
			handler(n){
				console.log(n.params)
				this.type = n.params.type;
			},
		}
	},
	methods:{
		changeflag(){
			this.flag=!this.flag
			console.log(1111)
		}
	}
}
</script>
<style scoped lang="scss">
	$sc:25;
	.bjcolor{
		height: 100%;
		overflow: auto;
		background-color: #f9f9f9;
	}
	.list{
		display:block;
		margin:0px 10px 0px 10px;
		display: block;
		height: 46px;
		border-bottom: solid #fe6e00 1px;
		
		a{
			float: left;
			display: block;
			line-height: 46px;
			text-align: center;
			width: 50%;
			height: 100%;
			font-size: 16px;
			color: #6a6a6a;
			border-bottom: solid #ffffff 2px;
	}
	.listcolor{
			color:#fe6e00;
			font-weight: bold;
			border-bottom: solid #fe6e00 2px;
		}
	}
</style>
