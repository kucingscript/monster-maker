const faceBtn = document.getElementById("face-btn");
const colorBtn = document.getElementById("color-btn");
const hornsBtn = document.getElementById("horns-btn");
const tailBtn = document.getElementById("tail-btn");

const docRoot = document.querySelector(":root");

const colors = [
  "#42aaff",
  "#52b69a",
  "tomato",
  "#ffba08",
  "#7fc8f8",
  "#ff9770",
  "#724cf9",
  "#00f5d4",
];

let [counter1, counter2, counter3, counter4] = Array(4).fill(0);

const setCounter = (counter, len) => {
  return counter < len - 1 ? counter + 1 : 0;
};

faceBtn.addEventListener("click", () => {
  counter1 = setCounter(counter1, 6);
  document.getElementById("face").setAttribute("src", `face-${counter1}.png`);
});

colorBtn.addEventListener("click", () => {
  counter2 = setCounter(counter2, colors.length);
  docRoot.style.setProperty("--color-monster", colors[counter2]);
});

hornsBtn.addEventListener("click", () => {
  counter3 = setCounter(counter3, colors.length);
  docRoot.style.setProperty("--color-horns", colors[counter3]);
});

tailBtn.addEventListener("click", () => {
  counter4 = setCounter(counter4, colors.length);
  docRoot.style.setProperty("--color-tail", colors[counter4]);
});
