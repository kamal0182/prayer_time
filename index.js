fetch("http://api.aladhan.com/v1/calendar/2024/10?latitude=33.6844&longitude=-7.3846&method=3")
.then(response => response.json())
.then(data => {

    for(let ele in data.data[0].date.gregorian){
        console.log(data.data[0].date.gregorian[ele])
    }
}
)