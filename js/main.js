// Start Functions

// Images Movement
function imgAfter(imgs, points, offset) {
    offset = parseInt(offset);
    if(offset == 0 || offset == 1) {
        imgs[offset].classList.remove("show");
        imgs[offset].classList.remove("active");
        points[offset].classList.remove("active");
        imgs[offset].classList.add("right");
        points[offset].classList.add("inactive");
        setTimeout(function() {
            imgs[offset].classList.remove("right");
            imgs[offset].classList.add("hidden");
        }, 950);
        imgs[offset + 1].classList.remove("hidden");
        points[offset + 1].classList.remove("inactive");
        imgs[offset + 1].classList.add("show");
        imgs[offset + 1].classList.add("active");
        points[offset + 1].classList.add("active");
    }
    else {
        imgs[offset].classList.remove("show");
        imgs[offset].classList.remove("active");
        points[offset].classList.remove("active");
        imgs[offset].classList.add("right");
        points[offset].classList.add("inactive");
        setTimeout(function() {
            imgs[offset].classList.remove("right");
            imgs[offset].classList.add("hidden");
        }, 950);
        imgs[0].classList.remove("hidden");
        points[0].classList.remove("inactive");
        imgs[0].classList.add("show");
        imgs[0].classList.add("active");
        points[0].classList.add("active");
    }
}
function imgBefore(imgs, points, offset) {
    offset = parseInt(offset);
    if(offset == 0) {
        imgs[offset].classList.remove("show");
        imgs[offset].classList.remove("active");
        points[offset].classList.remove("active");
        imgs[offset].classList.add("right");
        points[offset].classList.add("inactive");
        setTimeout(function() {
            imgs[offset].classList.remove("right");
            imgs[offset].classList.add("hidden");
        }, 950);
        imgs[2].classList.remove("hidden");
        points[2].classList.remove("inactive");
        imgs[2].classList.add("show");
        imgs[2].classList.add("active");
        points[2].classList.add("active");
    }
    else if(offset == 2) {
        imgs[offset].classList.remove("show");
        imgs[offset].classList.remove("active");
        points[offset].classList.remove("active");
        imgs[offset].classList.add("right");
        points[offset].classList.add("inactive");
        setTimeout(function() {
            imgs[offset].classList.remove("right");
            imgs[offset].classList.add("hidden");
        }, 950);
        imgs[offset - 1].classList.remove("hidden");
        points[offset - 1].classList.remove("inactive");
        imgs[offset - 1].classList.add("show");
        imgs[offset - 1].classList.add("active");
        points[offset - 1].classList.add("active");
    }
    else {
        imgs[offset].classList.remove("show");
        imgs[offset].classList.remove("active");
        points[offset].classList.remove("active");
        imgs[offset].classList.add("right");
        points[offset].classList.add("inactive");
        setTimeout(function() {
            imgs[offset].classList.remove("right");
            imgs[offset].classList.add("hidden");
        }, 950);
        imgs[0].classList.remove("hidden");
        points[0].classList.remove("inactive");
        imgs[0].classList.add("show");
        imgs[0].classList.add("active");
        points[0].classList.add("active");
    }
}
// Move Portfolio Images In Small Screens
function scrollImgs(rows) {
    let next = document.querySelector(".portfolio .next");
    let prev = document.querySelector(".portfolio .prev");
    let container = document.querySelector(".portfolio .gallery");
    let maxRight = rows[0].offsetWidth;
    next.onmousedown = function() {
        if(maxRight - container.offsetWidth != startPos) {
            let hold = setInterval(() => {
                if(maxRight - container.offsetWidth != startPos) {
                    next.onmouseup = function() {
                        clearInterval(hold);
                    }
                    startPos++;
                    rows.forEach(function(row) {
                        row.style.transform = `translateX(${-startPos}px)`;
                    });
                }
            }, 0);
        }
    }
    prev.onmousedown = function() {
        if(startPos != 0) {
            let hold = setInterval(() => {
                if(startPos != 0) {
                    prev.onmouseup = function() {
                        clearInterval(hold);
                    }
                    startPos--;
                    rows.forEach(function(row) {
                        row.style.transform = `translateX(${-startPos}px)`;
                    });
                }
                else {
                    clearInterval(hold);
                }
            }, 0);
        }
    }
}
// For Skills Part
function editSkills(counter) {
    let father = document.querySelectorAll(".about .row .range .color")
    let adobe = "0";
    let html = "0";
    let js = "0";
    let py = "0";
    if(counter == 0) {
        adobe = "95%";
        html = "93%";
        js = "85%";
        py = "87%";
    }
    else if(counter == 1) {
        adobe = "90%";
        html = "87%";
        js = "95%";
        py = "65%";
    }
    else {
        adobe = "43%";
        html = "98%";
        js = "89%";
        py = "95%";
    }
    father.forEach((color) => {
        if(color.classList.contains("adobe")) {
            color.style.setProperty("--real-width", adobe);
            color.style.setProperty("--width-text", `"${adobe}"`);
        }
        if(color.classList.contains("html")) {
            color.style.setProperty("--real-width", html);
            color.style.setProperty("--width-text", `"${html}"`);
        }
        if(color.classList.contains("js")) {
            color.style.setProperty("--real-width", js);
            color.style.setProperty("--width-text", `"${js}"`);
        }
        if(color.classList.contains("py")) {
            color.style.setProperty("--real-width", py);
            color.style.setProperty("--width-text", `"${py}"`);
        }
    });
}
// End Functions
// Start Actions
// Show Nav And Hide Nav
let nav = document.querySelector(".header .container .nav ul");
let navPres = document.querySelector(".toggle");
let landingMsg = document.querySelector(".landing .msg");
navPres.onclick = function() {
    nav.classList.toggle("show-nav");
    navPres.classList.toggle("color");
    if(!landingMsg.classList.contains("hidden")) {
        landingMsg.classList.add("hidden");
    }
};
// Paint Li::After When Mouse Hover On The Link
let navWords = document.querySelectorAll(".header a");
navWords.forEach(function(navWord) {
    let li;
    navWord.onmouseenter = function(e) {
        // Save The Element To Return The Color To White
        li = e.fromElement;
        li.style.setProperty("--color", "#00c7fc");
    }
    navWord.onmouseleave = function() {
        li.style.setProperty("--color", "#fff");
    }
    li = "";
});
// Sticky The Header When Scrolling To Down And Up
let header = document.querySelector('.header');
window.onscroll = function() {
    let scrollVal = window.scrollY;
    // When Enter Header Area
    if(document.body.offsetWidth >= 768) {
        nav.style.setProperty("--cur-color", "transparent")
    }
    else {
        nav.style.setProperty("--cur-color", "#0f748fb3")
    }
    if(window.scrollY <= 75) {
        setTimeout(() => {
            if(header.classList.contains("stick")) {
                header.classList.remove("stick");
            }
            if(! nav.classList.contains("left-nav")) {
                nav.classList.add("left-nav");
            }
            if(nav.classList.contains("right-nav")) {
                nav.classList.remove("right-nav");
            }
        }, 100);
    }
    // To Make Sure The Header Isn't Visible Here
    if(window.scrollY >= 75 && document.body.offsetHeight) {
        header.classList.add("stick");
        // 100ms To Store The Previous Value Of Hight
        setTimeout(() => {
            nav.classList.add("right-nav");
            // To Know If User Is Scrolling To Down
            if(window.scrollY < scrollVal) {
                header.style.setProperty("--hight", "0");
                nav.classList.remove("left-nav");
            }
            // To Know If User Scrolling To Up
            else if(window.scrollY > scrollVal) {
                header.style.setProperty("--hight", "-75px");
                if(nav.classList.contains("show-nav")) {
                    nav.classList.remove("show-nav");
                    navPres.classList.remove("color");
                }
            }
        }, 100);
    }
}
// Show Landing Message
setTimeout(function() {
    landingMsg.classList.remove("hidden-msg");
}, 1000)
// Hide Landing Message
let landImgs = document.querySelectorAll(".bc");
let landImgsPoints = document.querySelectorAll(".landing .points span");
let changeLeft = document.querySelector(".landing .before");
let changeRight = document.querySelector(".landing .after");
landingMsg.onclick = function() {
    if(!this.classList.contains("hidden-msg")) {
        this.classList.add("hidden-msg");
    }
}
// To Change Photo On Landing
changeRight.onclick = function() {
    for(let i = 0; i < landImgs.length; i++) {
        if(landImgs[i].classList.contains("active")) {
            imgAfter(landImgs, landImgsPoints, landImgs[i].classList[2].split("-")[1]);
            break;
        }
    }
    let btns = document.querySelectorAll(".arrow");
    btns.forEach(function(e) {
        e.classList.add("dis");
    });
    setTimeout(function (){
        btns.forEach(function(e) {
            e.classList.remove("dis");
        });
    }, 1000);
}
changeLeft.onclick = function() {
    for(let i = 0; i < landImgs.length; i++) {
        if(landImgs[i].classList.contains("active")) {
            imgBefore(landImgs, landImgsPoints, landImgs[i].classList[2].split("-")[1]);
            break;
        }
    }
    let btns = document.querySelectorAll(".arrow");
    btns.forEach(function(e) {
        e.classList.add("dis");
    });
    setTimeout(function (){
        btns.forEach(function(e) {
            e.classList.remove("dis");
        });
    }, 1000);
}
// Filter Photos From Portfolio
let portBtns = document.querySelectorAll(".portfolio .tools span");
let portImgs = document.querySelectorAll(".portfolio .gallery .cont");
let startPos = 0;
portBtns.forEach(function(btn) {
    btn.onclick = function() {
        startPos = 0;
        let rows = document.querySelectorAll(".portfolio .gallery .row");
        rows.forEach(function(row) {
            // To Resize First
            row.style.transform = "translateX(0px)";
        });
        // Cooldown For All Buttons From Click
        portBtns.forEach(function(btn) {
            btn.classList.add("dis");
        });
        // Get Button Filter Name
        let clasName = btn.innerText.toLowerCase();
        // Hide Arrows When Filter The Photos
        let arrowPrev = document.querySelector(".portfolio .gallery .prev");
        let arrowNext = document.querySelector(".portfolio .gallery .next");
        if(clasName != "all") {
            arrowPrev.style.display = "none";
            arrowNext.style.display = "none";
        }
        else {
            arrowPrev.style.display = "flex";
            arrowNext.style.display = "flex";
        }
        // Remove Previous Active Filter
        document.querySelector(".act").classList.remove("act");
        btn.classList.add("act");
        // If The Filter Was All
        portImgs.forEach(function(img) {
            if(img.classList.contains("hide")) {
                img.classList.remove("hide");
            }
            if(img.classList.contains("no-opacity")) {
                img.classList.remove("no-opacity");
            }
        });
        if(clasName != "all") {
            // Hide Images Slowly
            portImgs.forEach(function(img) {
                if(!img.classList.contains(clasName)) {
                    if(img.classList.contains("no-opacity")) {
                        img.classList.remove("no-opacity");
                    }
                    else {
                        img.classList.add("no-opacity");
                    }
                    setTimeout(() => {
                        img.classList.add("hide");
                    }, 1000);
                }
            });
        }
        // Active All Filters Buttons
        setTimeout(() => {
            portBtns.forEach(function(btn) {
                btn.classList.remove("dis");
            });
        }, 1000);
    }
});
// Scroll Photos In Small Screen
let rows = document.querySelectorAll(".portfolio .gallery .row");
scrollImgs(rows);
document.body.onresize = function() {
    // To Recolor The Nav
    if(document.body.offsetWidth > 768) {
        if(nav.classList.contains("right-nav")) {
            nav.classList.remove("right-nav");
        }
    }
    // To Resize Photos
    startPos = 0;
    let rows = document.querySelectorAll(".portfolio .gallery .row");
    scrollImgs(rows);
    rows.forEach(function(row) {
        row.style.transform = "translateX(0px)";
    });
}
// Show Details From Imgs When Hover
let containersPort = document.querySelectorAll(".portfolio .gallery .row .cont");
containersPort.forEach(function(cont) {
    let detContainer = document.createElement("div");
    // Show Details From Imgs When Hover
    detContainer.className = "details";
    let firstP = document.createElement("p");
    firstP.appendChild(document.createTextNode("Awesome Image"));
    let secondP = document.createElement("p");
    secondP.appendChild(document.createTextNode(cont.classList[1]));
    secondP.className = "special";
    detContainer.appendChild(firstP);
    detContainer.appendChild(secondP);
    cont.appendChild(detContainer);
});
// TestImonials
let persons = document.querySelector(".about .people");
let personsPoints = document.querySelector(".about .points");
// Start Counter For Photos
let personsCounter = 0;
setInterval(() => {
    // Check If It's The Finall Image
    if(personsCounter == persons.childElementCount - 1) {
        // Remove Acitve Class From Current Img
        persons.children[personsCounter].classList.remove("act");
        personsPoints.children[personsCounter].classList.remove("active");
        // Move It To Right
        // Store The Index For It To Give Time For This Function
        persons.children[personsCounter].classList.add("hidden");
        // Return The Img To Left
        // Reset The Counter
        personsCounter = 0;
        editSkills(personsCounter);
        // Show Current Img
        persons.children[personsCounter].classList.remove("hidden");
        persons.children[personsCounter].classList.add("act");
        personsPoints.children[personsCounter].classList.add("active");
    }
    else {
        persons.children[personsCounter].classList.remove("act");
        personsPoints.children[personsCounter].classList.remove("active");
        persons.children[personsCounter].classList.add("hidden");
        // Catch Next Img
        persons.children[personsCounter + 1].classList.remove("hidden");
        persons.children[personsCounter + 1].classList.add("act");
        personsPoints.children[personsCounter + 1].classList.add("active");
        personsCounter++;
        editSkills(personsCounter);
    }
}, 6000);
// Mail In Pricing
let mailPr = document.querySelector(".pricing .inp");
let mailPrSubmit = document.querySelector(".pricing .field .send");
let mailPrTitle = mailPr.innerText;
let mailPrVal = mailPr.innerHTML;
mailPr.onfocus = function() {
    mailPr.style.setProperty("--value-sub", `"${mailPrTitle}"`);
    if(mailPr.innerHTML == mailPrVal) {
        mailPr.innerHTML = "";
    }
}
mailPr.onblur = function() {
    if(mailPr.innerText == "") {
        mailPr.innerHTML = mailPrVal;
        mailPr.style.setProperty("--value-sub", `""`);
    }
}
mailPrSubmit.onclick = function() {
    mailPr.innerHTML = mailPrVal
    mailPr.style.setProperty("--value-sub", `""`);
}
// Contact Message
let nameField = document.querySelector(".contact .name");
let mailField = document.querySelector(".contact .mail");
let msgField = document.querySelector(".contact .message");
let nameVal = nameField.innerText;
let mailVal = mailField.innerText;
let msgVal = msgField.innerText;
nameField.onfocus = function () {
    if(nameField.innerText == nameVal) {
        nameField.innerText = "";
    }
    nameField.style.setProperty("--name-val", `"${nameVal}"`);
}
nameField.onblur = function () {
    if(nameField.innerText == "") {
        nameField.innerText = nameVal;
        nameField.style.setProperty("--name-val", `""`);
    }
}
mailField.onfocus = function () {
    if(mailField.innerText == mailVal) {
        mailField.innerText = "";
    }
    mailField.style.setProperty("--mail-val", `"${mailVal}"`);
}
mailField.onblur = function () {
    if(mailField.innerText == "") {
        mailField.innerText = mailVal;
        mailField.style.setProperty("--mail-val", `""`);
    }
}
msgField.onfocus = function () {
    if(msgField.innerText == msgVal) {
        msgField.innerText = "";
    }
    msgField.style.setProperty("--msg-val", `"${msgVal}"`);
}
msgField.onblur = function () {
    if(msgField.innerText == "") {
        msgField.innerText = msgVal;
        msgField.style.setProperty("--msg-val", `""`);
    }
}
let sendMsg = document.querySelector(".contact .form .send");
sendMsg.onclick = function() {
    if(nameField.innerText != nameVal) {
        nameField.innerText = nameVal;
    }
    if(mailField.innerText != mailVal) {
        mailField.innerText = mailVal;
    }
    if(msgField.innerText != msgVal) {
        msgField.innerText = msgVal;
    }
    nameField.style.setProperty("--name-val", `""`);
    mailField.style.setProperty("--mail-val", `""`);
    msgField.style.setProperty("--msg-val", `""`);
}