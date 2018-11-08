<template>
    <div>
        <ul class="cinema-view">
            <li v-for="(item,key,index) in cinemaObj">
                <h2 @click="toggle(key)">{{key}}</h2>

                <ul v-show="item.flag">
                    <li v-for="subitem in item">
                            <h3>{{subitem.name}}</h3>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                            <span>{{subitem.address}}</span>
                            <p>未知距离</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cinemaObj:{

            }
        }
    },
    created(){
        this.$http.get("/mz/v4/api/cinema",{
            params:{  
                __t:new Date().getTime()
            }
        }).then((res)=>{
            var arr = [];
            res.data.data.cinemas.forEach((item) => {
                if(!this.cinemaObj[item.district.name]){
                    this.cinemaObj[item.district.name]=[];
                    arr.push(item.district.name);
                    this.cinemaObj[item.district.name].flag=false;
                }
                this.cinemaObj[item.district.name].push(item);
            });
            this.cinemaObj[arr[0]].flag=true;
            this.$forceUpdate();
        })
    },
    methods:{
        toggle(item){
            this.cinemaObj[item].flag = !this.cinemaObj[item].flag
            this.$forceUpdate();
        }
    }
}
</script>
<style scoped lang="scss">
    $sc:25;
    .cinema-view{
        margin-top:50px; 
        background-color: #fff;
        width: 100%;
        h2{
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            padding-left: 16px;
            background: #e1e1e1;
            margin-bottom: 1px;
            color: #636363;
            cursor: pointer;
        }
    }
    .cinema-view ul{
        display: block;
    }   
            .content{
                margin: 0 auto;
                cursor: pointer;
                min-width: 320px;
                cursor: pointer;
                li{
                    border-bottom: 1px solid #e1e1e1;
                }
                h3{
                    display: inline-block;
                    font-size: 16px;
                    width: 80%;
                    margin-bottom: 5px;
                    padding-left:10px; 
                }
                i{
                    padding-right:20px; 
                    padding-top:12px; 
                    color: #ccc;
                    font-size: 18px;
                    float: right;
                }
                span{
                    padding-left:10px; 
                    overflow: hidden;
                    display: inline-block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 80%;
                    color: #ccc;
                }
                p{
                    padding-left:10px; 
                    padding-bottom:10px; 
                    font-size: 12px;
                    color: #ccc;
                }
            }
                
            
    
</style>

