var myString = "Step into her space, step into her cold space, step into her stars, she rings like heaven, she is the stars, the etherial option, the one who can touch the stars, Jimmy, you can't say shit like that, Oh Pam leave him alone, Shut up DAVID!";
var splitString;
var myArray = [6, 0, 6, 0, 8 ];
var word = 0;
var xpos = 100;
var ypos = 200;
var xOff = 0;
var yOff = 0;
var img;
var canvas;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
function preload() {
  //loaded the img into a an <img> element
  img = createImg("image1.gif");  // Load the image
  img2 = createImg("image2.gif");
  img3 = createImg("image3.gif");
  img4= createImg("image4.gif");
  img5 = createImg("image5.gif");
  img6 = createImg("image6.gif");
  img7  = createImg("image7.gif");
  img8 = createImg("image8.gif");
  img9 = createImg("image9.gif");
  img10 = createImg("image10.gif");
  console.log("loaded");
}

function setup()
{
  canvas = createCanvas(1500, 1500);
  splitString = split(myString, " ");
  //gave out canvas a position on the screen
  canvas.position(0, 0);
  //then we gave it z-index of -1
  canvas.style("z-index",-1);

  //we give our img a position relative to the <body>
  img.position(100, 700);
  //now we give it a size
  img.size(400, 400);
img2.position(100,600);
img2.size(700,300);
img3.position(700,400);
img3.size(500,800);
img4.position(100,900);
img4.size(700,400);
img5.position(1000,700);
img5.size(500,500)
img6.position(900,500);
img6.size(100,100);
img7.position(1100,900);
img7.size(600,600);
img8.position(100, 100);
img8.size(500,500);
img9.position(100,700);
img9.size(100,100);
img10.position(350,425);
img10.size(600,450);
}


function draw()
{
  background(80);
  image(img, 75, 185);
  fill(0,100,200);
  textSize(70);
  text(splitString[word], xpos + xOff, ypos + yOff);
  xOff = random(-5, 5);
  yOff = random(-5, 5);
//text("She speaks in different tones", 150, 600);
//text("She loves so fearlessly", 70, 800);
//text("She is the moon, and I am the Sun",60, 1000);
//text("Jimmy, You can't do that", 60, 200);
//textSize(30);
//text("But Mom, Why not", 60, 300);
//text("Jimmy, you can't be going around being selfish", 60, 400);
}

function mousePressed() {
  //put fun stuff here//
  word = word +1;
  if (word >= splitString.length) {
    word = 0;

  }
  xpos = random(0, 400);
  ypos = random(0, 1000);
}
