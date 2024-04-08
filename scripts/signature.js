var canvas = document.getElementById("signature-canvas");
    var ctx = canvas.getContext("2d");
    var isDrawing = false;
    var lastX = 0;
    var lastY = 0;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);

    document.getElementById("clear-signature").addEventListener("click", clearSignature);

    function startDrawing(e) {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    }

    function draw(e) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }

    function stopDrawing() {
        isDrawing = false;
        document.getElementById("signature-data").value = canvas.toDataURL();
    }

    function clearSignature() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById("signature-data").value = "";
    }