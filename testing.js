document.addEventListener("DOMContentLoaded", () => {
    const startCameraBtn = document.getElementById("startCamera");
    const captureBtn = document.getElementById("capture");
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const photo = document.getElementById("photo");

    let stream = null;

    startCameraBtn.addEventListener("click", async () => {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            captureBtn.style.display = "block";
        } catch (error) {
            console.error("Camera access denied", error);
        }
    });

    captureBtn.addEventListener("click", () => {
        const context = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        photo.src = canvas.toDataURL("image/png");
    });
});