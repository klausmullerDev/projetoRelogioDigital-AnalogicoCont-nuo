let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();
    let msec = now.getMilliseconds();


    digitalElement.innerHTML = `${fixZeroes(hour)}:${fixZeroes(min)}:${fixZeroes(sec)}`;
    
    let sDeg = ((360 / 60) * (sec + msec / 1000)) - 90;
    let mDeg = ((360 / 60) * min + (sec / 10)) - 90;
    let hDeg = ((360 / 12) * hour + (min / 2)) - 90;
    
    
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    
}
function fixZeroes(time) {
    return time < 10 ? '0' + time : time;
}





setInterval(updateClock, 10);