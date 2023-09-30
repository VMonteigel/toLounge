"use strict";

function makeCounter() {
    let count = 0;

    function counter() {
      //counter.set = (a) => count = a;       //так тоже работает
      //counter.decrease = () => count--; 
      return count++;
    }

    counter.set = (a) => count = a;
    counter.decrease = () => count--; 
       
    return counter;
  }
  
  let counter = makeCounter();

  document.write('<br>', counter() );
  document.write('<br>', counter() );
  document.write('<br>', counter() );
  counter.decrease();
  document.write('<br>', counter() );
  counter.set(100);
  document.write('<br>', counter() );