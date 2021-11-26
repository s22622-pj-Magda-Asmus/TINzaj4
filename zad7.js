
function obliczeniepola(ksztalt) {
 
  switch (ksztalt) {
    case 'prostokat':
      bok1 = prompt("Podaj długość boku 1: ");
      bok2 = prompt("Podaj długość boku 2: ");
      prostokat(bok1,bok2);
      break;
    case 'trapez':
      bok1 = prompt("Podaj długość boku 1: ");
      bok2 = prompt("Podaj długość boku 2: ");
      wysokosc = prompt("Podaj wysokosc: ");
      trapez(bok1,bok2,wysokosc);
      break;
    case 'rownoleglobok':
      bok1 = prompt("Podaj długość boku 1: ");
      wysokosc = prompt("Podaj wysokosc: ");
      rownoleglobok(bok1,wysokosc);
      break;
    case 'trojkat':
      bok1 = prompt("Podaj długość boku 1: ");
      bok2 = prompt("Podaj wysokość: ");
      trojkat(bok1,bok2);
      break;
  }


}

function prostokat(bok11,bok22) {
  document.write("POLE prostokata = " + bok11*bok22);
  console.log("POLE prostokata = " + bok11*bok22);
}

function trapez (bok11,bok22,wysokosc) {
  var pole = (bok11+bok22)*wysokosc/2;
  document.write("POLE trapezu = " + pole);
  console.log("POLE trapezu  = " + pole);

}

function rownoleglobok (bok11,bok22) {
  document.write("POLE równoległoboku = " + bok11*bok22);
  console.log("POLE równoległoboku = " + bok11*bok22);

}

function trojkat(bok11,bok22) {
   document.write("POLE trojkata = " + (bok11*bok22)/2);
   console.log("POLE trójkata = " + (bok11*bok22)/2);

}