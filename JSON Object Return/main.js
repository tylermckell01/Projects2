// 1st challenge
// const JSON = {
//   user1: {
//     id: "1",
//     Name: "john",
//     Email: "user1@gmail.com",
//     Password: "password",
//   },
//   user2: {
//     id: "2",
//     Name: "tim",
//     Email: "user2@gmail.com",
//     Password: "password",
//   },
//   user3: {
//     id: "3",
//     Name: "jim",
//     Email: "user3@gmail.com",
//     Password: "password",
//   },
// };

// First try, uses a loop and returns every user
// let newArray = [];

// for (let x in JSON) {
//   const user = JSON[x];
//   const { Name, Email } = user;
//   newArray.push({ Name, Email });
//   console.log(`Hello ${Name}, your email ${Email}`);
// }

// console.log(newArray);

// Second try, returns specified user
// let newArray = [];
// function logUser(x) {
//   const user = JSON[x];

//   const { Name, Email } = user;

//   newArray.push({ Name, Email });
//   console.log(`Hello ${Name}, your email ${Email}`);
// }

// logUser("user2");

// 2nd Challenge
const requestObject = new XMLHttpRequest();
let newArray = [];

function toPromise() {
  return new Promise((resolve, reject) => {
    requestObject.open("GET", "https://www.swapi.tech/api/planets");
    requestObject.responseType = "json";
    requestObject.send();
    requestObject.onload = () => {
      resolve(requestObject.response.results);
    };

    // reject("get rejected");
  });
}

function logPlanet(x, data) {
  const planet = data[x];
  const { name, uid } = planet;
  console.log(`the name of your planet is ${name}, it has a UID of ${uid}`);
}

toPromise()
  .then((data) => {
    newArray = data;
    console.log(newArray);

    logPlanet(0, newArray);
  })
  .catch((err) => {
    console.error("Uh oh, there was an error", err);
  })
  .finally(() => {
    console.log("your program ran.");
  });

// first unfinished try
// function toPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("resolved, wahoo");

//     reject("get rejected");
//   });
// }

// toPromise()
//   .then((result) => {
//     let newArray = [];
//     function logUser(x) {
//       const user = JSON[x];
//       const { Name, Email } = user;
//       newArray.push({ Name, Email });
//       console.log(`Hello ${Name}, your email ${Email}`);
//     }
//     logUser()
//   })
//   .catch((err) => {
//     console.error("Uh oh, there was an error", err);
//   })
//   .finally(() => {
//     console.log("your program ran.");
//   });
