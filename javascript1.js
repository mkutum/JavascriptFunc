document.getElementById("changeto").addEventListener('mouseover', myFunction);


function myFunction() {
    console.log("mouse hover");
    let first = document.getElementById("hideMe");
    console.log(first);
    // let second = document.getElementById("record").style;
    // let third = document.getElementById("right_status").style;
    // let fourth = document.getElementById("homes").style;

    if (first.style.zIndex === "0") {
        first.style.zIndex = "3";
        // first.style.transition = 'width .5s ease -in -out';

    } else {
        first.style.zIndex = "0";

        // first.style.transition = 'width .5s ease -in -out';
    }
};

