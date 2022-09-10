/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btnEl = document.getElementById("btn");
const outputDiv = document.getElementById("output");
const messageEl = document.getElementById("message");

btnEl.addEventListener("click", getAndDisplay);


async function getAndDisplay() {
  const recieved = await getUsers();
  displayInHtml(recieved);
}

async function getUsers() {
  const resp = await fetch(ENDPOINT);
  const dataInJSON = await resp.json();
  return dataInJSON;
}

function displayInHtml(user) {
  messageEl.style.display = "none";
  user.forEach((el) => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `<p>${el.login}</p> <img src="${el.avatar_url}">`;
    outputDiv.append(userCard);
  });
}