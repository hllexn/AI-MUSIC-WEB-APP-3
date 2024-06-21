harry_potter="";
music_2="";
LeftWristX="";
LeftWristY="";
RightWristX="";
RightWristY="";

function preload(){
    harry_potter=loadSong(music.mp3);
    music_2=loadSong(music2.mp3);

    
};
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
};
function modelLoaded(){
    console.log("Pose Net Model is intalized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        LeftWristX=results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        console.log("LeftWrist X = "+LeftWristX+" LeftWrist Y = "+LeftWristY);

        RightWristX=results[0].pose.rightWrist.x;
        RightWristY=results[0].pose.rightWrist.y;
        console.log("RightWrist X = "+RightWristX+" RightWrist Y = "+RightWristY);

    }
}
function draw(){
    image(video,0,0,600,500);
};
