const Container = document.querySelector(".container");

const img = ["01.jpg","02.jpg","03.png"];
const indexNandom = img[Math.floor(Math.random()*img.length)]
Container.style.background = `url(img/${indexNandom}) no-repeat center center`;
Container.style.backgroundSize = "cover";