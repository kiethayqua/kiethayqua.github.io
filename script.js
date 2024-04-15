const container = document.getElementsByClassName("container")[0];
const pointerEvent = document.getElementsByClassName("pointer-events")[0];
container.onpointermove = (e) => {
    pointerEvent.style.background = `radial-gradient(600px at ${Math.round(e.pageX)}px ${Math.round(e.pageY)}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
}

const aboutPosition = document.getElementById('about').offsetTop;
const experiencePosition = document.getElementById('experience').offsetTop;
const projectsPosition = document.getElementById('projects').offsetTop;
const aboutButton = document.getElementById('about-button');
const experienceButton = document.getElementById('experience-button');
const projectsButton = document.getElementById('projects-button');
const line1 = aboutButton.getElementsByClassName("line")[0];
const title1 = aboutButton.getElementsByClassName("menu-title")[0];
const line2 = experienceButton.getElementsByClassName("line")[0];
const title2 = experienceButton.getElementsByClassName("menu-title")[0];
const line3 = projectsButton.getElementsByClassName("line")[0];
const title3 = projectsButton.getElementsByClassName("menu-title")[0];


window.addEventListener('scroll', (e) => {
    const currentPosition = Math.round(this.scrollY) + 200;
    if (currentPosition >= aboutPosition && currentPosition < experiencePosition) {
        if (line1.className.indexOf("line-active") == -1) {
            line1.className += " line-active";
        }
        if (title1.className.indexOf("title-active") == -1) {
            title1.className += " title-active";
        }
        line2.className = line2.className.replace("line-active", "");
        title2.className = title2.className.replace("title-active", "");
    } else if (currentPosition >= experiencePosition && currentPosition < projectsPosition) {
        if (line2.className.indexOf("line-active") == -1) {
            line2.className += " line-active";
        }
        if (title2.className.indexOf("title-active") == -1) {
            title2.className += " title-active";
        }
        line1.className = line1.className.replace("line-active", "");
        title1.className = title1.className.replace("title-active", "");
        line3.className = line3.className.replace("line-active", "");
        title3.className = title3.className.replace("title-active", "");
    } else if (currentPosition >= projectsPosition) {
        if (line3.className.indexOf("line-active") == -1) {
            line3.className += " line-active";
        }
        if (title3.className.indexOf("title-active") == -1) {
            title3.className += " title-active";
        }
        line2.className = line2.className.replace("line-active", "");
        title2.className = title2.className.replace("title-active", "");
    }
});