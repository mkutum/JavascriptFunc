

function displayClk1(e) {
    // e.preventDefault();
    var a = document.getElementById("contact1").style;
    var b = document.getElementById("contact2").style;
    var x = document.getElementById('chat').style;
    var y = document.getElementById('notifications').style;
    var z = document.getElementById("mri").style;
    if (y.display === "none") {
        y.display = "block";
        a.color = "#3751ff";
        a.background = "#eff0f8";
        b.color = "#fff";
        b.background = "#000";
        x.display = "none";
        z.display = "none";


    } else {
        y.display = "block";
        x.display = "none";
        z.display = "none";
    }

};
function displayClk2(e) {
    // e.preventDefault();
    var a = document.getElementById("contact1").style;
    var b = document.getElementById("contact2").style;
    var x = document.getElementById('chat').style;
    var y = document.getElementById('notifications').style;
    var z = document.getElementById("mri").style;
    if (x.display === "none") {
        a.color = "#fff";
        a.background = "#000";
        x.display = "block";
        b.color = "#3751ff";
        b.background = "#eff0f8";
        y.display = "none";
        z.display = "none";
    } else {
        x.display = "block";
        y.display = "none";
        z.display = "none";
    }

};

// var conversation = document.getElementsByClassName("conversation");
// conversation.addEventListener("click", displayClk3);
