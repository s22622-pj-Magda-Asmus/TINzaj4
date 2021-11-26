var POLE= function(figura) {
  figura();
}

function prostokat() {
  bok1 = prompt("Podaj długość boku 1: ");
  bok2 = prompt("Podaj długość boku 2: ");
  document.write("POLE prostokata = " + bok1*bok2);
  console.log("POLE prostokata = " + bok1*bok2);
}  

function trapez() {
  bok1 = prompt("Podaj długość boku 1: ");
  bok2 = prompt("Podaj długość boku 2: ");
  wysokosc = prompt("Podaj wysokosc: ");
  var pole = (bok1+bok2)*wysokosc/2;
  document.write("POLE trapezu = " + pole);
  console.log("POLE trapezu  = " + pole);

}
function rownoleglobok() {
  bok1 = prompt("Podaj długość boku 1: ");
  bok2 = prompt("Podaj długość boku 2: ");
  document.write("POLE rownolegloboku = " + bok1*bok2);
  console.log("POLE rownolegloboku  = "+ bok1*bok2);

}

function trojkat() {
  bok1 = prompt("Podaj długość podstawy: ");
  bok2 = prompt("Podaj wysokość: ");
  document.write("POLE trojkata = " + bok1*bok2/2);
  console.log("POLE trójkata = "+ bok1*bok2/2);

}



