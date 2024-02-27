let form = document.querySelector(".change-gole");
let cng = document.querySelector("#cng");
let deadLine = document.querySelector("#show-deadLine")
deadLine.innerHTML = "27 Feburary 2024 8:10 PM"
const ShowChangeDate = () => {
    form.style.display = "flex";
    cng.style.display = "none";
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let iptData = document.querySelector("#change-date").value;
    let inputDate = new Date(iptData);
    console.log(inputDate.toISOString().slice(0, 16));
    deadLine.innerHTML = inputDate;
    cng.style.display = "flex";
    form.style.display = "none";

});
let d = document.querySelectorAll(".content");
var diff=0;
function setDate() {
    let finaldate = deadLine.innerHTML;
    let final = new Date(finaldate);
    let now = new Date();
    diff = final - now;
    if(diff<=0){
        clearInterval(f);
        return;
        }
    let totalSecond = Math.floor((final - now) / 1000);
    let secondInDay = 3600 * 24;
    let day = Math.floor(totalSecond / secondInDay);
    let hour = Math.floor((totalSecond % secondInDay) / 3600);
    let minutes = Math.floor(((totalSecond % secondInDay) % 3600) / 60);
    let second = ((totalSecond % secondInDay) % 3600) % 60;
    let arr = [day, hour, minutes, second];
    d.forEach((div, i) => {
        let a = div.firstElementChild;
        if (arr[i] < 10) {
            a.innerHTML = `0${arr[i]}`;
        }
        else {
            a.innerHTML = arr[i];
        }

    });
}
let f = setInterval(setDate, 1000);
console.log(diff);