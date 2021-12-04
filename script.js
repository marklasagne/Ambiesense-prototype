let vid;

// create WebSocket connection
const socket = new WebSocket("ws://localhost:8082");
let color = '#000'; 

let data = {'name': 'rainforest'}

// log the connection opened
socket.addEventListener("open", function (event) {
  console.log('p5js connected');
});

// listen for messages
socket.addEventListener("message", function (event) {
  console.log('scene changed: ', event.data);
  data = event.data.toString();
});

function loadScene(data) {
    let title = data.name
    createCanvas(0, 0);
    vid = createVideo([`./videos/${title}.mp4`, `./videos/${title}.webm`]);
    vid.size(displayWidth, displayHeight);
    vid.loop();
};

function setup() {
    loadScene(data)
  }

  function mousePressed() {
    vid.play();
  }