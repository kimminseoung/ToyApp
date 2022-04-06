const form = document.querySelector("#formInput");
const Inputvalue = document.querySelector("#formInput input");
const ul = document.querySelector("#ulList");
const li = document.querySelector("#ulList li")

let doTos = [];

const list = document.getElementById("listWrap");
const Open = document.getElementById("openList");
const Close = document.querySelector(".close");
Open.innerText = "메모장"
Close.innerHTML="✖"

Open.addEventListener("click",()=>{
  Open.classList.add("Listhidden");
  list.classList.add("Listhidden");
})
Close.addEventListener("click",()=>{
  list.classList.remove("Listhidden");
  Open.classList.remove("Listhidden")
})
Close.addEventListener("mouseenter",()=>{
  Close.innerHTML="❌"
})
Close.addEventListener("mouseout",()=>{
  Close.innerHTML="✖"
})

const handleListData = (event) => {
  event.preventDefault();
  const data = {
    id:Math.floor(Math.random()*1000000000),
    text:Inputvalue.value,
    time:new Date().toLocaleString()
  }
  doTos.push(data)
  PaintTodos(data)
  localStorage.setItem("list",JSON.stringify(doTos));
  Inputvalue.value=""
}

form.addEventListener("submit",handleListData);

const del = (event) =>{
  const {parentElement:{id}} = event.target;
  const li = event.target.parentElement;
  li.remove();
  doTos=doTos.filter(a=>a.id!==parseInt(id));
  localStorage.setItem("list",JSON.stringify(doTos))
}

const PaintTodos=(data)=>{
  const li = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");
  span.id="timeline";
  span.innerText = data.time;
  li.className = "todoItem"
  li.id = data.id;
  li.innerText = data.text;
  li.appendChild(span);
  li.appendChild(button);
  button.innerText="삭제";
  button.classList.add("hidden");
  button.addEventListener("click",del)

  li.addEventListener("mouseleave",()=>{
    button.classList.add("hidden");
  })
  li.addEventListener("mouseenter",()=>{
    button.classList.remove("hidden");
  })
  ul.appendChild(li);
}

const getData = localStorage.getItem("list");
const lists = JSON.parse(getData);
if(lists!==null){
  lists.map(PaintTodos)
}

