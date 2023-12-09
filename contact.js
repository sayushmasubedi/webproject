function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    // Display success message 
    alert('Message sent successfully!');
  }
  var feedback = document.getElementById("feed");
feedback.addEventListener("click",function(){
feedback.style.backgroundColor="black";
feedback.style.color="white";     
})