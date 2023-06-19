function initializeData() {
  axios
    .get(
      "https:project-1-api.herokuapp.com/comments?api_key=%3C98da4bee-8f08-4234-9431-3f569c0a8a67%3E"
    )
    .then((response) => {
      createCard(response.data.reverse());
    });
}
initializeData();

function getData() {
  axios
    .get(
      "https:project-1-api.herokuapp.com/comments?api_key=%3C98da4bee-8f08-4234-9431-3f569c0a8a67%3E"
    )
    .then((response) => {
      createCard([response.data[response.data.length-1]])
    });
}

const mainContainer = document.querySelector(".comments__container");
const formEvent = document.querySelector(".form");

//Creates comment card and places it into comments section
function createCard(array) {
  for (let i = 0; i < array.length; i++) {
    let name = array[i].name;
    let text = array[i].comment;
    let date = array[i].timestamp;

    // create main div that will hold text and avatar
    const container = document.createElement("div");
    container.className = "comments__container-main";
    mainContainer.prepend(container);

    // create the avatar container and append into main div
    const avatarContainer = document.createElement("div");
    avatarContainer.className = "comments__container-main-avatar";
    container.appendChild(avatarContainer);

    // create image element to house avatar
    const displayAvatar = document.createElement("img");
    displayAvatar.className = "comments__container-main-avatar-img";
    avatarContainer.appendChild(displayAvatar);
    displayAvatar.src = "";

    // create text div and append into main div
    const textContainer = document.createElement("div");
    textContainer.className = "comments__container-main-text";
    container.appendChild(textContainer);

    // create div holding name and date for styling
    const nameDateDiv = document.createElement("div");
    nameDateDiv.className = "comments__container-main-name-date";
    textContainer.appendChild(nameDateDiv);

    // create p for name and append into nameDateDiv
    const namePar = document.createElement("p");
    namePar.className = "comments__container-main-text-name";
    nameText = document.createTextNode(name);
    namePar.appendChild(nameText);
    nameDateDiv.appendChild(namePar);

    // create p for date and append into nameDateDiv
    const datePar = document.createElement("p");
    datePar.className = "comments__container-main-text-date";
    dateText = document.createTextNode(date);
    datePar.appendChild(dateText);
    nameDateDiv.appendChild(datePar);

    // create p for text and append it to textContainer div
    const textPar = document.createElement("p");
    textPar.className = "comments__container-main-text-input";
    textInput = document.createTextNode(text);
    textPar.appendChild(textInput);
    textContainer.appendChild(textPar);
  }
}


const formAvatar = document.querySelector(".form__img");
function createFormAvatar(img) {
  const ele = document.createElement("img");
  ele.src = img;
  ele.className = "form__img--center";
  ele.style.backgroundImage = img;
  formAvatar.appendChild(ele);
}
createFormAvatar("../Assets/Images/Mohan-muruge.jpg");

function displayComment() {
  formEvent.addEventListener("submit", (event) => {
    event.preventDefault();
    axios
      .post(
        "https:project-1-api.herokuapp.com/comments?api_key=%3C98da4bee-8f08-4234-9431-3f569c0a8a67%3E",
        {
          name: getNewName(),
          comment: getNewComment()
        }
      )
      .then(() => getData());
      formEvent.reset();
  });
}
displayComment();

// gets current time of comment submission
function getCurrentTime() {
  let today = new Date();
  let DD = today.getDate();
  let MM = today.getMonth() + 1;
  let YY = today.getFullYear();
  return `${MM}/${DD}/${YY}`;
}

// gets name of user
function getNewName() {
  const newName = document.getElementById("newName");
  return newName.value;
}

// gets comment text from user input
function getNewComment() {
  const newComment = document.getElementById("newComment");
  return newComment.value;
}
