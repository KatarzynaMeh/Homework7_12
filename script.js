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
inputWhats.classList.add('input-whats');
inputWhats.type = "text";
inputWhats.placeholder = "What’s happening?";
divMe.append(inputWhats);

const buttonTweet = document.createElement("button");
buttonTweet.classList.add("btn-tweet");
buttonTweet.innerText = "Tweet";
divMe.appendChild(buttonTweet);

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
              console.log(bodyUser);
              const reactionUser = document.createElement("p");
              reactionUser.classList.add("text-color");
              reactionUser.innerText = post.reactions;

              userContainer2.append(bodyUser, reactionUser);
      }

    });
  });
};

// const userContainer = document.createElement("div");
// userContainer.classList.add("user-container");
// comments.append(userContainer);

// const showAllUsers = (users, posts) => {
//   users.slice(0, 10).forEach((data) => {
//     const userName = document.createElement("h4");
//     userName.innerText = data.userName;

//     const avatar = document.createElement("img");
//     avatar.classList.add("users-avatar");
//     avatar.src = data.image;
//   });

//   posts.slice(0, 10).forEach((post) => {
//     const bodyUser = document.createElement("p");
//     bodyUser.innerText = post.body;

//     const reactionUser = document.createElement("p");
//     reactionUser.innerText = post.reactions;
//   });

//   userContainer.append(avatar, userName, bodyUser, reactionUser);
// };

const fetchAllUsers = async (callback) => {
  const [usersResponse, commentsResponse] = await Promise.all([
    fetch("https://dummyjson.com/users"),
    fetch("https://dummyjson.com/posts"),
  ]);

  const responceUsers = await usersResponse.json();
  const responceComments = await commentsResponse.json();

  callback(responceUsers.users, responceComments.posts);
};
// const fetchAllUsers = (callback) => {
//   fetch(`https://dummyjson.com/users`)
//     .then((responce) => responce.json())
//     .then((data) => callback(data.users));
// };

fetchAllUsers((users, posts) => showAllUsers(users, posts));
