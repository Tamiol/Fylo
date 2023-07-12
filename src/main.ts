import { setupCounter } from './counter'

// const colors = {
//     Red : "Red",
//     Green : "Green",
//     Blue : "Blue"
// } as const

// type codTyp = keyof typeof colors

// function setColor(parametr : codTyp) {
//     document.querySelector<HTMLDivElement>("#box")?.style.backgroundColor = "red";
// }

// document.getElementById("buttonRed")?.addEventListener("click", () => {setColor(colors.Red)})
// document.getElementById("buttonGreen")?.addEventListener("click", () => {setColor(colors.Green)})
// document.getElementById("buttonBlue")?.addEventListener("click", () => {setColor(colors.Blue)})

// function setText() {
//     let mes = document.querySelector<HTMLInputElement>("#message");

//     if (mes !== null){
//         // message = mes.textContent ? mes.textContent : "";
//         // message = mes.textContent || "";
//         message = mes.value ?? "";
//     }

//     let cos = document.getElementById("text");
//     if (cos !== null){
//         cos.innerHTML = message;
//     }
// }