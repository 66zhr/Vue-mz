<template>
	<div>
		<ul class="move">
			<li v-for="item in nowplaying">
				<div class="bjtu">
					<router-link :to="'/detail/'+item.id">
						<img :src="item.cover.origin">
					</router-link>
				</div>
				<div class="film-name">
					<span>{{item.name}}</span>
					<span>{{item.cinemaCount}}</span>
					<span>家影院上映</span>
					<span>{{item.watchCount}}</span>
					<span>人购票</span>
				</div>
				<div class="pj">
					<span>{{item.grade}}</span>
				</div>
			</li>
		</ul>
		<div class="movehot">
			<router-link to="/film">
				<button>更多热映电影</button>
			</router-link>
			</div>
		<div class="dividing-line"><div class="upcoming">即将上映</div></div>


	</div>
</template>

<script>
   import {mapState,mapActions,mapMutations} from 'vuex';

   export default {
   	  created(){
			this.resetList();
   	  		this.getList({type:"now-playing",count:5});
   	  },
   	  computed:{
   	  	  ...mapState({
   	  	  	"nowplaying":(state)=>state.movielist["now-playing"]
   	  	  })
   	  },
   	  methods:{
			...mapActions(["getList"]),
			...mapMutations(["resetList"])
   	  }
   }

</script>
<style scoped lang="scss">
$sc:25;
	.move{
		width:100%;
		height: 100%;
		background: #ebebeb;
		padding-top: 18px;
		img{
			width:100%;
		}
	}
	.move li{
		margin: 0 17px 17px 17px;
		height: 100%;
		background-color: #f9f9f9;
		box-shadow: 0.5px 0.5px 1px #a8a8a8;
		overflow: hidden;
		cursor: pointer;
		.bjtu{
			height: 190/$sc+rem;
			overflow: hidden;
			img{
				width: 100%;
				height:100%;
			}
		}
		.film-name{
			height: 50px;
			margin-left:10px;
			float: left; 
		}
		.pj{
			width: 50px;
			line-height: 50px;
			text-align: center;
			color: #f78360;
			font-size: 18px;
			float: right;
		}
		.film-name span:nth-child(1){
			width:100%;
			font-size: 12px;
			float: left;
			margin-top:10px; 
		}

		.film-name span:nth-child(2){
			color: #9a9a9a;
			font-size: 12px;
			float: left;
			margin-top:4px; 
		}
		.film-name span:nth-child(3){
			margin-top:4px; 
			font-size: 8px;
			color: #9a9a9a;
			float: left;
		}
		.film-name span:nth-child(4){
			margin-top:4px; 
			font-size: 8px;
			color: #9a9a9a;
			float: left;
		}
		.film-name span:nth-child(5){
			margin-top:4px; 
			font-size: 8px;
			color: #9a9a9a;
			float: left;
		}
	}
	.movehot{
		width:100%;
		background:#ebebeb;
		button{
			margin: 0 auto;
			display: block;
			width: 160px;
			height: 30px;
			border: 1px solid #aaa;
			border-radius: 15px;
			text-align: center;
			line-height: 30px;
			font-size: 12px;
			color: #616161;
			cursor: pointer;
		}
	}
	.dividing-line{
		display: block;
		height: 100%;
		width: 100%;
		background:#ebebeb;
		padding-top: 10px;
		border-bottom: 1px solid #a8a8a8;

		}

	.upcoming{
		margin: 0 auto;
		width: 65px;
		height: 20px;
		
		border-radius: 5px;
		font-size: 10px;
		line-height: 20px;
		text-align: center;
		color: #eee;
		background-color: #a7a7a7;
	}

</style>

