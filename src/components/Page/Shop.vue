<template>
    <div>
        shop
        <mt-button type="default" @click="showAlert">default</mt-button>
        <mt-button type="primary" @click="t.close()">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
    </div>    
</template>
<script>

import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            t:''
        }
    },
    methods:{
        showAlert(){
            Toast('hello');
            // Toast({
            //     message: 'Upload Complete',
            //     position: 'bottom',
            //     duration: 5000
            // });
           this.t = Toast({
                iconClass:"fa fa-spinner fa-pulse",
                position: 'middle',
                duration: -1
            });
        }
    }
}
</script>


