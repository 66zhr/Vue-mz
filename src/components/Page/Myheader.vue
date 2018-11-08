<template>
	<div class="myheader">
		<i class="fa fa-align-justify" @click="toggle"></i>
		<h3>{{title}}</h3>
		<i class="fa fa-user-o icn3"></i>
		<router-link to="/city">
		<span> {{city}} <i class="fa fa-angle-down icn2"></i></span>
		</router-link>
	</div>

</template>
<script>
export default {
	props:["toggle"],
	data(){
		return{
			title:"卖座电影",
			city:"北京"
		}
	},
	created(){
		this.$root.bus.$on("moviename",(name)=>{
			this.title = name;
		})
		this.$root.bus.$on("cityname",(name)=>{
			this.city = name;
		})
		this.$router.beforeEach((to,from,next)=>{
			this.changetitle(to.path);
			next()
		})
	},
	methods:{
		changetitle(path){
			switch(path){
				case "/city":this.title='选择城市';break;
				default:this.title="卖座电影"
			}
		}
	}
}
</script>	

<style lang="scss" scoped>
   $sc:25;
   .myheader{
   	    background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: 50/$sc+rem;
	    line-height: 50/$sc+rem;
	    overflow: hidden;
   	    color:#efefef;
		font-size: 14/$sc+rem;
		a{
			color: #efefef;
		}
   	    i{
			float: left;
			width: 48/$sc+rem;
			border-right:1px solid rgb(31, 31, 31); 
			line-height: 50/$sc+rem;
			text-align: center;
   	    }
	   	h3{
			float: left;
			padding-left:14/$sc+rem;
			padding-right:14/$sc+rem;
			font-size: 14/$sc+rem;
		}
		span{
			float: right;
			padding-left:4/$sc+rem;
			padding-right:4/$sc+rem;
			.icn2{
				width: 14/$sc+rem;
				border: none;
				float: right;
			}
		}
		.icn3{
			float: right;
		}
   }
	
</style>