const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);

const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);

const allahAkberDisplay = document.getElementById("allahAkberDisplay");
const allahAkberIncrimentBtn = document.getElementById(
  "allahAkberIncrimentBtn"
);
const allahAkberDecrimentBtn = document.getElementById(
  "allahAkberDecrimentBtn"
);

const resetBtn = document.getElementById("resetBtn");

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAKberInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialValue === 33) {
    return alert("Subhan Allah Complete. Please Fillup anoter one");
  }

  subhanAllahInitialValue += 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

subhanAllahDecrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialValue === 0) {
    return alert("You can't added nagetive value");
  }

  subhanAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});
