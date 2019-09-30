let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap")
button.addEventListener("click", Doit)
function Doit(): void {
    let textField: HTMLInputElement = <HTMLInputElement>document.getElementById("text")
    let text: string = textField.value
    let selectField: HTMLSelectElement = <HTMLSelectElement>document.getElementById("selecter")
    let selecter: string = selectField.value
    switch (selecter) {
        case "Upper case":
            text = text.toUpperCase()
            break;
        case "Lower case":
            text = text.toLowerCase()
            break;
        case "Do nothing":
            break
    }

    console.log(text)
    let element: HTMLDivElement = <HTMLDivElement>document.getElementById("result");
    element.innerHTML = text;
}
