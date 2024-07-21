
/*
    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('upload').addEventListener('change', handleImage, false);
    document.getElementById('randomize').addEventListener('click', randomizeDots);
    document.getElementById('save').addEventListener('click', saveImage);

    let img, canvas, ctx;

    function handleImage(e) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img = new Image();
            img.onload = function() {
                canvas = document.getElementById('canvas');
                ctx = canvas.getContext('2d');

                // Set canvas dimensions smaller than image for smaller output
                const scaleFactor = 0.5; // Adjust scale factor as needed
                canvas.width = img.width * scaleFactor;
                canvas.height = img.height * scaleFactor;

                drawDots();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    function drawDots() {
        if (!img) return;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const dotSize = 2; // Adjust dot size for smaller dots
        for (let y = 0; y < canvas.height; y += dotSize) {
            for (let x = 0; x < canvas.width; x += dotSize) {
                const red = data[((y * canvas.width) + x) * 4];
                const green = data[((y * canvas.width) + x) * 4 + 1];
                const blue = data[((y * canvas.width) + x) * 4 + 2];
                const alpha = data[((y * canvas.width) + x) * 4 + 3];

                const gray = (red + green + blue) / 3;
                ctx.fillStyle = `rgba(0, 0, 0, ${alpha / 255})`;
                if (gray < 128) { // Threshold to decide dot presence
                    ctx.beginPath();
                    ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2, false);
                    ctx.fill();
                }
            }
        }
    }

    function randomizeDots() {
        if (!img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const dotSize = Math.floor(Math.random() * 4) + 1; // Random dot size between 1 and 4 for variety
        const threshold = Math.random() * 255; // Random threshold between 0 and 255
        drawDotsWithParams(dotSize, threshold);
    }

    function drawDotsWithParams(dotSize, threshold) {
        if (!img) return;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let y = 0; y < canvas.height; y += dotSize) {
            for (let x = 0; x < canvas.width; x += dotSize) {
                const red = data[((y * canvas.width) + x) * 4];
                const green = data[((y * canvas.width) + x) * 4 + 1];
                const blue = data[((y * canvas.width) + x) * 4 + 2];
                const alpha = data[((y * canvas.width) + x) * 4 + 3];

                const gray = (red + green + blue) / 3;
                ctx.fillStyle = `rgba(0, 0, 0, ${alpha / 255})`;
                if (gray < threshold) { // Use the random threshold
                    ctx.beginPath();
                    ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2, false);
                    ctx.fill();
                }
            }
        }
    }

    function saveImage() {
        const link = document.createElement('a');
        link.download = 'dot-matrix-face.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}); */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('upload').addEventListener('change', handleImage, false);
    document.getElementById('randomize').addEventListener('click', randomizeDots);
    document.getElementById('save').addEventListener('click', saveImage);

    let img, canvas, ctx;

    function handleImage(e) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img = new Image();
            img.onload = function() {
                canvas = document.getElementById('canvas');
                ctx = canvas.getContext('2d');

                // Set canvas dimensions smaller than image for smaller output
                const scaleFactor = 0.5; // Adjust scale factor as needed
                canvas.width = img.width * scaleFactor;
                canvas.height = img.height * scaleFactor;

                drawDots();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    function drawDots() {
        if (!img) return;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const dotSize = 2; // Adjust dot size for smaller dots
        for (let y = 0; y < canvas.height; y += dotSize) {
            for (let x = 0; x < canvas.width; x += dotSize) {
                const red = data[((y * canvas.width) + x) * 4];
                const green = data[((y * canvas.width) + x) * 4 + 1];
                const blue = data[((y * canvas.width) + x) * 4 + 2];
                const alpha = data[((y * canvas.width) + x) * 4 + 3];

                const gray = (red + green + blue) / 3;
                ctx.fillStyle = `rgba(0, 0, 0, ${alpha / 255})`;
                if (gray < 128) { // Threshold to decide dot presence
                    ctx.beginPath();
                    ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2, false);
                    ctx.fill();
                }
            }
        }
    }

    function randomizeDots() {
        if (!img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const dotSize = Math.floor(Math.random() * 4) + 1; // Random dot size between 1 and 4 for variety
        const threshold = Math.random() * 255; // Random threshold between 0 and 255
        drawDotsWithParams(dotSize, threshold);
         console.log('Randomize button clicked');
    }

    function drawDotsWithParams(dotSize, threshold) {
        if (!img) return;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let y = 0; y < canvas.height; y += dotSize) {
            for (let x = 0; x < canvas.width; x += dotSize) {
                const red = data[((y * canvas.width) + x) * 4];
                const green = data[((y * canvas.width) + x) * 4 + 1];
                const blue = data[((y * canvas.width) + x) * 4 + 2];
                const alpha = data[((y * canvas.width) + x) * 4 + 3];

                const gray = (red + green + blue) / 3;
                ctx.fillStyle = `rgba(0, 0, 0, ${alpha / 255})`;
                if (gray < threshold) { // Use the random threshold
                    ctx.beginPath();
                    ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2, false);
                    ctx.fill();
                }
            }
        }
    }

    function saveImage() {
        const link = document.createElement('a');
        console.log('Save Image button clicked');
        link.download = 'dot-matrix-face.png';
        link.href = canvas.toDataURL();
        link.click();
    }
});

