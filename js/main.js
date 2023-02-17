const videoFile = document.getElementById('video-file'),
videoButton = document.getElementById('video-button'),
videoIcon = document.getElementById('video-icon')

function playPause(){ 
if (videoFile.paused){
  // Play video
  videoFile.play()
  // We change the icon
  videoIcon.classList.add('fa-solid fa-pause')
  videoIcon.classList.remove('fa-solid fa-play')
}
else {
  // Pause video
  videoFile.pause(); 
  // We change the icon
  videoIcon.classList.remove('fa-solid fa-pause')
  videoIcon.classList.add('fa-solid fa-play')

}
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
// Video ends, icon change
videoIcon.classList.remove('fa-solid fa-pause')
videoIcon.classList.add('fa-solid fa-play')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)





/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
        origin: 'left',
        distance: '50px',
        duration: 2000,
        reset: true
    });
    
sr.reveal(`.about__text ,.home__data , .social-icons  , .content-discover  , .photo1 , .pragraph_sub`, {
        interval: 200
    })

    const sr1 = ScrollReveal({
      origin: 'right',
      distance: '15px',
      duration: 2000,
      reset: true
  });
  
sr.reveal(`.imgess , .carousel-inner , .home__info , .photo2 , .form `, {
      interval: 200
  })
  const sr2 = ScrollReveal({
    origin: 'top',
    distance: '15px',
    duration: 2000,
    reset: true
});

sr.reveal(`.section-title , .er-content , .section  , .box  , .cole , .text-foot , .video_content`, {
    interval: 200
})



/* DARK LIGHT THEME */ 
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const nav = document.querySelector('.navbar');
const nav1 = document.querySelector('.navbar-brand');
const navtoggle = document.querySelector('.navbar-toggler');
const links = document.querySelector('.links');
const links2 = document.querySelector('.links2');
const links3 = document.querySelector('.links3');
const links4 = document.querySelector('.links4');


toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');

  if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.background = 'white';
      body.style.color = 'black';
      body.style.transition = '2s';
      h2.style.color = '#393939';
      nav.style.background = '#fff';
      nav1.style.color = '#393939';
      navtoggle.style.color = '#393939';
      links.style.color = '#393939';
      links2.style.color = '#393939';
      links3.style.color = '#393939';
      links4.style.color = '#393939';
      
  }else{
      body.style.background = 'black';
      body.style.color = 'white';
      body.style.transition = '2s';
      h2.style.color = 'white';
      nav.style.background = 'black';
      nav1.style.color = 'white';
      navtoggle.style.color = 'white';
      links.style.color = 'white';
      links2.style.color = 'white';
      links3.style.color = 'white';
      links4.style.color = 'white';
    
  } 
});