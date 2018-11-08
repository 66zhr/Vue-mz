import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Page/Home'
import Film from "@/components/Page/Film"
import City from "@/components/Page/City"
import MovieList from "@/components/Page/MovieList"
import Shop from "@/components/Page/Shop"
import Detail from "@/components/Page/Detail"
import Cinema from "@/components/Page/Cinema"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{name:'home'}
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
    	path:"/film",
    	name:"film",
      component:Film,
      redirect:{name:'movielist'},
      children:[
          {
             path:":type",
             name:'movielist',
             component:MovieList
          }
      ]
    },
    {
      path:"/shop",
      component:Shop
    },
    {
      path:"/cinema",
      name:"cinema",
      component:Cinema
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    },
    {
    	path:"/city",
    	name:"city",
    	component:City
    },
  ]
})