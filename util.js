// 背景格子  drawGrid('lightgray', 10, 10);
function drawGrid(color, sx, sy) {
    ctx.save();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = color;

    for (var i = sx + 0.5; i < ctx.canvas.width; i += sx) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ctx.canvas.height);
        ctx.stroke();
    }

    for (var i = sy + 0.5; i < ctx.canvas.height; i += sy) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(ctx.canvas.width, i);
        ctx.stroke();
    }

    ctx.restore();
}

// 鼠标在canvas坐标系中的坐标
function windowToCanvas(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    }
}