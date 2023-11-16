let users;
getData();

async function getData() {
  const fetchedUsers = await fetch(
    "https://fe-students.onrender.com/api/users"
  );
  const jsonUsers = await fetchedUsers.json();
  users = jsonUsers.results;
  for (let userName of users) {
    let createNameSpace = document.createElement("div");
    createNameSpace.id = userName.id;

    createNameSpace.append(userName.name);
    sidebar.append(createNameSpace);
  }
}

async function displayAnimation() {
  for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * users.length);
    if (randomNameSpot.childNodes.length > 0) {
      randomNameSpot.innerText = "";
    }
    randomNameSpot.append(users[randomNumber].name);
    await wait(150);
    for (let user of users) {
      const namePicked = document.getElementById(`${user.id}`);
      if ((namePicked.style.backgroundColor = "green")) {
        namePicked.style.backgroundColor = "transparent";
      }

      if (randomNameSpot.innerText === user.name) {
        namePicked.style.backgroundColor = "green";
      }
    }
  }
}

function wait(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log("hi")), timeout);
  });
}

const sidebar = document.querySelector(".names-list-wrapper");
const clickMeButton = document.querySelector(".start-randomizer");
const randomNameSpot = document.querySelector(".hero-content-title");

let sidebarNameCheck = document.querySelector(".names-list-wrapper div");

clickMeButton.addEventListener("click", () => {
  displayAnimation();
});
