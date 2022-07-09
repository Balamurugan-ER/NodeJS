const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const { request } = require("http")
// const { getEnabledCategories } = require("trace_events")

// // const url = 'http://api.weatherstack.com/current?access_key=caf207c815a1b3e4852ae61589e9d48a&query=37.8267,-122.4233'

// // request({url,json:true },(error,response)=>{
// //     // const data = JSON.parse(response.body)
// //     // console.log(data.current)
// //     if(error){
// //         console.log('Unable to Access Weather Service !!')
// //     }else if(response.body.error){
// //         console.log("Unable to find Location")
// //     }else{
// //         const data = response.body.current
// //         console.log(`
// //         ${data.weather_descriptions[0]}. It is Currently ${data.temperature} degrees out. It Feels Like ${data.feelslike} degrees out.
// //         `)
// //     }
// // })
// // const address ="los angeles"
// const geocodingUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/losangeles.json?access_token=pk.eyJ1IjoiYmFsYW11cnVnYW41IiwiYSI6ImNsNWQ3eWlmbTA4OHMzZm1wZ2VscGMxcGkifQ.iHBfoRAkPlZtZ0zqn168fQ'
// request({url:geocodingUrl,json:true},(error,response)=>{
    
//     // console.log("Features "+response.body)
//     if(error){
//         console.log("Not Able to Fetch Weather Service !!!")
//     }else if(!response.body.features.length){
//         console.log("Location Not Found ")
//     }
//     else{
        
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(longitude)
//         console.log(latitude)
//     }
// })
const add = process.argv[2]
// console.log(add)

if(!add){
    console.log("Please Provide Address")
}else{
    geocode(add,(error,data)=>{
        if(error){
            console.log(error)
        }else{
            forecast(data.longitude, data.latitude, (error, forecastData) => {
            if(error){
                console.log(error)
            }else{
                console.log(`
                Location - ${data.location}
                Tempearature - ${forecastData.temperature}
                Weather -${forecastData.weather}
                `)
            }
            })
        }
    })
    
}