var points = []
var mult = 0.001
var t = 0;

var r1, r2, g1,g2,b1,b2



function setup() {
  createCanvas(windowWidth,windowHeight);
  background(30)
  // angleMode(DEGREES)
  noiseDetail(10)

  var density = 50
  var space = width / density


  for (var x = -width/2; x < width/2; x+=space) {
    for (var y = -height/2; y < height/2; y+= space) {
      var p = createVector(x + random(-space*1.5,space*1.5),y + random(-space*1.5,space*1.5))
      points.push(p)
    }
  }

  // for (var x = 0; x < width; x+=space) {
  //   for (var y = 0; y < height; y+= space) {
  //     var p = createVector(x + random(-space*1.5,space*1.5),y + random(-space*1.5,space*1.5))
  //     points.push(p)
  //   }
  // }
  
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)

}

function draw() {

  // frameRate(60)
  background(30,10)
  translate(width/2,height/2)
  scale(-1,-1)

  t+=1

  noStroke()
  fill(255)

  var A = 0

  for (var i = -height/2; i <= height/2; i++) {
    var y = map(i,-height/2,height/2,-1,1)
    // var U = ((A*cos(PI*y/2) - (1- (y^2)))/(A-1))
    var V = 1-(y*y)
    Y = map(V,0,1,-width/2,width/2)
    ellipse(-i,i,2)
  }

  for (var i = 0; i < points.length; i++) {

    // DETERMINE COLORS OF EACH POINT

    var r = map(points[i].x,-width/2, width/2, r1, r2)
    var g = map(points[i].y,-width/2, width/2, g1, g2)
    var b = map(points[i].x,-width/2, width/2, b1, b2)

    fill(r,g,b,250)
    

    var angle = map(noise(points[i].x * mult ,points[i].y * mult) + random(1)*50*mult, 0,2,0,720)
    // points[i]

    // var angle = 30*(sin(t));
    // var U = map(sin(points[i].y),0,1,-1,1)
    // var U = exp(points[i].y * mult)

    var y = map(points[i].y,-height/2,height/2,-1,1)
    var x = map(points[i].x,-width/2,width/2,1,-1)
    
    // var A = 8/(PI^2)
    var U = ((A*cos(PI*y/2) - (1- (y^2)))/(A-1))
    // colorMode(HSB,100)
    // fill(random(100),100,100)
    // var U = 1- y^2
    // var U = cos(PI*y/2)
    // if (y < 0) {
    //   // console.log(points[i])
    //   console.log(U)
    // } 
    // console.log(U)
    // var V = points[i].x * mult
    var V = -y

    // fill(r,g,b,map(U,0,1,0,255))

    points[i].add(createVector(V,0))
    // points[i].add(createVector(cos(angle),sin(angle)))

    ellipse(points[i].x,points[i].y,1)

    if (abs(points[i].x) > width/2 || abs(points[i].y) > height/2){
      points[i].x = random(width/2,-width/2)
      points[i].y = random(-height/2,height/2)
    }
    
    // line(points[i], createVector(cos(angle),sin(angle))
  }
}