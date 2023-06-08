const list = document.querySelector('.main__list');

let myObj = [
  {
    DATE: 'Mon Sept 06 2021',
    VENUE: 'Ronald Lane',
    LOCATION: 'San Francisco, CA',
  },
  {
    DATE: 'Tue Sept 21 2021',
    VENUE: 'Pier 3 east',
    LOCATION: 'San Francisco, CA',
  },
  {
    DATE: 'Fri Oct 15 2021',
    VENUE: 'View Lounge',
    LOCATION: 'San Francisco, CA',
  },
  {
    DATE: 'Sat Nov 06 2021',
    VENUE: 'Hyatt Agency',
    LOCATION: 'San Francisco, CA',
  },
  {
    DATE: 'Fri Nov 26 2021',
    VENUE: 'Moscow Center',
    LOCATION: 'San Francisco, CA',
  },
  {
    DATE: 'Wed Dec 15 2021',
    VENUE: 'Press Club',
    LOCATION: 'San Francisco, CA',
  },
];


//LOW PRIORITY -- dry this and maybe make multiple functions work together
//This all works, just needs style
function createListItem (array) {
    for (let i = 0; i < array.length; i++){
        const listEle = document.createElement('li');
        listEle.className = 'main__list-item';
        
        //Add listener event for setting focus on <li> selected.
        listEle.addEventListener('click', () => {
          visibileCheck(listEle);
        });
        
        const createButton = document.createElement('button');
        createButton.className = 'main__list-item-button';
        const creatButtonText = document.createTextNode('BUY TICKETS');
        createButton.appendChild(creatButtonText);

        for (let x = 0; x < Object.keys(array[i]).length; x++){
            const listEleText = document.createElement('p');
            listEleText.className = 'main__list-item-title';
            let keysArray = Object.keys(array[i]);
            let textNode = document.createTextNode(keysArray[x]);
            listEleText.appendChild(textNode);
            
            // Need to find a way to make the date class different for styling

            const listEleTextTwo = document.createElement('p');
            listEleTextTwo.className = 'main__list-item-text';
            let valuesArray = Object.values(array[i]);
            let textNodeTwo = document.createTextNode(valuesArray[x]);
            listEleTextTwo.appendChild(textNodeTwo);

            listEle.appendChild(listEleText);
            listEle.appendChild(listEleTextTwo);
        }
        list.appendChild(listEle);
        listEle.appendChild(createButton);
    }
};
createListItem(myObj);


//Add class to set focus
function makeVisible(element) {
  element.classList.add('main__list-item-visible');
}
//Remove class taking away focus if different <li> is focused
function makeInvisible(element) {
  element.classList.remove('main__list-item-visible');
}
//Checking if element already has class to set focus. If so, keep that <li> selected.
//If not, add it as new focus and remove any other currently focused <li>.
function visibileCheck(element){
  const fullList = list.getElementsByClassName('main__list-item');
  for (let i = 0; i < fullList.length; i++) {
    if (fullList[i].classList.contains('main__list-item-visible')) {
      makeInvisible(fullList[i]);
    }
  }makeVisible(element);
}