/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get(" https://api.github.com/users/VodeniZeko").then(res => {
//   console.log(res.data);
// });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// axios.get("https://api.github.com/users/VodeniZeko/followers");
//   .then(response => {
//     console.log(response);
//   });

// const followersArray = [];
// console.log(followersArray);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const createCard = function(obj) {
  const userCard = document.createElement("div");
  const userImage = document.createElement("img");
  const userInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userUsername = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  const anchor = document.createElement("a");

  userCard.classList.add("card");
  userInfo.classList.add("card-info");
  userName.classList.add("name");
  userUsername.classList.add("username");
  anchor.setAttribute("href", obj.html_url);

  //
  userName.textContent = obj.name;
  userImage.src = obj.avatar_url;
  userUsername.textContent = obj.login;
  anchor.textContent = obj.html_url;
  profile.textContent = "Github:  ";
  location.textContent = `Location:  ${obj.location}`;
  followers.textContent = `Followers:  ${obj.followers}`;
  following.textContent = `Following:  ${obj.following}`;
  bio.textContent = `Bio:  ${obj.bio}`;

  //
  userCard.append(userImage);
  userCard.append(userInfo);
  //
  userInfo.append(userName);
  userInfo.append(userUsername);
  userInfo.append(location);
  userInfo.append(profile);
  userInfo.append(followers);
  userInfo.append(following);
  userInfo.append(bio);
  profile.append(anchor);
  //

  return userCard;
};

const cards = document.querySelector(".cards");

axios.get(" https://api.github.com/users/VodeniZeko").then(res => {
  cards.append(createCard(res.data));
});
