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
const Weather = () => {
  return (
    <div className="container-fluid">
    <section 
    className="main ">
      <section className="inputs">
      <form className="space-y-6"  method="GET" action="/weather1">

        <input className="wx block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-" type="text" placeholder="Enter any city..." />
        <button type="submit" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Submit</button>
        </form>
      </section>

      {/* <section className="display">
        <div className="wrapper text-sm font-medium leading-6 text-gray-900">
          <h2 className="text-sm font-medium leading-6 text-gray-900"id="cityoutput">Weather of <span>Toronto</span></h2>
          <p className="text-sm font-medium leading-6 text-gray-900">Sky Conditions: <span>few clouds</span></p>
          <p id="temp">Temperature: <span>29.85 C</span></p>
          <p id="wind"> Wind Speed: <span>5.66 km/h</span></p>
        </div>
      </section> */}
    </section>

  </div>
 
  );
}

export default Weather;