const container = document.getElementsByClassName("container")[0];
const pointerEvent = document.getElementsByClassName("pointer-events")[0];
container.onpointermove = (e) => {
    pointerEvent.style.background = `radial-gradient(600px at ${Math.round(e.screenX)}px ${Math.round(e.screenY)}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
}