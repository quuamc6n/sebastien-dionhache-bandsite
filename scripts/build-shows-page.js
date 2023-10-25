async function getShowData() {
  try {
    const response = await axios.get(
      `https://project-1-api.herokuapp.com/showdates?api_key=98da4bee-8f08-4234-9431-3f569c0a8a67`
    );
    createListItem(response.data);
  } catch (error) {
    console.error("Error getting show data:", error);
  }
}
getShowData();

const list = document.querySelector(".main__list");
const mainDiv = document.querySelector(".main__div")


function createListItem(array) {
  
  if (window.innerWidth > 767) {
    tabletLayout(Object.keys(array[0]));

    let date = [];
    array.forEach((ele) => date.push(convertDate(ele.date)));
    list.appendChild(tabletShowsLayout(date));

    let place = [];
    array.forEach((ele) => place.push(ele.place));
    list.appendChild(tabletShowsLayout(place));
    
    let location = [];
    array.forEach((ele) => location.push(ele.location));
    list.appendChild(tabletShowsLayout(location));

    const buttonList = document.createElement("li");
    buttonList.className = "main__list-item-CTA";
    for (let y = 0; y < array.length; y++) {
      const createButton = document.createElement("button");
      createButton.className = "main__list-item-button";
      const creatButtonText = document.createTextNode("BUY TICKETS");

      createButton.appendChild(creatButtonText);
      buttonList.appendChild(createButton);
      list.appendChild(buttonList);
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
      }
    }
  }
}

//Convert date from milliseconds to MM/DD/YYYY
function convertDate(dateInMilliseconds) {
  const convertedDate = new Date(parseInt(dateInMilliseconds));
  return convertedDate.toLocaleDateString('en-US');
}

//Add class to set focus
function makeVisible(element) {
  element.classList.add("main__list-item-visible");
}
//Remove class taking away focus if different <li> is focused
function makeInvisible(element) {
  element.classList.remove("main__list-item-visible");
}

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
  for (let i = 1; i < 4; i++) {
    const listEleText = document.createElement("p");
    listEleText.className = "main__div-p";
    let textNode = document.createTextNode(obj[i]);
    listEleText.appendChild(textNode);
    mainDiv.appendChild(listEleText);
  }
}


function tabletShowsLayout(arr) {
  const listItem = document.createElement('li');
  listItem.className = 'main__list-item';
  
  for (let i = 0; i < arr.length; i++) {
    const innerP = document.createElement('p');
    innerP.className = ('main__list-item-p');
    const innerText = document.createTextNode(arr[i]);
    innerP.appendChild(innerText);
    listItem.appendChild(innerP);
  }
  return listItem;
}

function convertDate(dateInMilliseconds) {
  const convertedDate = new Date(parseInt(dateInMilliseconds));
  return convertedDate.toLocaleDateString("en-US");
}