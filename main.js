var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var t=document.getElementById("textbox");

function b(){
    t.innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var c=event.results[0][0].transcript;
    t.innerHTML=c;
    console.log(c);
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    g="taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(g);
    synth.speak(utterThis);
    Webcam.attach( '#camera');
    setTimeout(function(){
       take_a_selfie();
       save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });

function take_a_selfie(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML='<img id="ig" src="'+pic+'"/>';
    });
}

function save(){
    ak=document.getElementById("a");
    b=document.getElementById("ig").src;
    ak.href=b;
    ak.click();
}