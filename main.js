var noseY=0
var noseX=0
var leftwristX=0
var rightwristX=0
var diffrence=0

function setup(){
video=createCapture(VIDEO)
video.size(400,400)
canvas=createCanvas(500,500)
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("posenetisintialized")
}
function gotposes(results){
if (results.length>0) {
    console.log(results)
  noseX=results[0].pose.nose.x  
  noseY=results[0].pose.nose.y
  leftwristX=results[0].pose.leftWrist.x
  rightwristX=results[0].pose.rightWrist.x
  diffrence=floor(leftwristX-rightwristX)
}
}
function draw(){
    background("pink")
fill("pink")
stroke("limegreen")
textSize(diffrence)
text("whitehatjr",noseX,noseY)
}