//Business Logic -- shoot out an objec that inludes the price of the ticket, name of moive, senior or not, matinee or not
function price (senior, matinee) {
  let price = 10;
  if (senior === true || matinee === true){
    price -=2;
  } else if (senior === true  && matinee === true){
    price -= 4;
  } else {
    price += 0;
  }

}

function Ticket (movieName,seniorOrNot,matineeOrNot ) {
  
}


//UI Logic