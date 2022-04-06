import TimeBox from "./Time.js";
import weather from "./weather.js";
const login = document.querySelector(".login");
const loginForm = document.querySelector(".login form");
const loginInput = document.querySelector(".login input");
const loginName = document.getElementById("loginName");

const HIDDEN = "hidden"

function loginSubmit(event){
  event.preventDefault();
  login.classList.add(HIDDEN);
  const value = loginInput.value;
  localStorage.setItem("id",value);
  getId();
}
function getId(){
  const getId = localStorage.getItem("id")
  loginName.classList.remove(HIDDEN);
  loginName.innerText = `환영합니다. ${getId}님`;
  
  if(loginName.innerText !== ""){
    Opens.classList.remove("Listhidden");
    TimeBox.classList.remove("Listhidden");
    weather.classList.add("active");
  }
  loginInput.value=""
}
const Opens = document.getElementById("openList");
if(loginName.innerText == ""){
  Opens.classList.add("Listhidden");
  TimeBox.classList.add("Listhidden");
  weather.classList.remove("active");

}
loginForm.addEventListener("submit",loginSubmit)

