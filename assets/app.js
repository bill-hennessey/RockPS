for (var i = 0; ; i++) {
  //   var play = confirm("Wanna play Rock Paper Scissors?");
  var input = prompt("Choose: Rock, Paper, or Scissors");

  var answers = ["ROCK", "PAPER", "SCISSORS"];
  var win = 0;
  var loss = 0;
  var tie = 0;
  var user = input.toUpperCase();
  var random = Math.floor(Math.random() * answers.length);
  var computer = answers[random];

  alert("User chooses " + user);
  alert("Computer chooses " + answers[random]);

  if (user === "ROCK" && computer === "ROCK") {
    tie++;
    alert("you tied, bitch");
    console.log("tie " + tie);
  } else if (user === "ROCK" && computer === "SCISSORS") {
    win++;
    alert("you won, bitch");
    console.log("win " + win);
  } else if (user === "ROCK" && computer === "PAPER") {
    loss++;
    alert("you lost, bitch");
    console.log("loss " + loss);
  }
  console.log(i);

  //   alert(
  //     "You have " +
  //       win +
  //       " win(s), " +
  //       loss +
  //       " loss(es), and " +
  //       tie +
  //       " tie(s)."
  //   );
}
