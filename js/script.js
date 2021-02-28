/*Slideshow top page*/
const myslide = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 15000);
function autoslide() {
    counter += 1;
    slidefun(counter);
}
function plusSlides(n) {
    counter += n;
    slidefun(counter);
    restTimer();
}
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    restTimer()
}
function restTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 15000);
}
function slidefun(n) {
    let i;
    for(i = 0;i<myslide.length;i++){
        myslide[i].style.display = "none";
    }
    for(i = 0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}







/*--------------------Chart/Tabel persoonlijke info-------------------*/
$(".num").counterUp({delay:10,time:100,time:7000});











/*------------------------circle prosses fill-------------------------*/
var progressBars = document.querySelectorAll('.progress-container');

console.log(progressBars);

for (var el of progressBars) {
  var dataValue = el.getAttribute("data-value");
  var progressValue = el.querySelector(".progress-value");
  var valueContainer = el.querySelector("span");

  var radius = progressValue.getAttribute("r");
  
  var circumference = 2 * Math.PI * radius;
  
  progressValue.style.strokeDasharray = circumference;
  progress(dataValue);
}

function progress(value) {
  var progress = value / 100;
  var dashoffset = circumference * (1 - progress);

  // TODO: Remove before entering into production
  console.log("progress:", value + "%", "|", "offset:", dashoffset);

  progressValue.style.strokeDashoffset = dashoffset;

  //valueContainer.innerHTML = value + '%';
  animateValue(valueContainer, 0, dataValue, 1500);
}

function animateValue(selector, start, end, duration) {
  var obj = selector;
  var range = end - start;

  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    obj.innerHTML = value + "%";
    if (value == end) {
      clearInterval(timer);
    }
  }

  var timer = setInterval(run, stepTime);
  run();
}


  



