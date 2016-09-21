
alert ("Js is WORKING!!")

//myObjects
main ={};
main.wordArray = [];
main.wordUArray = [];
main.lives  = 6;

main.NumberInwordList = 30;

main.word = "i am working";
main.wordU = "";

//myFunctions

main.pullWord = function (){
  main.word = words.List[(math.random()*main.NumberInwordList)];
}

main.SetUnderline = function (){
main.pullWord();
for (i=0; i<main.word.length; i++){
  main.wordArray[i] = main.word.charAt(i);
  main.wordUArray[i] = "_";
}

main.wordU = main.wordArray.join("");
document.getElementById("word").innerHTML = main.wordU;
document.getElementById("letters").innerHTML = main.word.length;
}

main.updateletter = function(letter){
	main.changes = 0;
	for(i=0; i < main.word.length; i++){
		main.wordarray[i] = main.word.charAt(i);
		if(main.word.charAt(i) == letter){
		main.wordUArray[i] = letter;
		main.changes += 1;
		}
	}
	if(main.changes < 1){
		main.lives -= 1;
		document.getElementById("lives").innerHTML = main.lives;
	}

main.wordU = main.wordUArray.join("");
document.getElementById("word").innerHTML = main.wordU;

main.Word1 = main.wordArray.join("");
main.Word2 = main.wordUArray.join('');

  if (main.Word1 == main.Word2){
    alert("You WON! YEYYYY!")
    window.location.reload();
  }
  if(main.lives > 1){
      document.getElementById(WORD).inner.HTML == main.word1;
      alert("You are dead! Try Again ")
      window.location.reload();
  }

  main.Pullword();
  main.SetUnderline();
}
