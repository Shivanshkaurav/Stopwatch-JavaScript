const clock = document.querySelector(".clock");

let sec = 0, min=0, hr=0;
let intervalID;

const startStopwatch = ()=>{
        intervalID = setInterval(() => {
        if(sec<59){
            sec++;
        }else{
            sec=0;
            min++;
        }
        if(min>59){
            hr++;
            min = 0;
        }

        const hour = hr.toString().padStart(2,"0");
        const minute = min.toString().padStart(2,"0");
        const second = sec.toString().padStart(2,"0");
        
        clock.innerHTML = `${hour}:${minute}:${second}`;

    }, 1000);
}
const stopStopwatch = ()=>{
    clearInterval(intervalID);
}


const resetStopwatch = ()=>{
    location.reload();
}