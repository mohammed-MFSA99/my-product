function toggleVideo() {
    let video = document.getElementById("video");
    let playIcon = document.getElementById("play-icon");
    let pauseIcon = document.getElementById("pause-icon");
    let btnText = document.getElementById("video-btn-text");

    if(video.paused){
        video.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline-block";
        btnText.textContent = "إيقاف الفيديو";
    } else {
        video.pause();
        playIcon.style.display = "inline-block";
        pauseIcon.style.display = "none";
        btnText.textContent = "مشاهدة الفيديو";
    }
}

document.getElementById("fullyear").innerHTML = new Date().getFullYear();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();