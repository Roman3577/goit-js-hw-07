const input = document.getElementById(`name-input`);
const span = document.getElementById(`name-output`)
input.addEventListener("input", event => {
    const text = event.currentTarget.value.trim()
    if (text!=="") {
        span.textContent = event.currentTarget.value;
    }
    
       
    
});