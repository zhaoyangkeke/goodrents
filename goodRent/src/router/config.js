
import Home from '../pages/home'
import List from '../pages/list'
import Search from '../pages/search'
import Page404 from '../pages/page404'
import Login from '../pages/login'
import Share from '../pages/share'
import Brand from '../pages/brand'
import ReleaseResources from '../pages/releaseResources'
import FindHouses from '../pages/findHouses'
import Detail from '../pages/detail'

export default {
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home
        },{
            name:'list',
            path:'/list',
            component:List
        },{
            name:'search',
            path:'/search',
            component:Search
        },{
            name:'page404',
            path:'/page404',
            component:Page404
        },{
            name:'login',
            path:'/login',
            component:Login
        },{
            name:'share',
            path:'/share',
            component:Share
        },{
            name:'brand',
            path:'/brand',
            component:Brand
        },{
            name:'releaseResources',
            path:'/releaseResources',
            component:ReleaseResources
        },{
            name:'findHouses',
            path:'/findHouses',
            component:FindHouses
        },{
            name:'detail',
            path:'/detail',
            component:Detail
        }
    ]
}