lipsX=0
lipsY=0
function preload() {
    lipstick = loadImage('https://i.postimg.cc/G3ZPWMMq/lipstick.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.lips.x;
        lipsX = results[0].pose.lips.x;
        console.log("lips x = " + results[0].pose.lips.x );
        console.log("lips y = " + results[0].pose.lips.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick, lipsX, lipsY, 30, 30)
}

function take_snapshot(){
    save('filterImage.png');
}