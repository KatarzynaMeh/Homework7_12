const header = document.querySelector("header");
const text_home = document.createElement("p");
text_home.classList.add("text");
text_home.innerText = "Home";
const icon_home = document.createElement("img");
icon_home.classList.add("img");
icon_home.src = "./img/Group.svg";
header.append(text_home, icon_home);

const fetchMeUser = async (callback) => {
  const response = await fetch("https://dummyjson.com/docs/users/1");
  const userData = await response.json();

  callback(userData);
};
