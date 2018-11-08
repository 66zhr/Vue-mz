<template>
        <div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in billboard">
                         <img :src="item.imageUrl"/> 
                    </div>    
                </div>
            </div>
        </div>
</template>
<script>
    import Swiper from "swiper";
    import "#/swiper/dist/css/swiper.css";
    export default {
        data(){
            return {
                billboard:[]
            }
        },
        created(){
            this.$http.get("/mz/v4/api/billboard/home",{
                params:{
                    __t:new Date().getTime()
                }
            }).then((res)=>{
                // console.log(res)
                this.billboard = res.data.data.billboards;
                
            })

        },
        watch:{
            billboard(){
                this.$nextTick(()=>{
                    var mySwiper = new Swiper ('.swiper-container', {
    
                loop: true, // 循环模式选项
                autoplay: {
                    delay: 2000,
                     disableOnInteraction: false
                },
                // effect : 'cube'
            })

                })
                
          }
        }
    }
</script>
<style lang="scss">
.swiper-container {
    width: 100%;
    height: 100%;
}  
img{
    width: 100%;
}
</style>