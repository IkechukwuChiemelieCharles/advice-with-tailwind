const advNum = document.querySelector("span");
const adviceText = document.querySelector(".adviceText");
const diceCont = document.querySelector(".diceCont");

// let sum = 0;
diceCont.addEventListener("click", function () {
  console.log("click");

  adviceText.textContent = `Loading....`;

  advApi();
});

function advApi() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (res) {
      if (!res.ok) {
        throw new Error(
          (adviceText.textContent = `there was an error ${res.status}`)
        );
      }
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      adviceText.textContent = `"${data.slip.advice}"`;

      advNum.textContent = data.slip.id;
    })
    .catch(function (err) {
      adviceText.textContent = err.message;
      adviceText.style.color = "red";
    });
}
advApi();
