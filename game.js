//! Intro

alert("Welcome you are in Little Red Riding Hood story game. ");

//? Enter game
let stage1 = prompt(
  "Hi! You have to make choice. Do you want to contuniue the game? Yes/No"
);

if (stage1 == "Yes") {
  alert(`WOW! you are gallant person`);

  alert("Now, you are getting inside the gamee....");
  alert("Everywhere's getting darker......");
  alert("Hey, You are in the little wood house with your family");

  // choice 1
  let question1 = prompt(
    "Now, your mum prepared pancakes for you and your favorite grandma. Do you want to take it to her? With pleasure/Nah"
  );

  if (question1 == "With pleasure") {
    alert("Okay! You're getting ready to go. ");
    alert("Now you're on your way and someone is  calling you from behind ");
    let question2 = prompt(
      "OMG!!!! It is a wolf, you have to do something. Okay/I'm scared"
    );
  } else {
    alert("Your mum said that:'Oh girl you are such a lazy girl🙄'");
  }
}
//? End game
else {
  alert(
    " Game finished!! Don't feel dissapoint, You have more time feel like the which time is true to start game   "
  );
}
