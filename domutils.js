export function addTextToElement(id, text) {
    const e = document.getElementById(id);
    if(e) {
        e.textContent = text;
    }
}