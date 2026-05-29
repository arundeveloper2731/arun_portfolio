 const menuIcon = document.getElementById("menu-icon");
                    const navbar = document.getElementById("navbar");

                    menuIcon.onclick = () => {
                        navbar.classList.toggle("active");
                    }
                        // aboute me see more button 
                   function toggleContent(){

                    let moreText = document.getElementById("moreText");
                    let btn = document.getElementById("btn");

                    if(moreText.style.display === "block"){

                        moreText.style.display = "none";
                        btn.innerHTML = "See More";

                    }else{

                        moreText.style.display = "block";
                        btn.innerHTML = "See Less";

                    }

                }
                     // skill 
const buttons = document.querySelectorAll(".skill-btn");
    const contents = document.querySelectorAll(".skill-content");

    function showContent(event, id) {

        contents.forEach(content => {
            content.classList.remove("active-content");
        });

        buttons.forEach(button => {
            button.classList.remove("active");
        });

        document.getElementById(id)
            .classList.add("active-content");

        event.currentTarget.classList.add("active");
    }
                    
    const scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// cotact me



 const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit",{

        method:"POST",

        body:formData

    });

    const result = await response.json();

    if(result.success){

        alert("Message Sent Successfully");

        form.reset();

    }else{

        alert("Failed To Send");

    }

});

//b2562e94-ed85-4af0-af7a-b4886c265c34