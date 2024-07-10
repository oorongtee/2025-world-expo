//主版白色新聞欄

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.news-cards');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    let currentTranslateX = 0;
  
    const cardWidth = document.querySelector('.news-card').clientWidth;
    const gap = 10;

    const totalCardsWidth = (cardWidth + gap) * document.querySelectorAll('.news-card').length - gap;
    const containerWidth = cardsContainer.parentElement.clientWidth;
    const maxTranslateX = totalCardsWidth - containerWidth + 400;
  
    rightBtn.addEventListener('click', () => {
        currentTranslateX -= (cardWidth + gap); // Move left
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;

        leftBtn.classList.remove('hidden');

        if (Math.abs(currentTranslateX) >= maxTranslateX) {
            rightBtn.classList.add('hidden');
        } else {
            rightBtn.classList.remove('hidden');
        }
      });
    
      leftBtn.addEventListener('click', () => {
        currentTranslateX += (cardWidth + gap); 
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;
        rightBtn.classList.remove('hidden');

        if (currentTranslateX >= 0) {
          leftBtn.classList.add('hidden');
        }
      });
    
      if (currentTranslateX >= 0) {
        leftBtn.classList.add('hidden');
      }
    });

//Enjoy Pavilions右上角的圖片切換
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slideshow-container .fade');
  let currentIndex = 0;
    
  function showNextSlide() {
    slides[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('show');
  }
    
  setInterval(showNextSlide, 3000);
  });

//Enjoy Pavilions中間的圖片欄位

  document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.enjoy-pavilions-cards');
    const leftBtn = document.querySelector('.enjoy-pavilions-left-btn');
    const rightBtn = document.querySelector('.enjoy-pavilions-right-btn');
    let currentTranslateX = 0;

  
    const cardWidth = document.querySelector('.enjoy-pavilions-card').clientWidth;
    const gap = 10;

    const totalCardsWidth = (cardWidth + gap) * document.querySelectorAll('.enjoy-pavilions-card').length - gap;
    const containerWidth = cardsContainer.parentElement.clientWidth;
    const maxTranslateX = totalCardsWidth - containerWidth + 400;
  
    rightBtn.addEventListener('click', () => {
        currentTranslateX -= (cardWidth + gap); // Move left
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;

        leftBtn.classList.remove('hidden');

        if (Math.abs(currentTranslateX) >= maxTranslateX) {
            rightBtn.classList.add('hidden');
        } else {
            rightBtn.classList.remove('hidden');
        }
      });
    
      leftBtn.addEventListener('click', () => {
        currentTranslateX += (cardWidth + gap); 
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;
        rightBtn.classList.remove('hidden');

        if (currentTranslateX >= 0) {
          leftBtn.classList.add('hidden');
        }
      });
    
      if (currentTranslateX >= 0) {
        leftBtn.classList.add('hidden');
      }
    });
    