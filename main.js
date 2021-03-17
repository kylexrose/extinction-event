const list1 = document.querySelectorAll('ol li');
for (let item of list1){
    item.addEventListener('click', (e) =>{
        e.target.style.textDecoration = "line-through";
    })
}

const list2 = document.querySelectorAll('ul li');
for (let item of list2){
    item.addEventListener('click', (e) =>{
        e.target.style.opacity = "0";
    })
}

const list3 = document.querySelectorAll('#row img');
for (let item of list3){
    item.addEventListener('click', (e) =>{
        e.target.style.width = "0";
    })
}

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    for (let item of list1){
        item.style.textDecoration = "line-through";
    }
    for (let item of list2){
        item.style.opacity = "0";
    }
    for (let item of list3){
        item.style.width = "0";
    }
})