
const BACKGROUND_MUSIC_FILE = 'rick.mp3';
const CLICK_SOUND_FILE = 'click.mp3';
const BOUNCE_ANIMATION_DURATION = '0.5s';


window.addEventListener('load', function() {

  const backgroundMusic = new Audio(BACKGROUND_MUSIC_FILE);
  backgroundMusic.loop = true;
  const clickSound = new Audio(CLICK_SOUND_FILE);

  document.querySelector('div p').style.fontSize = '20px';
  document.querySelector('.jumbotron h1').style.color = '#00FF00';

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.animation = `bounce ${BOUNCE_ANIMATION_DURATION} ease`;
    });
    link.addEventListener('animationend', () => {
      link.style.animation = '';
    });
    link.addEventListener('mouseleave', () => {
      link.style.animation = '';
    });
  });

  const clickableElements = document.querySelectorAll('button, a, input[type="button"]');
  clickableElements.forEach(element => {
    element.addEventListener('click', () => {
      clickSound.play();
    });
  });


  const toggleButton = document.createElement('button');
  toggleButton.classList.add('toggle-button');
  toggleButton.innerHTML = '<i class="fa fa-play"></i>';
  document.body.appendChild(toggleButton);

 
  let isMusicPlaying = false;
  backgroundMusic.pause();
  toggleButton.style.backgroundColor = 'green';


  toggleButton.style.position = 'fixed';
  toggleButton.style.right = '20px';
  toggleButton.style.bottom = '20px';

  toggleButton.addEventListener('click', () => {
    if (isMusicPlaying) {
      backgroundMusic.pause();
      isMusicPlaying = false;
      toggleButton.style.backgroundColor = 'green';
      toggleButton.innerHTML = '<i class="fa fa-play"></i>';
      clickSound.play();
    } else {
      backgroundMusic.play();
      isMusicPlaying = true;
      toggleButton.style.backgroundColor = 'red';
      toggleButton.innerHTML = '<i class="fa fa-pause"></i>';
      clickSound.play();
    }
  });


  const welcomeMessage = "Reconnaissance is the process of gathering information about a target, such as a website or network, to understand its structure, vulnerabilities, and potential attack vectors. Reconnaissance tools are used to collect information about a target, such as its IP address, DNS information, and web technologies in use.</p>";
  let i = 0;
  const typeWriter = () => {
    const messageElement = document.querySelector('div p');
    if (i < welcomeMessage.length) {
      messageElement.textContent += welcomeMessage.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  };
  typeWriter();
});
