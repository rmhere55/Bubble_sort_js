var timer = 6
var score = 0;
var hitrn  =0;
var totalscore =0
// jispe click kroge wo element event raise hoga or event lisneter na milne par event ke parent par listner dunda ga;
// waha par bhi na milne par waha ke panrent ke panrent par dunde ga  
function increasescore(){
    score+=10
    document.querySelector("#scoreval").textContent = score
    totalscore = score
}
function getNewHit(){
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn
}

function makebubble(){
var clutter = "";
for(var i = 1; i<= 154;i++){
var random = Math.floor(Math.random()*10)
   clutter +=`
    <div class="bubble">${random}</div>`;


}
document.querySelector("#pbtm").innerHTML = clutter;}

function runtimer(){
   var timerInterval= setInterval(function(){
        if(timer > 0){
     timer--;
     document.querySelector("#timerval").textContent = timer
        }
        else{

            clearInterval(timerInterval)
            document.querySelector("#pbtm").innerHTML = `<h1> Game over </h1> <hr>
                        <h2> Your score:-${totalscore}</h2>`
        }
    },1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function(debts){
    var clicknum =Number(debts.target.textContent)
    if(clicknum === hitrn){
        increasescore()
        makebubble()
        getNewHit()
    }
})


runtimer()
makebubble();

getNewHit()

increasescore()