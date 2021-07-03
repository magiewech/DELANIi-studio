var button = document.getElementById("submit")
button = addEventListener("click",submit)

function submit(event){
    event.preventDefault()
    alert("Thank you for your message")
}