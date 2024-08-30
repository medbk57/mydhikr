//  --------------------  HEDAER ON SCROOL  --------------------  //

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

//  --------------------  SELECT MENU  --------------------  //

const selectMenu = document.querySelector(".select-menu");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelectorAll(".option");
const btnText = document.querySelector(".btn-text");

selectBtn.addEventListener("click", () => {
    selectMenu.classList.toggle("show");
});

options.forEach(function (option) {
    option.addEventListener("click", () => {
        let selctedOption = option.innerText;
        btnText.innerHTML = selctedOption;

        selectMenu.classList.remove("show")
    });
});

// Hide the menu when clicking outside
document.addEventListener("click", (event) => {
    if (!selectMenu.contains(event.target)) {
        selectMenu.classList.remove("show");
    }
});

//  --------------------  CONFIRM BTN  --------------------  //

const confirmBtn = document.getElementById("confirm");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
let counter = document.querySelector(".counter");

confirmBtn.addEventListener("click", () => {
    let dhikr = document.querySelector(".select-btn").innerText;
    let nbrDhikr = document.getElementById("nbrDhikr").value;

    if (dhikr === "اختر الذكر") {
        alert("يرجى اختيار الذكر.");
        return;
    }
    if (nbrDhikr <= 0) {
        alert("يرجى إدخال عدد صحيح أكبر من 0.");
        return;
    }

    document.getElementById("dhikr").innerHTML = "الذكر : " + dhikr;
    document.getElementById("goal").innerHTML = "الهدف : " + nbrDhikr;
    counter.innerHTML = nbrDhikr;
    startBtn.innerHTML = dhikr;

    nbrClicks = nbrDhikr;
    startBtn.disabled = false;
    startBtn.style.backgroundColor = '#179BAE';
});

//  --------------------  START BTN  --------------------  //

startBtn.addEventListener("click", () => {
    if (nbrClicks > 0) {
        nbrClicks--;
        counter.textContent = nbrClicks;
    }
    if (nbrClicks == 0) {
        startBtn.disabled = true; 
        startBtn.style.backgroundColor = 'gray';
    }
});

//  --------------------  RESET BTN  --------------------  //

resetBtn.addEventListener("click", () => {
    btnText.textContent = "اختر الذكر"
    nbrDhikr.value = "";
    counter.innerHTML = "0";
    startBtn.innerHTML = "اضغط للبدا"
    document.getElementById("dhikr").innerHTML = "الذكر : ";
    document.getElementById("goal").innerHTML = "الهدف : ";
    startBtn.style.backgroundColor = '#179BAE';
});

//  --------------------  DARK MODE  --------------------  //

const toggleButton = document.querySelector('.moon'); 

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.aya').classList.toggle('dark-mode');
    document.querySelector('.select-menu').classList.toggle('dark-mode');
    document.querySelectorAll('footer .social-media a').forEach(function (link) {
        link.classList.toggle('dark-mode');
    });
    
    toggleButton.classList.toggle('bx-sun');
});
