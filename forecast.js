//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request')


const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=caf207c815a1b3e4852ae61589e9d48a&query='+longitude+','+latitude
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Not able to Fetch Weather Service',undefined)
        } else if(response.body.error){
            callback('Latitude Longitude Not found',undefined)
        } else{
            callback(undefined,{
                temperature:response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                weather: response.body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast