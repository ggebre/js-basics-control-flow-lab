function scuberGreetingForFeet(rides){
  // Write your code here!
  
  if (rides <= 400) {
    return "This one is on me!"
  } 
  if (rides > 2500) {
    return 'No can do.'
  } 
  if (rides > 2000 && rides <= 2500){
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city == 'NYC'){
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous'){
    return 'Thank you so much.'

  }else if (tip === 'not as generous'){
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}

