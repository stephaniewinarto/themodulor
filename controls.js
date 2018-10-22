var slider = document.getElementById("myRange");
var output = document.getElementById("input_height");
var output2 = document.getElementById("height_num");
var output3 = document.getElementById("height_num2");
var output4 = document.getElementById("height_num3");
var output5 = document.getElementById("height_num4");
var output6 = document.getElementById("height_num5");
var output7 = document.getElementById("height_num6");
var output8 = document.getElementById("height_num7");

var vid = document.getElementById("unite");
var vid2 = document.getElementById("tourette");
var vid3 = document.getElementById("carpenter");

var newval;
vid.currentTime = 4;
vid2.currentTime = 4;
vid3.currentTime = 4;

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();;
startTime();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var h2 = h+6;

    h2 = checkHour(h2);



    document.getElementById('carpenter_time').innerHTML =
    h + ":" + m + ":" + s;

    document.getElementById('unite_time').innerHTML =
    h2 + ":" + m + ":" + s;

    document.getElementById('tourette_time').innerHTML =
    h2 + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);


}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function checkHour(i) {
    if (i > 24) {i = "0" + (i-24) };  // add zero in front of numbers < 10
    return i;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


slider.oninput = function modular() {

  output.innerHTML = this.value+ "cm";
  output2.innerHTML = this.value;
  output3.innerHTML = Math.floor(this.value*0.61748634);
  output4.innerHTML = Math.floor(this.value*1.23497268);
  output5.innerHTML = Math.floor(this.value*0.75956284);
  output6.innerHTML = Math.floor(this.value*0.46994536);
  output7.innerHTML = Math.floor(this.value*0.28961749);
  output8.innerHTML = Math.floor(this.value*0.18032787);


  // var a = d3.select("#one").attr("y2")=this.value*2.5;
  // console.log(a);
  // console.log(document.getElementById("cls-1").getAttribute("y2"))
  // document.getElementById("rule").style.width = 40;
  document.getElementById("rule").style.height = this.value*2.5;
  document.getElementById("man").style.height = this.value*2.5;
  document.getElementById("height_num").style.top = this.value*0.35;
  document.getElementById("height_num4").style.top = this.value*0.89;
  document.getElementById("height_num2").style.top = this.value*1.18;
  document.getElementById("height_num5").style.top = this.value*1.48;
  document.getElementById("height_num6").style.top = this.value*1.84;
  document.getElementById("height_num7").style.top = this.value*2.07;





  newval = scale(this.value, 0, 300, 0, 3);
  vid.currentTime = newval;
  vid2.currentTime = newval;
  vid3.currentTime = newval;

  console.log(newval);

  }

  function myFunction() {
    window.open("tourette.html", '_blank', "width=500,height=500", "fullscreen=no");
    newval = scale(slider.value, 0, 300, 0, 3);
    console.log(newval);

    }
