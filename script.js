let i = 0;
let j = 0;
let time = 50;
let txt = 'Welcome to my photo gallery.';
let myName = 'SUZY XU';

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('welcome').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, time);
    }
}

function nameWriter() {
    if (j < myName.length) {
        document.getElementById('name').innerHTML += myName.charAt(j);
        j++;
        setTimeout(nameWriter, time);
    }
}

typeWriter();
setTimeout(nameWriter, 1500);

// let left_col = document.getElementById('left');
// let img_con = document.createElement('div');
// img_con.id = 'image-container';

// function addImage(col) {
//     let left_col = document.getElementById('left');
//     let img_con = document.createElement('div');
//     img_con.id = 'image-container';
// }

// addImage()
