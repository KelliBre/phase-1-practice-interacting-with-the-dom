//GLOBAL VARIABLES
const addBtn = document.querySelector('#plus');
const subtractBtn = document.querySelector("#minus");
const pauseBtn = document.querySelector('#pause');

const submitBtn = document.querySelector('#submit');

let count = document.querySelector("#counter");
let interval =  setInterval(incrementCount, 1000);


const heartBtn = document.querySelector('#heart');
let likeNumber = parseInt(count.innerText);
let likeObj ={};



// DOMCONTENTLOADED

document.addEventListener("DOMContentLoaded", () => {

    counter();
    addBtn.addEventListener('click', incrementCount);
    subtractBtn.addEventListener('click', minusCount);
    pauseBtn.addEventListener("click", pauseCount);
    heartBtn.addEventListener('click', likeCounter);

    

});

/*COUNTER FEATURE: Increment Counter  */
function counter () {
   incrementCount()
}

function incrementCount () {
    count.innerText = parseInt(count.innerText, 10) + 1;
}

/*COUNTER FEATURE: Minus Feature  */

function minusCount () {
    count.innerText = parseInt(count.innerText, 10) - 1 ;
}

/*COUNTER FEATURE: Pause Feature  */

function pauseCount () {
    pauseBtn.addEventListener("click", () => {

        if (pauseBtn.innerText === "Resume"){
            pauseBtn.innerText = "pause"; 
            interval = setInterval(incrementCount, 1000)
        }else {
            clearInterval(interval);
            pauseBtn.innerText = "Resume"
        }

        subtractBtn.disabled = !subtractBtn.disabled;
        addBtn.disabled = !addBtn.disabled;
        heartBtn.disabled = !heartBtn.disabled;
        submitBtn.disabled = !submitBtn.disabled;

    })
}
/*COUNTER FEATURE: Heart Feature  */

function likeCounter (){
    let counterValue = document.getElementById('counter').textContent;
    if (likeObj[counterValue]){
        likeObj[counterValue] += 1;
    } else {
        likeObj[counterValue] = 1;
    }
    let likesUl = document.querySelector('.likes');
    let likesLi= document.createElement('li');
    likesLi.innerText = `The number ${counterValue} has been liked ${likeObj[counterValue]} `;
    likesUl.appendChild(likesLi);

}





/*COMMENT FEATURE: Add Comments  */

let commentForm = document.querySelector("#comment-form")
const list = document.getElementById("list");

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.querySelector("#comment-input").value;
    let li =  document.createElement("li");
    li.innerText = input; 
    list.appendChild(li);
    commentForm.reset()
    console.log(input);
 
})

















