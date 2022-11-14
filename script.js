const videoElem = document.getElementById("video");
const btn = document.getElementById("button");

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElem.srcObject = mediaStream;
        videoElem.onloadedmetadata = () => {
            videoElem.play();
        };
    } catch (err) {
        console.log(err);
    }
}

btn.addEventListener("click", async () => {
    btn.disabled = true;
    await videoElem.requestPictureInPicture();
    btn.disabled = false;
});

selectMediaStream();
