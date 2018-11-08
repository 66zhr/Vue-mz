<template>
    <div v-scroll="obj"  dis="400">

        <div class="title">GPS定位你所在城市</div>
        <ul class="list-unstyled" ><li>深圳</li></ul>
        <div class="city-index-title">热门城市</div>
        <ul class="listhot">
            <li>北京</li>
            <li>上海</li>
            <li>广州</li>
            <li>深圳</li>
        </ul>
        <div class="city-index-title">
            按字母排序
        </div>
        <ul class="letters" >
            <li v-for="zm in letters" class="row">{{zm}}</li>
        </ul>
        <ul>
            <li v-for="(item,index) in cities">
                <h2 v-if="index===0 || index!==0 && item.zm!==cities[index-1].zm">{{item.zm}}</h2>
                <span class="row slh" @click="writeCookie(item)">{{item.name}}</span>
            </li>
        </ul>
        <div class="top" v-show="obj.flag" v-gotop>回到顶部</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cities:[],
            letters:[],
            obj:{
				flag:false
			}
        }
    },
    created(){
        this.getLetters();
        this.$http.get("/mz/v4/api/city",{prompt:{
            __t:new Date().getTime()
        }}).then((res)=>{
            // console.log(res)
            this.cities = res.data.data.cities.sort((a,b)=>{
                return a.pinyin.localeCompare(b.pinyin)
            }).map((item)=>({
                name:item.name,
                zm:item.pinyin[0],
                id:item.id
            }))
            // console.log(this.cities)
        })
    },
    methods:{
        getLetters(){
            for(var i = 65; i < 91; i++){
				if(String.fromCharCode(i)==="I" || String.fromCharCode(i)==="O" 
                || String.fromCharCode(i)==="U" || String.fromCharCode(i)==="V"){
					continue;
                }
                this.letters.push(String.fromCharCode(i));
            }
            // console.log(this.lettrs)
        },
        go(zm){
			document.documentElement.scrollTop = this.$refs[zm][0].offsetTop-50;
			document.body.scrollTop = this.$refs[zm][0].offsetTop-50;
        },
        writeCookie(item){
            var d = new Date();
            d.setDate(d.getDate()+10);
            document.cookie="cityId="+item.id+";expires="+d+";path=/";
            document.cookie="cityName="+encodeURI(item.name)+";expires="+d+";path=/";
            this.$router.push({'name':'cinema'});
            this.$root.bus.$emit("cityname",item.name);
        }
    }
}
</script>
<style lang="scss">
    $sc:25;
    .title{
        padding-left: 15/$sc+rem;
        font-size: 14/$sc+rem;
        line-height: 40/$sc+rem;
        background-color: #ebebeb;
    }
    .city-index-title{
        padding-left: 15/$sc+rem;
        font-size: 14/$sc+rem;
        line-height: 40/$sc+rem;
        background-color: #ebebeb;
        margin-top: -1px;
    }
    .list-unstyled{
        padding-left: 0;
        list-style: none;
    }
    .list-unstyled li{
        width: 25%;
        font-size: 16/$sc+rem;
        line-height: 46/$sc+rem;
        text-align: center;
        display: inline-block;
        cursor: pointer;
    }
    h2{
        padding-left: 15/$sc+rem;
        font-size: 14/$sc+rem;
        line-height: 40/$sc+rem;
        background-color: #ebebeb;
        margin-top: -1/$sc+rem;
        background-color: #ebebeb;
        clear: both;
    }
    .row{
        width: 25%;
        font-size: 16/$sc+rem;
        line-height: 46/$sc+rem;
        text-align: center;
        float: left;
        cursor: pointer;
        color: #838383;
        border-bottom: #ebebeb 1px solid;
    }
    .slh{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .list-unstyled{
        padding-left: 0;
        list-style: none;
    }
    .listhot{
        height:47/$sc+rem;
    }
    .listhot li{
        width: 25%;
        font-size: 16/$sc+rem;
        line-height: 46/$sc+rem;
        text-align: center;
        cursor: pointer;
        float: left;
        color: #838383;
    }
    .top{
        position: fixed;
        bottom: 40px;
        right: 0;
        z-index: 100;
        display: block;
        background: #ebebeb;
        border: 1px solid #838383;
        font-size: 12px;
        text-align: center;
        line-height: 56px;
        width: 56px;
        height: 56px;
        border-radius:80px; 
    }

</style>
