
alert ("Js is WORKING!!")

//myObjects
main ={};
main.wordArray = {};
main.wordUArray = {};

main.lives  =6;
main.NumberInWordBank = Word.Length;

main.Word = "test";
main.wordU = "";

//myFunctions

main.pullWord = function (){
  main.Word = Word.List[(math.random()*main.NumberInWordBank)];
}

main.SetUnderline = function (){
min.pullWord();
for (i=0; i<main.Word.Length; i++){
  main.main.lives[i] = main.Word.charAt(i);
  main.wordArray[i] = "-";
}
main.wordU = main.wordArray.join("");
document.getElementById("word").innerHTML = main.wordU;
document.getElementById("numLetters").innerHTML = main.Word.length;
}

main.UpdateLetter = function(){
  main.Changes = 0;
  for (i = 0; i< main.Word.length; i++)
    main.wordArray[i] = main.Word.charAt(i);
      if(main.Word.charAt(i) == letter){
        main.wordUArray[i] == letter;
        main.Changes += 1;
      }
    }

      if(main.Changes < 1){
        main.lives -=1;
        document.getElementById("lives").innerHtml = main.lives;
      }

main.wordU = main.wordUArray.join("");
document.getElementById("Word").innerHTML = main.wordU;

main.Word1 = main.wordArray.join("");
main.Word2 = main.wordUArray.join('');

  if (main.Word1 == main.Word2){
    alert("You WON! YEYYYY!")
    window.location.reload();
  }
  if(main.Lives > 1){
      document.getElementById(WORD).inner.HTML == main.word1;
      alert("You are dead! Try Again ")
      window.location.reload();
  }

min.pullWord();
main.SetUnderline();
