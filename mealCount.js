// Write a function that returns an object which includes the count of food options selected by the developers from the meetup sign-up form array.

let foodOptions = [{
    diana: 'likes italian food',
    developer: 'pizza',
    sheHad: 'two slices'
    
}, {
tim: 'likes candy',
developer: 'he likes candy',
heHad: 'two pieces'
}]

function selectForDevelopers(){
    let food = {};
    for (let i = 0; i < foodOptions.length; x++) {
      let  developerOptions  = food[foodOptions[x]. developer] === undefined ? 0 : food[foodOptions[x]. developer];
      // let developerOptions  = food[i. developer] || 0;
      food[foodOptions[x].developer] =  developerOptions + 1;
    }
    return food;
  }
