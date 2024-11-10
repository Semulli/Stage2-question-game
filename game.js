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

    // choice 2
    let question2 = prompt(
      "OMG!!!! It is a wolf, you have to do something. Okay/I'm scared"
    );

    if (question2 == "Okay") {
      alert("You try to talk with this wolf");

      alert("Wolf wants to try help you");

      // choice 3

      let question3 = prompt(
        "hoarsely, Oh poor girl, do you need a help, I can take you everywhere you want/  Please/ NO!"
      );

      if (question3 == "Please") {
        alert(
          "You try to go to your grandma house together and this wolf kills you"
        );
        alert("You lost the game");
      } else {
        alert("Yeah guy, you are the pro");
        alert("You reach your grandma house safe");

        alert(
          "You are in the house, but wait a minute🧐, there are something strange"
        );

        alert(
          "OMG!!! OMG!! you realize that this is not your grand parent. IT IS A WOLF WITH YOUR GRANDMA APPEARENCE"
        );

        // last choice
        let emerCall = [911, 155, 666];
        let emergency = +prompt(
          `You have to call police. Choice polie number: ${emerCall} `
        );

        if (emergency == emerCall[0]) {
          alert("Police come and save you and your grandma");

          alert("HAPPY ENDING❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️");
        } else {
          alert(
            "You lost!! you don't know the police number and in this  way wolf kill you"
          );
        }
      }
    } else {
      alert("diu diu diuuuu, you died!! wolf bites you🫨");
    }
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
