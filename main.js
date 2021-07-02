noseX=0;
noseY=0;
l_shoulderX=0;
l_shoulderY=0;
r_shoulderX=0;
r_shoulderY=0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    left_angel = loadImage('angel.gif');
    right_devil = loadImage('devil.png');
}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
    l_shoulderX = results[0].pose.leftShoulder.x-40;
    l_shoulderY = results[0].pose.leftShoulder.y-80;
    r_shoulderX = results[0].pose.rightShoulder.x-60;
    r_shoulderY = results[0].pose.rightShoulder.y-110;
  }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 80, 35);
    image(left_angel, l_shoulderX, l_shoulderY, 100, 60);
    image(right_devil, r_shoulderX, r_shoulderY, 100, 80);
}

function take_snapshot()
{
    save('myFilter.png');
}