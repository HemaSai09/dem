const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const constraints = { video: true };

// Get access to the camera
navigator.mediaDevices.getUserMedia(constraints)
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
  })
  .catch(function(err) {
    console.log("An error occurred: " + err);
  });

// When the video is playing, draw the blue rectangular box
video.addEventListener('play', function() {
  const context = canvas.getContext('2d');
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  function draw() {
    context.drawImage(video, 0, 0, width, height);
    context.beginPath();
    context.rect(width/4, height/4, width/2, height/2);
    context.lineWidth = 2;
    context.strokeStyle = 'blue';
    context.stroke();
    requestAnimationFrame(draw);
  }

  draw();
});
