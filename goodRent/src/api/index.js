import http from '../utils/http'

// 模糊查询接口
export function SearchApi(searchval){
    return http.get(`/api/bj/suggestionV2/?keyword=${searchval}&from=house`)
}

// 城市接口
export function CityApi(){
    return http.get('/api/miniapps/getcitylist')
}

// 首页数据
export function IndexApi(){
    return http.get('/api/miniapps/getindexlist')
}

// 点击搜索页面回车 列表数据 北京->写字楼出租&商铺出租
export function ListApi(simplify,ports,params,pageIndex){
    return http.get(`/api/${simplify}/${ports}/?bid=&keyword=${params}&page=${pageIndex}&data_type=json&ver=1541421697000`)
}

// 北京->找楼盘&共享办公&创意园区
export function ShareApi(simplify,ports,params,pageIndex){
    return http.get(`/api/${simplify}/${ports}/?bid=&keyword=${params}&page=${pageIndex}&data_type=json&ver=1541421697000`)
}

// 联动请求 选择区域 的数据
export function DistirctApi(id){
    return http.get(`/api/geo/getgeo/?method=getDistricts&id=${id}`)
}

// 联动请求 选择街道 的数据
export function StreetApi(id){
    return http.get(`/api/geo/getgeo/?method=getStreets&id=${id}`)
}