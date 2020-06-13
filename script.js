let root = document.documentElement;
let mode = "light";

function toggleMode() {
  if (mode == "light") {
    root.style.setProperty(
      "--background",
      "linear-gradient(hsl(232, 19%, 15%) 30%, hsl(230, 17%, 14%) 30%)"
    );
    root.style.setProperty("--colorMain", "white");
    root.style.setProperty("--colorSub", "hsl(228, 34%, 66%)");
    root.style.setProperty("--cardBG", "hsl(228, 28%, 20%)");
    root.style.setProperty("--cardBGhover", "hsl(228, 22%, 29%)");
    root.style.setProperty(
      "--toggle",
      "linear-gradient(to right,#aeb3cb,#84bee5,#14cce6,#00d7c4,#3eda82)"
    );
    root.style.setProperty("--toggleFill", "hsl(230, 17%, 14%)");
    document.getElementById("toggle").style.left = "30px";
    mode = "dark";
    document.getElementById("toggle-mode").textContent = "Dark Mode";
  } else {
    root.style.setProperty(
      "--background",
      "linear-gradient(hsl(225, 100%, 98%) 30%, white 30%)"
    );
    root.style.setProperty("--colorMain", "hsl(230, 17%, 14%)");
    root.style.setProperty("--colorSub", "hsl(228, 12%, 44%)");
    root.style.setProperty("--cardBG", "hsl(227, 47%, 96%)");
    root.style.setProperty("--cardBGhover", "hsl(227, 28%, 91%)");
    root.style.setProperty(
      "--toggle",
      "linear-gradient(to right, #378fe6, #00a9f0, #00bfde, #00cfb6, #3eda82)"
    );
    root.style.setProperty("--toggleFill", "white");
    document.getElementById("toggle").style.left = "1px";
    mode = "light";
    document.getElementById("toggle-mode").textContent = "Light Mode";
  }
}

document.getElementById("toggle-back").addEventListener("click", toggleMode);
