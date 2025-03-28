// export function alternarDisplay(elemento: HTMLElement): void {
//     if (elemento.style.display === "none") {
//         elemento.style.display = "block";
//     } else {
//         elemento.style.display = "none";
//     }
// }


export function alternarDisplay(elemento: HTMLElement): void {
    elemento.classList.toggle('d-none');
    elemento.classList.toggle('d-block');
}