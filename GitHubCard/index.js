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
// MY PROFILE
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

axios.get(" https://api.github.com/users/VodeniZeko").then(res => {
  cards.append(createCard(res.data)); //fetching my info
});

axios
  .get(" https://api.github.com/users/VodeniZeko/followers")
  .then(res => res.data.map(x => console.log(x.login)));

let randomPromise = Promise.resolve(200); // grabing all off the followers apis
axios
  .all([
    axios.get("https://api.github.com/users/rofstudios"),
    axios.get("https://api.github.com/users/svyatokshin"),
    axios.get("https://api.github.com/users/dmhabh1992"),
    axios.get("https://api.github.com/users/kphillips001"),
    axios.get("https://api.github.com/users/taylorroebuck"),
    axios.get("https://api.github.com/users/Gremlin4544"),
    axios.get("https://api.github.com/users/ranccm"),
    axios.get("https://api.github.com/users/alexvision26"),
    axios.get("https://api.github.com/users/msinnema33"),
    axios.get("https://api.github.com/users/AmMiRo"),
    randomPromise
  ])
  .then(res => {
    followersArray = res; // adding then to the let variable
  });

let followersArray;

window.setTimeout(function() {
  cards.append(createCard(followersArray[0].data)); //appending all off them
  cards.append(createCard(followersArray[1].data));
  cards.append(createCard(followersArray[2].data));
  cards.append(createCard(followersArray[3].data));
  cards.append(createCard(followersArray[4].data));
  cards.append(createCard(followersArray[5].data));
  cards.append(createCard(followersArray[6].data));
  cards.append(createCard(followersArray[7].data));
  cards.append(createCard(followersArray[8].data));
  cards.append(createCard(followersArray[9].data));
  cards.append(createCard(followersArray[10].data));
  cards.append(createCard(followersArray[11].data));
}, 1000);

// GRABBING THE PARENT ELEMENT FOR THE CADS
const cards = document.querySelector(".cards");
