var readlinesync=require("readline-sync");
const chalk = require('chalk');
var score=0;
var userName=readlinesync.question(chalk.green("can i know your name plz: "))
var userResponse=readlinesync.question(chalk.yellow(userName + "  ooh! you are one-off my friends \n let's see how well u know me\n are you ready: "))
if(userResponse==="yes"){
  console.log("alright lets start")
}else{
  console.log("oops!")
}


if(userResponse==="yes")
{
//--------- playfunction--------------
function play(question, answer) 
{
  var useranswer = readlinesync.question(chalk.blue(question))
  if (useranswer===answer) 
  {
    console.log(chalk.blue("right"))
    score = score + 1;
    console.log(chalk.green(score))
    

    console.log("-------------------------------")
  }
  else
  {
    console.log(chalk.blue("wrong"))
    score = score;
    console.log(chalk.blue(score))

    console.log("-------------------------------")
  }

}



var selectingmyfav1 = {
  question: "my Favorite movie?: \n (a)3 idiots  \n (b)2611 \n (c)kgf \n (d)bahubali 2 \n" ,
  answer:"a"
}
var selectingmyfav2 = {
  question: " Favorite music video?:  \n (a)shiv tandav \n (b)her kisi ko \n (c)Behti Hawa Sa Tha Woh  \n (d)tere bin \n",
  answer: "c"
}

var selectingmyfav3 = {
  question: "Favorite song?:  \n (a)shiv tandav \n (b)Behti Hawa Sa Tha Woh \n (c)faded \n (d)tere liye \n",
  answer: "b"
}

var selectingmyfav4 = {
  question: " Favorite Eye color?: \n (a)gray \n (b)red \n (c)sky-blue \n (d)black \n",
  answer: "c"
}

var selectingmyfav5= {
  question: "Favorite TV show?:  \n (a)tarak mehta ka ulta chasma \n (b)kapil sharma show",
  answer: "a"
}

var questions = [selectingmyfav1,selectingmyfav2,selectingmyfav3,selectingmyfav4,selectingmyfav5]


for (i = 0; i <questions.length; i++) {
  var accessquestion = questions[i];
  play(accessquestion.question, accessquestion.answer)
}

console.log(userName+" you have scored: "+score+"points")

if(score>=4){
  console.log("well played "+ userName)
}else{
  console.log("sorry better luck next time "+userName)
}
}