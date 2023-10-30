let se = document.getElementById("save-el");

let cm = document.getElementById("count-el") ;

let count = 0;

function increment() {
    count += 1;
    cm.innerText = count;
}

function save() {
    let countstr = count + " - " ;
    se.textContent += countstr; 
    count = 0;
    cm.textContent = count;
}