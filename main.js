var canvas = new fabric.Canvas("mycanvas")
block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function block_update(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width)
		block_image_object.scaleToHeight(block_image_height)
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') {
		block_x = -5;
		block_update('rr1.png')
		console.log("r")
	}
	if (keyPressed == '71') {
		block_x = 240;
		block_update("gr.png")
		console.log("g")
	}
	if (keyPressed == '89') {
		block_x = 390;
		block_update("yr.png")
		console.log("y")
	}
	if (keyPressed == '80') {
		block_x = 655;
		block_update("pr.png")
		console.log("p")
	}
	if (keyPressed == '66') {
		block_x = 720;
		block_update("br.png")
		console.log("b")
	}

}