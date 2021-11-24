const gameAndEntryContainer = document.querySelector(".gameAndEntryPoint");
const gameContainer = document.querySelector(".game");
const entryPointContainer = document.querySelector(".entryPoint");


const gameBoardArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]

// below array from https://dev.to/fakorededamilola/building-a-connect-four-game-with-javascript-1f45
const winningArray = [ 
  [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
  [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
  [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
  [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
  [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
  [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
  [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
  [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
  [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
  [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
  [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
  [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
  [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
  [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
  [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
  [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
  [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
  [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
  [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
  [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
  [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
  [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
  [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
  ]; 

function createDivsForGameBoard(array) {
    for (let square of array) {
      // create a new div
      const newDiv = document.createElement("div");
  
      // give it a class attribute for the value we are looping over
      newDiv.classList.add(square, 'game', 'gameAndEntryPoint');
  
      // call a function handleClick when a div is clicked on
      newDiv.addEventListener("click", handleClick);
  
      // append the div to the element with an id of game
      gameContainer.append(newDiv);
    }
  }

  function handleClick(e) {
    }

  // when the DOM loads
  createDivsForGameBoard(gameBoardArray);

  const gameTwentyNine = document.querySelector(".twentyNine");

  const entryPointDiv1 = document.querySelector('#entryPoint1')
  const entryPointDiv2 = document.querySelector('#entryPoint2')
  const entryPointDiv3 = document.querySelector('#entryPoint3')
  const entryPointDiv4 = document.querySelector('#entryPoint4')
  const entryPointDiv5 = document.querySelector('#entryPoint5')
  const entryPointDiv6 = document.querySelector('#entryPoint6')
  const entryPointDiv7 = document.querySelector('#entryPoint7')
  const entryPointArr = [entryPointDiv1, entryPointDiv2, entryPointDiv3, entryPointDiv4, entryPointDiv5, entryPointDiv6, entryPointDiv7]

  const column1 = [35, 28, 21, 14, 7, 0]
  const column2 = [36, 29, 22, 15, 8, 1]
  const column3 = [37, 30, 23, 16, 9, 2]
  const column4 = [38, 31, 24, 17, 10, 3]
  const column5 = [39, 32, 25, 18, 11, 4]
  const column6 = [40, 33, 26, 19, 12, 5]
  const column7 = [41, 34, 27, 20, 13, 6]

  const columns = [column1, column2, column3, column4, column5, column6, column7]
  
  function insertGamePieces(columnArr) {
    for(let sq of columnArr) {
      let sq1 = document.getElementsByClassName(sq)
      if(sq1[0].hasChildNodes()){
        continue;
      }
      else (!sq1[0].hasChildNodes());  
        const newDiv = document.createElement("div")
        if (counter % 2 === 0){
          newDiv.classList.add('piecesRed')
        sq1[0].appendChild(newDiv);
        return; 
        }
        else {
          newDiv.classList.add('piecesBlue')
        sq1[0].appendChild(newDiv);
        return; 
        }
    }
  }
  
  let counter = '0'

  gameAndEntryContainer.addEventListener('click', function(e){
    // console.log(e.target);
      if(e.target === entryPointDiv1) {
        counter++;
        insertGamePieces(column1)

    }
      if(e.target === entryPointDiv2) {
        counter++;
        insertGamePieces(column2)

    }
      if(e.target === entryPointDiv3) {
        counter++;
        insertGamePieces(column3)

    }
      if(e.target === entryPointDiv4) {
        counter++;
        insertGamePieces(column4)

    }
      if(e.target === entryPointDiv5) {
        counter++;
        insertGamePieces(column5)

    }
      if(e.target === entryPointDiv6) {
        counter++;
        insertGamePieces(column6)

    }
      if(e.target === entryPointDiv7) {
        counter++;
        insertGamePieces(column7)
    }

  })

  // some elements of the below function are from https://dev.to/fakorededamilola/building-a-connect-four-game-with-javascript-1f45
// function checkWon() {
//   let squares = document.querySelectorAll('.game div')

//   for (let square of winningArray) {
//     I like this concept, but need to find a way to check to see if squares are red or blue and then match them up to the winnningArray. The below 2 lines are what I need to figure out
// To win: same color of pieces (find using classList) contain all 4 numbers in a winning array (use 'contains' or 'includes' with classList)
//     if(square.every(q =>squares[q] === )) {
//       console.log(squares[q])
//       setTimeout(() => alert('player one(red) wins'), 200)
//       setTimeout(() => restart.style.display = 'flex', 500)
//     } else if(square.every(q =>squares[q].classList.contains('piecesBlue'))) {
//       setTimeout(() => alert('player two(blue) wins'), 200)
//       setTimeout(() => restart.style.display = 'flex', 500)
//     }
//   }
// }

// 

function checkWon() {
  let squares = document.querySelectorAll('.piecesBlue')
  for (let square of winningArray) {
    console.log(square)
  square.every(containsNum)
  };
  alert('Blue wins!')
}

function containsNum(val){
  let pieces = document.querySelectorAll('.piecesBlue')
  for (let square of winningArray) {
    return val.classList.contains(Json.stringify(winningArray))
  }
}


//     I like this concept, but need to find a way to check to see if squares are red or blue and then match them up to the winnningArray. The below 2 lines are what I need to figure out
// To win: same color of pieces (find using classList) contain all 4 numbers in a winning array (use 'contains' or 'includes' with classList)
    // if(


      

    