function display(displaythis) {
    document.getElementsById("demo").innerHTML = displaythis;
}

function add (a,b) {
    let sum = a + b;
    display(sum);
}

add(5,5);