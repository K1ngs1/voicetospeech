var speechRec = window.webkitSpeechRecognition;

var recognition = new speechRec();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if(content == "take my selfie"){
        console.log("Taking selfie");
        speak();
    }
};

function speak(){
    var synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSs();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 100
});

camera = document.getElementById("camera");

function takeSs(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '">';
    });

}

function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie_img").src;
    link.href = img;
    link.click();
}