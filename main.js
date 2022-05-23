function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
    }
    function setup() {
    canvas.mouseReleased(classifyCanvas);
    }
    function draw()
    {
        stroke(0);
        strokeWeight(13);
        if(mouseIsPressed){
            line(pmouseX,pmouseY,mouseX,mouseY)
        }
        }

    positions
    if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
    }
    function classifyCanvas() {
    classifier.classify(canvas, gotResult);
    }
    function gotResult(error, results) {
    if (error) {
    console.error(error);
    }
    console.log(results);
    drawn_sketch = results[0].label;
    document.getElementById('label').innerHTML = 'Your Sketch: ' + drawn_sketch;
    document.getElementById('confidence').innerHTML = 'Confidence: ' +
    Math.round(results[0].confidence * 100) + '%';
}