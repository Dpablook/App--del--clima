// console.log("funciona la consola");


window.addEventListener( 'load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById("temperatura-valor")
    let temperaturaDescripcion = document.getElementById("temperatura-descripcion")
    let ubicacion = document.getElementById("ubicacion")
    let vientoVelocidad = document.getElementById("viento-velocidad")

        // var buscar = document.getElementById("buscar").value;
        // if (buscar==""){
        //     document.getElementById("buscar").innerHTML="";
        // }
        // console.log(buscar);

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude
            lat = position.coords.latitude

            //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9946e0e852be5bffdbe743771c6af5cd'

            const url = 'https://api.openweathermap.org/data/2.5/weather?q=Lisboa&lang=es&units=metric&appid=9946e0e852be5bffdbe743771c6af5cd'
            console.log(url);
            //fetch

            fetch(url)
              .then( response => {return response.json() })
              .then( data => {
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} ºC`

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent = data.name

                vientoVelocidad.textContent = `${data.wind.speed} m/s`


                console.log(data.weather[0].main);

                switch (data.weather[0].main) {
                    case 'Clear':
                        iconAnimado.src = 'animated/day.svg';
                        console.log("Lindo");
                    break;
                    case 'Thunderstorm':
                        iconAnimado.src = 'animated/thunder.svg';
                        console.log("Tormenta");
                    break;
                    case 'Drizzle':
                        iconAnimado.src = 'animated/rainy-2.svg';
                        console.log("Llovizna");
                    break;
                    case 'Rain':
                        iconAnimado.src = 'animated/rainy-7.svg';
                        console.log("Lluvia");
                    break;
                    case 'Snow':
                        iconAnimado.src = 'animated/snowy-6.svg';
                        console.log("Nieve");
                    break;
                    case 'Clouds':
                        iconAnimado.src = 'animated/cloudy-day-1.svg';
                        console.log("Nubes");
                    break;

                }


              })
              .catch(error => {
                console.log(error)
              })

        })
    }
})
