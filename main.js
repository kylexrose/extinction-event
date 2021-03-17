// Meteor Button ===========================
const button = document.querySelector('button');
button.addEventListener('click', () =>{
    list1.forEach((item) => strike(item))
    list2.forEach((item) => disappear(item))
    list3.forEach((item) => collapse(item))
})

//Individual Item Clicks==========================
const list1 = document.querySelectorAll('ol li');
list1.forEach((item) => {
    item.addEventListener('click', (e) => {
        strike(e.target);
})})

const list2 = document.querySelectorAll('ul li');
list2.forEach((item) => {
    item.addEventListener('click', (e) => {
    disappear(e.target);
})})

const list3 = document.querySelectorAll('img');
list3.forEach((item) => {
    item.addEventListener('click', (e) => {
    collapse(e.target);
})})

//Helper Functions ==========================

function strike(element){
    element.style.textDecoration = "line-through";
}

function disappear(element){
    element.style.opacity = "0";
}

function collapse(element){
    element.style.width = "0";
}