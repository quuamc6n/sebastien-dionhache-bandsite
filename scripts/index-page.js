
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

//Extract names from object
// function getNames (array) {
//     commentInformation.forEach((obj) => {
//         nameArr.push(obj.Name);
//     });
//     return (nameArr);
// };

// //Extract comments from object
// function getComments (array) {
//     commentInformation.forEach((obj) => {
//       commentsArr.push(obj.Text);
//     });
//     return (commentsArr);
// }

// //Extract date from object
// function getTime(array) {
//   commentInformation.forEach((obj) => {
//     return obj.Timestamp;
//   });
// }

const mainContainer = document.querySelector(".comments__container");
function createCard (array) {
    for (let i = 0; i < array.length; i++){
      let name = array[i].Name;
      let text = array[i].Text;
      let date = array[i].Timestamp;

      // create main div that will hold text and avatar
      const container = document.createElement("div");
      container.className = "comments__container-main";
      mainContainer.appendChild(container);

      // create text div and append into main div
      const textContainer = document.createElement("div");
      textContainer.className = "comments__container-main-text";
      container.appendChild(textContainer);

      // create avatar div and append into main div
      const avatarContainer = document.createElement("div");
      avatarContainer.className = "comments__container-main-avatar";
      container.appendChild(avatarContainer);

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