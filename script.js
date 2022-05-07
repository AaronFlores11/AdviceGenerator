const d = document,
  $number = d.getElementById("number-advice"),
  $text = d.getElementById("text-content");

const getInfo = async () => {
  let res = await fetch("https://api.adviceslip.com/advice"),
    data = await res.json();
  /*
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
    });*/

  console.log(data);
  $number.textContent = data.slip.id;
  $text.textContent = `"${data.slip.advice}"`;
};

d.addEventListener("DOMContentloaded", getInfo());

d.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.matches(".circle") || e.target.matches("#circle-img")) {
    getInfo();
  }
});
