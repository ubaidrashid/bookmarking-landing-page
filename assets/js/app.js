"use strict"
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let bookmarkingImg = document.querySelector('.book-img')
let bookmarkingHead = document.querySelector('.bookmarking-head')
let bookmarkingP = document.querySelector('.for-width')
let questionOne = document.querySelector('.question-1')
let questionTwo = document.querySelector('.question-2')
let questionThree = document.querySelector('.question-3')
let questionFour = document.querySelector('.question-4')
let openOne = document.querySelector('.open1')
let closeOne = document.querySelector('.close1')
let openTwo = document.querySelector('.openTwo')
let closeTwo = document.querySelector('.close2')
let openThree = document.querySelector('.openThree')
let closeThree = document.querySelector('.close3')
let openFour = document.querySelector('.openFour')
let closeFour = document.querySelector('.close4')
let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let icon3 = document.querySelector('.icon3');
let icon4 = document.querySelector('.icon4');
let answerOne = document.querySelector('.answer1')
let answerTwo = document.querySelector('.answer2')
let answerThree = document.querySelector('.answer3')
let answerFour = document.querySelector('.answer4')
let col1 = document.querySelector('.col1')
let col2 = document.querySelector('.col2')
let col3 = document.querySelector('.col3')
let col4 = document.querySelector('.col4')
one.style.borderBottom = '4px solid hsl(0, 94%, 66%)'
one.addEventListener('click', () => {
    // alert('nnm')
    three.style.borderBottom = ''
    two.style.borderBottom = ''
    one.style.borderBottom = '4px solid hsl(0, 94%, 66%)'
    bookmarkingImg.src = ''
    bookmarkingImg.src = 'assets/images/illustration-features-tab-1.svg'
    bookmarkingHead.innerHTML = ''
    bookmarkingHead.innerHTML = `<h1>Bookmark in one click</h1>`
    bookmarkingP.innerText = ''
    bookmarkingP.innerText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites'
})
two.addEventListener('click', () => {
    // alert('nnm')
    one.style.borderBottom = ''
    three.style.borderBottom = ''
    two.style.borderBottom = '4px solid hsl(0, 94%, 66%)'
    bookmarkingImg.src = ''
    bookmarkingImg.src = 'assets/images/illustration-features-tab-2.svg'
    bookmarkingHead.innerHTML = ''
    bookmarkingHead.innerHTML = `<h1>Intelligent search</h1>`
    bookmarkingP.innerText = ''
    bookmarkingP.innerText = ' Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.'
})
three.addEventListener('click', () => {
    // alert('nnm')
    one.style.borderBottom = ''
    two.style.borderBottom = ''
    three.style.borderBottom = '4px solid hsl(0, 94%, 66%)'
    bookmarkingImg.src = ''
    bookmarkingImg.src = 'assets/images/illustration-features-tab-3.svg'
    bookmarkingHead.innerHTML = ''
    bookmarkingHead.innerHTML = `<h1>Share your bookmarks</h1>`
    bookmarkingP.innerText = ''
    bookmarkingP.innerText = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
})
// for question1
openOne.addEventListener('click', () => {
    closeOne.classList.toggle('none');
    icon1.classList.toggle('none')
    answerOne.classList.toggle('none')
})
// closeOne.addEventListener('click',()=>{
//     closeOne.classList.toggle('none')
//     icon1.classList.toggle('none')
//     answerOne.classList.toggle('none')
// })
// for question2
openTwo.addEventListener('click', () => {
    closeTwo.classList.toggle('none');
    icon2.classList.toggle('none')
    answerTwo.classList.toggle('none')

})
// for question3
openThree.addEventListener('click', () => {
    closeThree.classList.toggle('none');
    icon3.classList.toggle('none')
    answerThree.classList.toggle('none')

})
// for question4
openFour.addEventListener('click', () => {
    closeFour.classList.toggle('none');
    icon4.classList.toggle('none')
    answerFour.classList.toggle('none')

})


function handlerOne() {
    // questionOne.style.color = 'red'
    col1.style.color = 'hsl(0, 94%, 66%)'
}
function chandlerOne() {
    // questionOne.style.color = 'red'
    col1.style.color = ''
}

function handlerTwo() {
    // questionOne.style.color = 'red'
    col2.style.color = 'hsl(0, 94%, 66%)'
}
function chandlerTwo() {
    // questionOne.style.color = 'red'
    col2.style.color = ''
}
function handlerThree() {
    // questionOne.style.color = 'red'
    col3.style.color = 'hsl(0, 94%, 66%)'
}
function chandlerThree() {
    // questionOne.style.color = 'red'
    col3.style.color = ''
}
function handlerFour() {
    // questionOne.style.color = 'red'
    col4.style.color = 'hsl(0, 94%, 66%)'
}
function chandlerFour() {
    // questionOne.style.color = 'red'
    col4.style.color = ''
}

let error = document.querySelector('.error');
let div = document.querySelector('.div');
let btnLogin = document.querySelector('.btn-login');
let input = document.getElementById('input');
let whoops = document.querySelector('.whoops');



function vaga(){
    function isEmail(inputValue) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputValue);
    }
    
    let inputValue =  input.value;
    if (isEmail(inputValue)){
        // alert('yes' + + inputValue + + 'is email')
        error.classList.add('none')
        whoops.classList.add('none')
        div.style.border = 'none'
    }else{
        // alert('not' + inputValue)
        
        // div.style.height = '80px'
        error.classList.remove('none')
        whoops.classList.remove('none')
        div.style.border = '2px solid hsl(0, 94%, 66%)'
        
        
    }
}
let body = document.querySelector('body')
let closeNav = document.querySelector('.close-nav');
let items = document.querySelector('.items');
let harm = document.querySelector('.harm');

harm.addEventListener('click',()=>{
    items.style.display = 'flex';
    harm.classList.add('none');
    body.style.overflowY = 'hidden'
})

closeNav.addEventListener('click',()=>{
    items.style.display = 'none'; 
    harm.classList.remove('none');
    body.style.overflowY = 'unset'
    
})