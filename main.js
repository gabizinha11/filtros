nozeX = 0
nozeY = 0

function preload() {
imgnariz = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
}

function modelLoaded(){
  console.log("poseNet foi inicializado");
}

function gotPoses(results){
  if (results.length>0){
    console.log(results)
    nozeX = results[0].pose.nose.x - 15;
    nozeY = results[0].pose.nose.y - 15;
  }
}

function draw() {
image(video,0,0,300,300);
image(imgnariz,nozeX,nozeY,40,40);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}