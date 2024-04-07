window.onload = function() {
    var canvas = document.getElementById('firmaCanvas');
    var limpiarBtn = document.getElementById('limpiarFirma');
    var ctx = canvas.getContext('2d');
    var firma = false;

    canvas.addEventListener('mousedown', function(e) {
        firma = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    });

    canvas.addEventListener('mousemove', function(e) {
        if (firma) {
            ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function() {
        firma = false;
    });

    limpiarBtn.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
};