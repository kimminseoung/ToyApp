const TimeBox = document.getElementById("Time");

function TimeTxt(){
  const Time = new Date();
  const H = String(Time.getHours()).padStart(2,"0");
  const M = String(Time.getMinutes()).padStart(2,"0");
  const S = String(Time.getSeconds()).padStart(2,"0");
  
  TimeBox.innerText=`${H}:${M}:${S}`
}
setInterval(TimeTxt,1000)

export default TimeBox;