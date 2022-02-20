document.querySelector(".contact_box_form_btn").addEventListener("click", handleClick);
document.querySelector(".salam").addEventListener("mouseenter", welcomesound);

function handleClick() {
  alert("MESSAGE HAS BEEN SEND");
}

function welcomesound() {
  var audio = new Audio("sounds/welcome.mp3");
  audio.play(1);
}

var map;
DG.then(function () {
    map = DG.map('map', {
        center: [51.09049142184456, 71.41802084488441],
        zoom: 11
    });

    DG.marker([51.09049142184456, 71.41802084488441]).addTo(map).bindPopup('html-контент');
});

$(".big-heading").mouseenter(function(){
    $(".big-heading").css("color", "DarkTurquoise");
})


$(".big-heading").mouseleave(function(){
    $(".big-heading").css("color", "white");
})

var n = $("h3").length;
for (var i=0; i<n; i++){
        document.querySelectorAll(".feature-title")[i].style.color = "#00000";
        document.querySelectorAll(".feature-title")[i].style.fontSize = "20";
        document.querySelectorAll(".feature-title")[i].style.fontWeight = "bold";

}

function mOver(obj) {
  obj.innerHTML = "GOOD LUCK IN YOUR SALES!";
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me";
}
