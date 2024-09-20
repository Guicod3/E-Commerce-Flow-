function putText(){
    let itemCount = 0
    const title = document.getElementById('inputTitle').value
    while(document.getElementById(itemCount)){
        document.getElementById(`titleResult-${itemCount}`).value = title;

        //Dispara evento para iniciar contagem
        const event = new Event('input', { bubbles: true });
        document.getElementById(`titleResult-${itemCount}`).dispatchEvent(event);
        itemCount++
    }
}

document.getElementById('search').addEventListener('click', putText)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement === document.getElementById('inputTitle')) {
        event.preventDefault();
        putText();
    }
});