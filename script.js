const addUserBtn = document.querySelector("button");
const addedUser = document.querySelector(".users-list");

const searchBtn = document.querySelector(".searchButton");
const finddUsers = document.querySelector(".searchInput");

const findUserH3 = document.querySelector(".userFind");

const inputName = document.querySelector(".name");
const inputSurname = document.querySelector(".surname");
const inputAge = document.querySelector(".age");
const inputEmail = document.querySelector(".email");

const users = [];

class Users {
  constructor(name, surname, age, email) {
    this.createUsers(name, surname, age, email);
  }
  createUsers(name, surname, age, email) {
    const usersLiWrapper = document.createElement("li");
    usersLiWrapper.classList.add("single-user");

    const usersName = document.createElement("p");
    usersName.innerHTML = `Imię: ${name}`;

    const usersSurname = document.createElement("p");
    usersSurname.innerHTML = `Nazwiwsko: ${surname}`;

    const usersAge = document.createElement("p");
    usersAge.innerHTML = `Wiek: ${age}`;

    const usersEmail = document.createElement("p");
    usersEmail.innerHTML = `Email: ${email}`;

    const deleteUserBtn = document.createElement("button");
    deleteUserBtn.innerHTML = "Remove user";

    deleteUserBtn.addEventListener("click", () =>
      this.removeUsersFromListOfUsers(usersLiWrapper)
    );

    usersLiWrapper.appendChild(usersName);
    usersLiWrapper.appendChild(usersSurname);
    usersLiWrapper.appendChild(usersAge);
    usersLiWrapper.appendChild(usersEmail);
    usersLiWrapper.appendChild(deleteUserBtn);
    addedUser.appendChild(usersLiWrapper);

    const newUser = {
      name,
      surname,
      age,
      email,
    };
    users.push(newUser);
  }
  removeUsersFromListOfUsers(usersLiWrapper) {
    usersLiWrapper.parentNode.removeChild(usersLiWrapper);
    const usersIndex = users.indexOf(usersLiWrapper);
    users.splice(usersIndex, 1);
    console.log(users);
  }
}

const searchWord = (e) => {
  e.preventDefault();
  const currentWord = finddUsers.value;
  console.log(currentWord);
  let tempUsers = [...users];
  console.log(tempUsers);
  tempUsers = tempUsers.map((tempUser) => {
    if (tempUser.name === currentWord) {
      findUserH3.innerHTML = `Znaleziono: ${tempUser.name}`;
      findUserH3.style.color = "green";
    } else {
      findUserH3.innerHTML = `Nie znaleziono użytkownika: ${currentWord}`;
      findUserH3.style.color = "red";
    }
    console.log(tempUsers);

    return tempUser;
  });
};

const addUser = (e) => {
  e.preventDefault();

  if (
    inputName.value !== "" &&
    inputSurname.value !== "" &&
    inputAge.value !== "" &&
    inputEmail.value !== ""
  ) {
    new Users(
      inputName.value,
      inputSurname.value,
      inputAge.value,
      inputEmail.value
    );

    inputName.value = "";
    inputSurname.value = "";
    inputAge.value = "";
    inputEmail.value = "";

    console.log(users);
  }
};

searchBtn.addEventListener("click", searchWord);

addUserBtn.addEventListener("click", addUser);
