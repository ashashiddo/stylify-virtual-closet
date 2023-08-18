// var inputval = document.querySelector('#cityinput')
// var btn = document.querySelector('#add');
// var city = document.querySelector('#cityoutput')
// var description = document.querySelector('#description')
// var temp = document.querySelector('#temp')
// var wind = document.querySelector('#wind')
// var apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val)
{
    return (val - 273).toFixed(2)
}

// btn.addEventListener('click', function(){
//   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
//   .then(res => res.json())


//   .then(data => 
//   {
//     var nameval = data['name']
//     var descrip = data['weather']['0']['description']
//     var tempature = data['main']['temp']
//     var wndspd = data['wind']['speed']
//     city.innerHTML=`Weather of <span>${nameval}<span>`
//     temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
//     description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
//     wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

//   })

//   .catch(err => alert('You entered Wrong city name'))
// })
const TorontoWeather = () => {
  return (
    <div className="container-fluid">
    <section 
    className="main ">
     

      <section className="display">
        <div className="wrapper font-medium leading-6 text-gray-900">
          <h2 className="font-medium leading-6 text-gray-900"id="cityoutput"><span>Weather of Toronto</span></h2>
          <p className="font-medium leading-6 text-gray-900">Sky Conditions: <span>Cloudy</span></p>
          <p id="temp">Temperature: <span>29.85 C</span></p>
          <p id="wind"> Wind Speed: <span>5.66 km/h</span></p>
        </div>
      </section>
    </section>

  </div>
 
  );
}

export default TorontoWeather;