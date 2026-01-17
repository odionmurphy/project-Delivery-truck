

const input = document.querySelector("input") as HTMLInputElement | null;
const button = document.querySelector("button") as HTMLInputElement | null;
const list = document.querySelector("list") as HTMLInputElement | null;


list?.addEventListener("click", function (event: MouseEvent) {
  const target = event.target as HTMLElement;
  console.dir(target);

    if (target.tagName === "BUTTON" || target.tagName === "LI") {
    target.parentElement?.remove();
  }
});

  


const h1 = document.querySelector("h1")!;
setInterval(() => {
    h1.innerText = new Date().toLocaleTimeString();
}, 1000);

const h2 = document.querySelector("h2")!;
h2.addEventListener("click", () => {
    alert("You clicked the heading!");
});
