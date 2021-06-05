const msg=document.querySelector('.msg');
const btn=document.querySelector('.btn');
const guess=document.querySelector('input');
let play=false;
let  newWords="";
let randomWords="";
let sWords=['python','javascript','c++','php','c#','html','css','reactjs','angular','swift','android','sql'];

const createNewWords=()=>
{
    let randomNum=Math.floor(Math.random() *sWords.length);
    // console.log(sWords[randomNum]);
    let newTempWords=sWords[randomNum]; 
    // console.log(newTempWords.split(""));
    return newTempWords;
}


const scrambleWords=(arr)=>{
// arr.split("");
for(let i=arr.length-1;i>=0;i--)
{
    let temp=arr[i];
    // console.log(temp);
    let j=Math.floor(Math.random()*(i+1));
// console.log(i);
// console.log(j);
arr[i]=arr[j];
arr[j]=temp;

}
return arr;

}


btn.addEventListener('click',function(){

    if(!play)
    {
        play=true;
        btn.innerHTML="GUESS";
        guess.classList.toggle('hidden'); 
         newWords=createNewWords();  
        //  console.log(newWords.split(""));
        randomWords=scrambleWords(newWords.split("")).join("");
        // console.log(randomWords);
// console.log(randomWords.join("")); 
        msg.innerHTML=`Guess the word: ${randomWords}`;

    }
    else{
         
        let tempWords=guess.value;
        if(newWords===tempWords){
            // console.log("correct");
            play=false;
            msg.innerHTML=`Awsome, It's Correct. It is ${newWords}`;
            btn.innerHTML="Start Again";
            guess.classList.toggle('hidden');
            guess.value="";
        }
        else{
            // console.log("incorrext");
            msg.innerHTML=`Sorry, It's incorrect. Please try again ${randomWords}`;
        }
    }

    // if(play){
    //     play=false;
    //     btn.innerHTML="Click here to Start"
    //     guess.classList.add('hidden')

    // }
})