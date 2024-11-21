




fetch("https://api.aladhan.com/v1/timingsByCity?country=MA&city=Casablanca")
.then(response => response.json())
.then((data) => getData(data.data))

let prayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];


function getData(data) {
  console.log(data);

  prayers.forEach(prayer => {
    let div = ` 
    <div
      class="flex justify-between border border-blue-500 p-3 rounded-lg shadow-lg shadow-black"
    >
      <p class="">${prayer}</p>
      <p class="prayer-time" id="fajr-time">${data.timings[prayer]}</p>
    </div>
  `
    // document.getElementById("city").textContent = city;
  document.querySelector(".prayer-times").innerHTML += div;
  })
}


