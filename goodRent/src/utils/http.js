let testhost = process.env.NODE_ENV == 'development' ? 'http://localhost:8000' : 'https://m.haozu.com' 

export default {
    post(url,params){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{"Content-type":"application/json;charset=utf-8"},
                body:params
            }).then(res=>{
                resolve(res.json())
            })
        })
    },
    get(url){
        return new Promise((resolve,reject)=>{
            url = url.indexOf('http') > -1 ? url : (url)
            fetch(url).then(res=>{              
               // resolve(JSON.parse(JSON.stringify(res)))
               resolve(res.json())
            })
        })
    },
    all(querylist){
        return Promise.all(querylist)
    }
}