// trocarDisplay.ts
export function alternarDisplay(elemento: HTMLElement, visivel?: boolean): void {
    if (visivel !== undefined) {
        elemento.classList.toggle("d-none", !visivel);
        elemento.classList.toggle("d-block", visivel);
    } else {
        elemento.classList.toggle("d-none");
        elemento.classList.toggle("d-block");
    }
}