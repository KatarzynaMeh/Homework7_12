const header = document.querySelector("header");
const text_home = document.createElement("p");
text_home.classList.add("text");
text_home.innerText = "Home";
const icon_home = document.createElement("img");
icon_home.classList.add("img");
icon_home.src = "./img/Group.svg";
header.append(text_home, icon_home);

const divMe = document.querySelector(".its_me");
const userContainer = document.createElement("div");
divMe.append(userContainer);

const inputWhats = document.createElement("input");
inputWhats.classList.add("input-whats");
inputWhats.type = "text";
inputWhats.placeholder = "What’s happening?";
divMe.append(inputWhats);

const icon_meta = document.createElement("img");
icon_meta.src = "./img/Meta.svg";
icon_meta.classList.add("icon_meta__img");
divMe.append(icon_meta);

const buttonTweet = document.createElement("button");
buttonTweet.classList.add("btn-tweet");
buttonTweet.innerText = "Tweet";
divMe.appendChild(buttonTweet);

// buttonTweet.addEventListener("click", (event) => {
//   event.preventDefault();
//   const inputData = inputWhats.value;

//   const newPosts = document.createElement("p");
//   newPosts.classList.add("text-color");
//   newPosts.innerText = inputData;

//   const avatarUser = document.createElement("img");
//   avatarUser.classList.add("users-avatar");
//   avatarUser.src = user.image;

//   const userName = document.createElement("h4");
//   userName.classList.add("text-color");
//   userName.innerText = user.username;

//   userContainer2.prepend(avatarUser, userName, newPosts);

// });

// console.log(buttonTweet);

const userPage = (user) => {
  const avatarUser = document.createElement("img");
  avatarUser.classList.add("img-size");
  avatarUser.src = user.image;

  // const userName = document.createElement("h2");
  // userName.classList.add('text-user-name');
  // userName.innerText = user.username;

  userContainer.append(avatarUser);
};

const fetchPageUser = async (id, callback) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const userData = await response.json();

  callback(userData);
};

fetchPageUser(18, (user) => userPage(user));

const comments = document.querySelector(".comments");
const userContainer2 = document.createElement("div");
userContainer2.classList.add("user-container");
comments.append(userContainer2);

const showAllUsers = (users, posts) => {
  users.slice(0, 10).forEach((data) => {
    const userName = document.createElement("h4");
    userName.classList.add("text-color");
    userName.innerText = data.username;

    const avatar = document.createElement("img");
    avatar.classList.add("users-avatar");
    avatar.src = data.image;

    userContainer2.append(avatar, userName);

    posts.slice(0, 10).forEach((post) => {
      if (data.id === post.id) {
        const bodyUser = document.createElement("p");
        bodyUser.classList.add("text-color");
        bodyUser.innerText = post.body;
        // console.log(bodyUser);
        const reactionUser = document.createElement("p");
        reactionUser.classList.add("text-color");
        reactionUser.innerText = post.reactions;

        userContainer2.append(bodyUser, reactionUser);
      }
    });
  });
};

const fetchAllUsers = async (callback) => {
  const [usersResponse, commentsResponse] = await Promise.all([
    fetch("https://dummyjson.com/users"),
    fetch("https://dummyjson.com/posts"),
  ]);

  const responceUsers = await usersResponse.json();
  const responceComments = await commentsResponse.json();

  callback(responceUsers.users, responceComments.posts);
};

fetchAllUsers((users, posts) => showAllUsers(users, posts));

// add form
// const userPostArray = [];

// const showPostUser = (arr) => {
//   arr.forEach((user) => {
//     console.log(user);
//     const containerPostUser = document.createElement('div');
//     containerPostUser.classList.add('post-user');

//     const inputData = inputWhats.value;

//     const newPosts = document.createElement("p");
//     newPosts.classList.add("text-color");
//     newPosts.innerText = inputData;

//     const avatarUser = document.createElement("img");
//     avatarUser.classList.add("users-avatar");
//     avatarUser.src = user.image;

//     const userName = document.createElement("h4");
//     userName.classList.add("text-color");
//     userName.innerText = user.username;

//     containerPostUser.append(avatarUser, userName, newPosts);
//     userContainer2.append(containerPostUser);
//   });
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const user = {
//     img: 
//   }
// }
