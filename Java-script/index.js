let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let subject = document.getElementById("subject")
let comment = document.getElementById("comment")
let btn = document.getElementById("btn")



function validate(){
    if(name.value || phone.value || email.value || subject.value || comment.value !== ""){
        
        fetch("https://imgurapi.cyclic.app//post_form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                subject: subject.value,
                comment: comment.value
            })
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        
    }
    else{
        console.log("fields are empty")
    }
}