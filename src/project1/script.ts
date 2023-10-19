const colors: { [key: string]: { r: number, g: number, b: number } } = {
    blue: { r: 0, g: 0, b: 255 },
    yellow: { r: 255, g: 255, b: 0 },
    purple: { r: 128, g: 0, b: 128 },
    ruby: { r: 224, g: 17, b: 95 },
    emerald: { r: 4, g: 216, b: 178 },
    black: { r: 0, g: 0, b: 0 },
    white: { r: 255, g: 255, b: 255 }
};

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // No continuous drawing unless necessary
    noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    const chosenColorName = random(Object.keys(colors));
    const chosenColor = colors[chosenColorName];

    fill(chosenColor.r, chosenColor.g, chosenColor.b);

    switch (Math.floor(random(3))) {
        case 0:
            ellipse(mouseX, mouseY, random(50, 150), random(50, 150));
            break;
        case 1:
            rect(mouseX, mouseY, random(50, 150), random(50, 150));
            break;
        case 2:
            triangle(mouseX, mouseY, mouseX + random(50, 150), mouseY, mouseX + random(50, 150) / 2, mouseY - random(50, 150));
            break;
    }
}
