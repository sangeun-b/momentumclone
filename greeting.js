const form = document.querySelector(".jsForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".jsGreeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function handleSubmit(event) {
  event.preventDefault(); //prevent page refresh
  const currentValue = input.value;
  paintGreeting(currentValue);
  //localStorage.setItem(USER_LS, currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //user name is empty
    askForName();
  } else {
    //user name is existed
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
