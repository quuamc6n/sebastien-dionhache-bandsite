
let commentInformation = [
  {
    Name: "Connor Walton",
    Timestamp: "02/17/2021",
    Text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    Name: "Emilie Beach",
    Timestamp: "01/09/2021",
    Text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    Name: "Miles Acosta",
    Timestamp: "12/20/2020",
    Text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const mainContainer = document.querySelector(".comments__container");
const formEvent = document.querySelector(".form");


function createCard (array) {
    for (let i = 0; i < array.length; i++){
      let name = array[i].Name;
      let text = array[i].Text;
      let date = array[i].Timestamp;

      // create main div that will hold text and avatar
      const container = document.createElement("div");
      container.className = "comments__container-main";
      mainContainer.appendChild(container);
      
      // create the avatar container and append into main div
      const avatarContainer = document.createElement("div");
      avatarContainer.className = "comments__container-main-avatar";
      container.appendChild(avatarContainer);

      // create image element to house avatar
      const displayAvatar = document.createElement('img');
      displayAvatar.className = 'comments__container-main-avatar-img';
      avatarContainer.appendChild(displayAvatar);
      displayAvatar.src = '';

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
createCard(commentInformation);

const formAvatar = document.querySelector('.form__img');
function createFormAvatar (img){
    const ele = document.createElement('img');
    ele.src = img;
    ele.className = 'form__img--center';
    ele.style.backgroundImage = img;
    formAvatar.appendChild(ele);
}
createFormAvatar(
    '../Assets/Images/Mohan-muruge.jpg'
);


function displayComment(comment){
    formEvent.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    const button = document.querySelector('.form__button');
    button.addEventListener('click', () => {
        commentInformation.unshift({
          Name: getNewName(),
          Text: getNewComment(),
          Timestamp: getCurrentTime(),
        });
        console.log(commentInformation[0]);
        return commentInformation[0];
    });
    formEvent.reset();
}
displayComment(commentInformation);

function getCurrentTime(){
    let today = new Date();
    let DD = today.getDate();
    let MM = today.getMonth()+1;
    let YY = today.getFullYear();
    return (`${MM}/${DD}/${YY}`);
};

function getNewName(){
    const newName = document.getElementById('newName');
    return newName.value;
}

function getNewComment() {
    const newComment = document.getElementById("newComment");
    return newComment.value;
}

function pushNewestComment (func) {
    console.log(func.Name);
    let name = func.Name;
    let text = func.Text;
    let date = func.Timestamp;

  // create main div that will hold text and avatar
  const container = document.createElement("div");
  container.className = "comments__container-main";
  mainContainer.prepend(container);

  // create the avatar container and append into main div
  const avatarContainer = document.createElement("div");
  avatarContainer.className = "comments__container-main-avatar";
  container.prepend(avatarContainer);

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

  // create p for name and prepend into nameDateDiv
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