fetch(`http://api.aladhan.com/v1/calendar/2024/${new Date().getMonth()+1}?latitude=33.6844&longitude=-7.3846&method=3`)
.then(response => response.json())
.then(data => {
    prayertime(data.data)

//     for(let ele in data.data[0].date.gregorian){
//         console.log(data.data[0].date.gregorian[ele])
//     }
// }
})
console.log(new Date().getDate())
Array = ["Fajr","Dhuhr","Asr","Maghrib","Isha"]
function prayertime(data){
    console.log(data)
    let pele = document.querySelector(".todaydate")
   
    let weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let today = `<p>${weekday[new Date().getDay()]
    }  ${new Date().getDate()}-${(new Date().getMonth())+1}-${new Date().getFullYear()}</p> <hr>`
    pele.innerHTML = today
    console.log(new Date().getDate())
    let mycallender = document.querySelector(".containercalender")
    
    for(let ele of Array){
        for(let ele1 in data[18].timings){
            if(ele == ele1){
                console.log()
                console.log(data[new Date().getDate()].timings[ele1])

                let mydiv = `  <div class="containercalender">
                <div class="calender">
                <div class="prayer">
                ${ele1}
                </div>
                <div class="prayertime">
                ${data[new Date().getDate()].timings[ele1].slice(0,5)}
                </div>
                
                </div>`
                mycallender.innerHTML += mydiv
            }
        }
        
    }

        
        // if(data.timings[ele] == Array[ele]){
        //     let div = `<div class="calender">
        //         <div class="prayer">
        //             ${Array[ele]}
        //         </div>
        //         <div class="prayertime">
        //            ${data.timings[ele]}
        //         </div>
                
        //     </div>`
        //     mycallender.innerHTML += div
            
        // }

    }















// Get current date 


setInterval(() => {
    let currentDate = new Date();

let hours = currentDate.getHours();
let minuts = currentDate.getMinutes();
let seconds = currentDate.getSeconds();


seconds = seconds < 10 ? '0' + seconds : seconds;
minuts = minuts < 10 ? '0' + minuts : minuts;
hours = hours < 10 ? '0' + hours : hours;


document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minuts;
document.getElementById("seconds").textContent = seconds;
}, 1000);