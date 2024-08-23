var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var capture = document.getElementById("capture");

navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
  video.srcObject = stream;
});

capture.onclick = function () {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
};
