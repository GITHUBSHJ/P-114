
function preload(){
}

function setup() {
	canvas = createCanvas(300, 330);
	canvas.center();
}


function draw() {
	image(video, 0, 0, 300, 330);
	image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
	save('MOUSTACHE_filter.png');
}

function nose_filter()
{
	window.alert("YOU CAN CLICK ON TAKE SNAPSHOT TO SAVE YOUR IMAGE");
	console.log("YOU CAN CLICK ON TAKE SNAPSHOT TO SAVE YOUR IMAGE");
}

