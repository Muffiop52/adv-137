video = "";
states = "";
objects = [];

function preload()
{
          video = createVideo('video.mp4');
          video.hide();
}

function setup()
{
          canvas = createCanvas(480,380);
          canvas.center();
}

function draw()
{
          image(video,0,0,480,380);
          if(states != "")
          {
                    objectDetector.detect(video , gotResult);
                    for(i = 0; i < objects.length; i++)
                    {
                              document.getElementById("states").innerHTML = "Status: Objects Detected";
                              document.getElementById("number_of_object").innerHTML = "Number OF Objects Detected Are:" + objects.length;

                              fill("blue");
                              percent = floor(objects[i].confidence * 100);
                              text(objects[i].label + "" + percent + "%", object[i].x + 15, object[i].y + 15);
                              nofill();
                              stroke("blue");
                              rect(objects[i].x, objects[i].y, objects[i].height, objects[i].width);
                    }
          }
}

function start()
{
          objectDetector = ml5.objectDetector('cocossd', modelLoaded);
          document.getElementById("states").innerHTMl = "Status: Detecting Objects";
}

function modelLoaded()
{
          console.log('ModelLoaded!');
          states = true;
          video.loop();
          video.speed(1);
          video.volume(0);
}

function gotResult(error, results)
{
          if(error)
          {
                    console.error(error);
          }

          else
          {
                    console.log(results);
                    objects = results;
          }
}        