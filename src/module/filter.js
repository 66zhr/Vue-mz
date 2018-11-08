import Vue from 'vue'
Vue.filter("addzero",(value,p='')=>{
    return String(value).Padstard(2,"0")+p
})

Vue.filter("formateDate",(value)=>{
    var sz="日一二三四五六";
    var d = new Date(value);
    return (d.getMonth()+1)+"月"+d.getDate()+"日 上映 星期"+sz[d.getDay()];
})