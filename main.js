function setup(){
    canvas = createCanvas(500,500);
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas.position(560 , 150);
    video.position(0,150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotposes);
    }
    
    function draw(){
    background("#d6ffb0");
    }
    
    function preload(){
    
    }
    
    function modelLoaded(){
    console.log("poseNet is inisialized");
    }
    
    function gotposes(results)
    {
        if(results.length > 0){
            console.log(results);
            
        }
        
    }