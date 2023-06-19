function getShowData() {
  axios.get(
    "https:project-1-api.herokuapp.com/showdates?api_key=%3C98da4bee-8f08-4234-9431-3f569c0a8a67%3E"
  ).then ((response) => {
    createListItem(response.data);
  })
}
getShowData();


const list = document.querySelector(".main__list");
const container = document.createElement("div");
container.className = "main__div";

// let myObj = [
//   {
//     DATE: "Mon Sept 06 2021",
//     VENUE: "Ronald Lane",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Tue Sept 21 2021",
//     VENUE: "Pier 3 east",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Fri Oct 15 2021",
//     VENUE: "View Lounge",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Sat Nov 06 2021",
//     VENUE: "Hyatt Agency",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Fri Nov 26 2021",
//     VENUE: "Moscow Center",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Wed Dec 15 2021",
//     VENUE: "Press Club",
//     LOCATION: "San Francisco, CA",
//   },
// ];

function createListItem(array) {
  if (window.innerWidth > 767) {
    tabletLayout(Object.keys(array[0]));

    for (let y = 0; y < array.length; y++) {
      const listEle = document.createElement("li");
      listEle.className = "main__list-item";

      listEle.addEventListener("click", () => {
        visibileCheck(listEle);
      });

      const dateNode = document.createElement("p");
      dateNode.className = "main__list-item-text";
      dateTextNode = document.createTextNode(array[y].date);
      dateNode.appendChild(dateTextNode);

      const venueNode = document.createElement("p");
      venueNode.className = "main__list-item-text";
      venueTextNode = document.createTextNode(array[y].place);
      venueNode.appendChild(venueTextNode);

      const locNode = document.createElement("p");
      locNode.className = "main__list-item-text";
      locTextNode = document.createTextNode(array[y].location);
      locNode.appendChild(locTextNode);

      const createButton = document.createElement("button");
      createButton.className = "main__list-item-button";
      const creatButtonText = document.createTextNode("BUY TICKETS");
      createButton.appendChild(creatButtonText);

      listEle.appendChild(dateNode);
      listEle.appendChild(venueNode);
      listEle.appendChild(locNode);
      listEle.appendChild(createButton);
      list.appendChild(listEle);
    }
  }

  for (let i = 0; i < array.length; i++) {
    const listEle = document.createElement("li");
    listEle.className = "main__list-item";

    //Add listener event for setting focus on <li> selected.
    listEle.addEventListener("click", () => {
      visibileCheck(listEle);
    });

    const createButton = document.createElement("button");
    createButton.className = "main__list-item-button";
    const creatButtonText = document.createTextNode("BUY TICKETS");
    createButton.appendChild(creatButtonText);

    //Changed x = 1 to skip "response.data.id" and only show date, place, and location
    if (window.innerWidth < 768) {
      for (let x = 1; x < Object.keys(array[i]).length; x++) {
        const listEleText = document.createElement("p");
        listEleText.className = "main__list-item-title";
        let keysArray = Object.keys(array[i]);
        let textNode = document.createTextNode(keysArray[x]);
        listEleText.appendChild(textNode);

        const listEleTextTwo = document.createElement("p");
        listEleTextTwo.className = "main__list-item-text";
        let valuesArray = Object.values(array[i]);
        let textNodeTwo = document.createTextNode(valuesArray[x]);
        listEleTextTwo.appendChild(textNodeTwo);

        listEle.appendChild(listEleText);
        listEle.appendChild(listEleTextTwo);

        list.appendChild(listEle);
        listEle.appendChild(createButton);

        // Only had to comment out this portion of code which helped with Tablet layout but not mobile.
        // Was not able to complete this portion - got approval from Joe to re-submit
        // As I sent in the wrong file with this portion not commented out. Sorry about that!
        // Please let me know if you have any questions.

        // I now realize it is a problem with my code itself as it depends on what the
        // Screen size is when refreshing. Will need to refactor this a bunch of course.
        // Thank you!

        // const listEleTextTwo = document.createElement("p");
        // listEleTextTwo.className = "main__list-item-text";
        // let valuesArray = Object.values(array[i]);
        // let textNodeTwo = document.createTextNode(valuesArray[x]);
        // listEleTextTwo.appendChild(textNodeTwo);

        // listEle.appendChild(createButton);
        // list.appendChild(listEle);
      }
    }
  }
}
// createListItem(myObj);

//Add class to set focus
function makeVisible(element) {
  element.classList.add("main__list-item-visible");
}
//Remove class taking away focus if different <li> is focused
function makeInvisible(element) {
  element.classList.remove("main__list-item-visible");
}
//Checking if element already has class to set focus. If so, keep that <li> selected.
//If not, add it as new focus and remove any other currently focused <li>.
function visibileCheck(element) {
  const fullList = list.getElementsByClassName("main__list-item");
  for (let i = 0; i < fullList.length; i++) {
    if (fullList[i].classList.contains("main__list-item-visible")) {
      makeInvisible(fullList[i]);
    }
  }
  makeVisible(element);
}

function tabletLayout(obj) {
  for (let i = 0; i < 3; i++) {
    const listEleText = document.createElement("p");
    listEleText.className = "main__div-p";
    let textNode = document.createTextNode(obj[i]);
    listEleText.appendChild(textNode);
    container.appendChild(listEleText);
  }
  list.appendChild(container);
}
