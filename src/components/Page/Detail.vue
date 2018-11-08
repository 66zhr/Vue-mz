<template>
	<div class="details">
		<img :src=" movie.cover.origin" />
		<div class="synopsis">影片简介</div>
        <div class="director">主&nbsp;&nbsp;&nbsp;&nbsp;演&nbsp;&nbsp;:<span>{{movie.director}}</span></div>
		<div class="director">导&nbsp;&nbsp;&nbsp;&nbsp;演&nbsp;&nbsp;:<span v-for="(item, key) in movie.actors">{{item.name}}</span></div>
        <div class="language">地区语言&nbsp;&nbsp;:<span>{{movie.nation}}</span><span>{{movie.language}}</span></div>
        <div class="types">类&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;&nbsp;:<span>{{movie.category}}</span></div>
		<div class="day">上映日期&nbsp;&nbsp;:<span>{{movie.premiereAt|formateDate}}</span></div>
        <div class="ctn"><span>{{movie.synopsis}}</span></div>
        
		<div class="btn">
			<button>立即购票</button>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			movie:{
				cover:{}
			}
		}
	},
	created(){
		var id=this.$route.params.id;
		this.$http.get("/mz/v4/api/film/"+id,{
			params:{
				__t:new Date().getTime()
			}
		}).then((res)=>{
			this.movie = res.data.data.film
			this.$root.bus.$emit("moviename",this.movie.name);
		})
	}

}

</script>
<style scoped lang="scss">
	$sc:25;
	.details{
		color: rgb(41, 41, 41);
		font-size:14/$sc+rem;
		background: #ebebeb;
	}
	img{
		width: 100%;
	}
	.synopsis{
		margin: 16/$sc+rem auto;
		border-left: 16/$sc+rem solid RGB(228, 200, 156);
		font-size: 16/$sc+rem;
		padding-left: 4/$sc+rem;
	}
	.director{
		height: 18/$sc+rem;
		overflow: hidden;
		margin-bottom: 10/$sc+rem;
		padding-left: 20/$sc+rem;
		span{
			padding-left: 10/$sc+rem;
		}
	}
	.language{
		letter-spacing :-2px;
		height: 18px;
		overflow: hidden;
		margin-bottom: 10px;
		padding-left: 20px;
		span{
			letter-spacing :0px;
			padding-left: 12/$sc+rem;
		}
	}
	.types{
		height: 18px;
		overflow: hidden;
		margin-bottom: 10px;
		padding-left: 20px;
		span{
			letter-spacing :0px;
			padding-left: 10/$sc+rem;
		}
	}
	.day{
		height: 18px;
		overflow: hidden;
		margin-bottom: 10px;
		padding-left: 20px;
		letter-spacing :-2px;
		span{
			letter-spacing :0px;
			padding-left: 10/$sc+rem;
		}
	}
	.ctn{
		text-overflow: ellipsis;
		margin-bottom: 80px;
		padding-left: 20px;
		padding-right: 20px;
	}
	.btn{
		position: fixed;
		left: 0;
		bottom: 20px;
		width: 100%;
		text-align: center;
		button{
			font-size: 14px;
			min-width: 156px;
			height: 36px;
			line-height: 36px;
			border: none;
			background-color: #fe8233;
			padding: 0;
			margin: 0;
			border-radius: 18px;
			color: #fff;
		}
	}
</style>