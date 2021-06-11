const request=require('request')
const forecast=(latitude,longitude,callback)=>{
const url='https://darksky.net/forecast/23.4841,85.1343/us12/en /'+latitude +','+longitude
request({url: url,json:true},(error,response)=>{
    if(error){
callbacl('unable to connect to weather service',undefined)
    }else if(response.body.error){

    }else{
callback(undefined,)
    }

})
}
module.exports=forecast