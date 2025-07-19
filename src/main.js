// fake commit
import "./style.css";

document.querySelector("#app").innerHTML = `
 <div class="container mx-auto">
      <h1 class="text-3xl font-bold m-1.5">بازی سنگ، کاغذ، قیچی</h1>
      <h3>روی دکمه (آموزش بازی) بزنید تا نحوه بازی را یاد بگیرید</h3>
      <div class="Tutorial-btn-container">
        <button id="Tutorial-button" type="button">
          آموزش بازی
        </button>
      </div>
      <div class="Tutorial-content-container hidden gap-1.5">
        <p class="Tutorial-content">
          <p class="">🔹 نحوه بازی : </p>
          شما (بازیکن) یکی از گزینه‌های
          سنگ ، کاغذ یا قیچی را انتخاب می‌کنید. کامپیوتر هم به صورت تصادفی یک
          گزینه را انتخاب می‌کند. برنامه مقایسه می‌کند و برنده را اعلام می‌کند!
        </p>
        <p class="Tutorial-content">
          <p class="">🔹 قانون برنده شدن : </p>
          سنگ 🪨 می‌شکند قیچی ✂️ را (سنگ برنده است). قیچی ✂️ می‌برد کاغذ 📄 را
          (قیچی برنده است). کاغذ 📄 می‌پوشاند سنگ 🪨 را (کاغذ برنده است). اگر هر
          دو یکسان انتخاب کنند، مساوی می‌شود!
        </p>
        <p class="Tutorial-content">
          <p class="">🔹 نکته :</p>
          این بازی کاملاً تصادفی است و شانس برنده شدن شما ۵۰-۵۰ است! 😉 ▶️ حالا
          امتحان کنید و ببینید چه کسی برنده می‌شود! 🚀
        </p>
      </div>
      <div id="game">
        <button id="btn" data-player-choise="Rock">
          سنگ
        </button>
        <button id="btn" data-player-choise="Paper">
          کاغذ
        </button>
        <button id="btn" data-player-choise="Scissors">
          قیچی
        </button>
      </div>
      <div id="result" class="hidden">
        <h2 class="text-2xl font-bold">نتیجه بازی:</h2>
        <p id="result-text"></p>
      </div>
    </div>
`;
const TutorialContent = document.getElementsByClassName(
  "Tutorial-content-container"
)[0];
document.querySelector("#Tutorial-button").addEventListener("click", () => {
  // console.log("Clicked");

  if (TutorialContent.classList.contains("hidden")) {
    TutorialContent.classList.remove("hidden");
    TutorialContent.classList.add("flex");
    // console.log("Tutorial content show");
  } else {
    TutorialContent.classList.add("hidden");
    TutorialContent.classList.remove("flex");
    // console.log("Tutorial content hidden");
  }
});

const result_container = document.getElementById("result");
const result_text = document.getElementById("result-text");
let Player_Choice = null;
let Bot_Choice = null;

const Rock = document.querySelector('[data-player-choise="Rock"]');
const Paper = document.querySelector('[data-player-choise="Paper"]');
const Scissors = document.querySelector('[data-player-choise="Scissors"]');

Rock.addEventListener("click", () => handleChoice("Rock"));
Paper.addEventListener("click", () => handleChoice("Paper"));
Scissors.addEventListener("click", () => handleChoice("Scissors"));

function handleChoice(playerChoice) {
  Player_Choice = playerChoice;

  handleBotChoice();

  determineWinner();
}

function handleBotChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  Bot_Choice = choices[randomIndex];
}

function determineWinner() {
  result_container.classList.remove("hidden");

  if (Player_Choice === Bot_Choice) {
    result_text.innerText = "مساوی شد!";
    return;
  }

  const rules = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  if (rules[Player_Choice] === Bot_Choice) {
    result_text.innerText = "شما برنده شدید!";
  } else {
    result_text.innerText = "کامپیوتر برنده شد!";
  }
}
