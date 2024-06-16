noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){

    video = createCapture(VIDEO);
    video.size(500,500);

    canvas= createCanvas(500,400);
    canvas.position(600,140);

    poseNet= ml5.poseNet(video. modelLoaded);
    
    poseNet.on('pose', gotPoses);
}
 

function modelLoaded(){

    console.log("Model is loaded");
}

function draw(){

    background('#5DE2E7');
    fill("#FE9900");
    stroke("#7DDA58");
    square(noseX,noseY,difference);
    document.getElementById("size").innerHTML="size of the square is=  "+difference;
    

}

function gotPoses(results){
           if(results.length>0){
              console.log(results);

              noseX=results[0].pose.nose.x;
              noseY=results[0].pose.nose.y;

              console.log("x coordinate of nose : "+noseX+ ", y coordinate of nose : "+noseY);

              leftWristX=results[0].pose.leftWrist.x;
              rightWristX=results[0].pose.rightWrist.x;
              
             difference= floor(leftWristX-rightWristX) ;
             
             console.log("x coordinate of left wrist: "+leftWristX+ "x coordinate of right wrist: "+rightWristX);
             console.log("difference between the 2 values: "+difference);
            
            }


}