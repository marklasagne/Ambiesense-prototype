/* 
Ambie-sense video player
*/


//////////////// WEBSOCKET ////////////////
// connects to local ws server 
// saves the data from all incoming messages
// uses the data to reload the scene 
// create WebSocket connection 
const socket = new WebSocket("ws://localhost:8082");

// log the connection opened
socket.addEventListener("open", function (event) {
  console.log('p5js connected');
});

// listen for messages
socket.addEventListener("message", function (event) {
  console.log('scene changed: ', event.data);
  loadScene(data)
  video.play();
});


//////////////// Load Video ////////////////
// using p5js load video based on the websocket message
// the video is set to the displays width and height and overflow is hidden
let video;

function loadScene(data) {
    let title = data.name
    createCanvas(0, 0);
    video = createVideo([`./videos/${title}.mp4`, `./videos/${title}.webm`]);
    video.size(displayWidth, displayHeight);
    video.loop();
};

