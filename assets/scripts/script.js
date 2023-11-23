// alert("i am Mili")

//get the form content
var contactForm = document.querySelector("#contactForm")

// console.log(contactForm)
//submit the form using javascript

contactForm.addEventListener('submit', function(e){
    e.preventDefault()
    // alert('i am submitted')

    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var msg = document.querySelector("#message").value

    if(email===''){
        alert("Email is required!")    
    }else if(msg===''){
        console.log({name, email, msg})
        alert("Message is required!");
    }else{
        alert("Message was sent successfully");
        contactForm.reset()
    }
    
})


//navbar to be sticky
window.onscroll = function() {stickyNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//update css version
function cssVersion(page){
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    if(sPage == page){
        var p = document.querySelector("#css-bar")
        alert('ldkfd')
        p.href = 'assets/styles/style.css?v=5495894'
    }
}



