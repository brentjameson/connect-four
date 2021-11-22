const gameAndEntryContainer = document.querySelector(".gameAndEntryPoint");
const gameContainer = document.querySelector(".game");
const entryPointContainer = document.querySelector(".entryPoint");


const gameBoardArray = ['1','2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42']

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

  // function createDivsForGamePieces(array) {
  //   for (let square of array) {
  //     // create a new div
  //     const newDiv = document.createElement("div");
  
  //     // give it a class attribute for the value we are looping over
  //     newDiv.classList.add(square, 'pieces');
  
  //     // call a function handleCardClick when a div is clicked on
  //     newDiv.addEventListener("click", handleCardClick);
  
  //     // append the div to the element with an id of game
  //     piecesContainer.append(newDiv);
  //   }
  // }

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

  const column1 = ['36', '29', '22', '15', '8', '1']
  const column2 = ['37', '30', '23', '16', '9', '2']
  const column3 = ['38', '31', '24', '17', '10', '3']
  const column4 = ['39', '32', '25', '18', '11', '4']
  const column5 = ['40', '33', '26', '19', '12', '5']
  const column6 = ['41', '34', '27', '20', '13', '6']
  const column7 = ['42', '35', '28', '21', '14', '7']

  const columns = [column1, column2, column3, column4, column5, column6, column7]

  gameAndEntryContainer.addEventListener('click', function(e){

  });

  let counter = '0'

  gameAndEntryContainer.addEventListener('click', function(e){
      if(e.target === entryPointDiv1) {
        counter++;
    console.log (counter);
        for(let sq of column1) {
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
      if(e.target === entryPointDiv2) {
        counter++;
    console.log (counter);
        for(let sq of column2) {
          let sq1 = document.getElementsByClassName(sq)
          if(sq1[0].hasChildNodes()){
            console.log("it's working")
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
      if(e.target === entryPointDiv3) {
        counter++;
    console.log (counter);
        for(let sq of column3) {
          let sq1 = document.getElementsByClassName(sq)
          if(sq1[0].hasChildNodes()){
            console.log("it's working")
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
      if(e.target === entryPointDiv4) {
        counter++;
    console.log (counter);
        for(let sq of column4) {
          let sq1 = document.getElementsByClassName(sq)
          if(sq1[0].hasChildNodes()){
            console.log("it's working")
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
      if(e.target === entryPointDiv5) {
        counter++;
    console.log (counter);
        for(let sq of column5) {
          let sq1 = document.getElementsByClassName(sq)
          if(sq1[0].hasChildNodes()){
            console.log("it's working")
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
      if(e.target === entryPointDiv6) {
        counter++;
    console.log (counter);
        for(let sq of column6) {
          let sq1 = document.getElementsByClassName(sq)
          if(sq1[0].hasChildNodes()){
            console.log("it's working")
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
      if(e.target === entryPointDiv7) {
        counter++;
    console.log (counter);
        for(let sq of column7) {
          let sq1 = document.getElementsByClassName(sq)
          if(sq1[0].hasChildNodes()){
            console.log("it's working")
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

  })


