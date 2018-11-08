<template>
	<div>
		<ul   v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
			<li v-for="item in movielist.list">
				<img :src="item.poster.origin" />
            <div class="movename">
              <span>{{item.name}}</span>
              <span  class="fa fa-chevron-right right"></span>
              <span>{{item.grade}}</span>
            </div>
            <span class="moveintro">{{item.intro}}</span> 
            <div class="movexq">
              <span>{{item.cinemaCount}}</span>
              <span>家影院上映</span>
              <span>{{item.watchCount}}</span>
              <span>人购票</span>
            </div>  
            <div v-if="type==='now-playing'"></div>
            <h1 v-else>上映</h1>

            
			</li>
		</ul>
	</div>
</template>

<script>
   import {mapState,mapActions,mapMutations} from 'vuex';
   export default {
       data(){
         return {
           type:''
         }
       },
       computed:{
         ...mapState(["movielist","list"])
       },
   	 watch:{
          $route:{
             handler(n){
                  this.type=n.params.type;
                  this.resetList();
                  if(!this.type){
                     this.type='now-playing'
                  }
                  this.getList({type:this.type,page:'movielist',count:7});
             },
             immediate:true
          }
       },
       methods:{
          ...mapMutations(["resetList"]),
          ...mapActions(["getList"]),
          loadMore(){
             this.getList({type:this.type,page:'movielist',count:7});
          }
       }
   }

</script>

<style scoped lang="scss">
  $sc:25;
  ul{
    background-color: #f9f9f9;
    height:100%;
    padding-left:10px;
    padding-right:10px;
    li{
      padding: 20px 0;
      width: 100%;
      padding: 20px 0;
      border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
      img{
        width:60px;
        float: left;
      }
      .movename{
        height: 20px;
        margin-left:78px;
        margin-top:10px;
        font-size:16px;
      }
      .movename span:nth-child(1){
          float: left;
      }
      .movename span:nth-child(2){
          float: right;
          font-size:12px;
          margin-right:30px; 
          margin-top:4px; 
          color: #cacaca;
      }
      .movename span:nth-child(3){
          float: right;
          margin-right:4px;
          color: #fc7103;
      }
      .moveintro{
        color: #8e8e8e;
        font-size: 12px;
        display: block;
        margin-top:14px;
        margin-left:78px;
      }
      .movexq{
        color: #8e8e8e;
        font-size: 12px;
        margin-top:10px;
        margin-left:78px;
      }
    }
  }




</style>
