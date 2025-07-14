"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const closeUp = document.querySelector(".close"),
        popup = document.getElementById("popup"),
        overlay = document.querySelector(".overlay"),
        btn = document.querySelectorAll(".btn"),
        btnActive = document.querySelector('.btn'),
        cardWrapper = document.querySelector('.fifthSectionCardsWrapper'),
        fitnes = document.querySelector('.fitnes'),
        run = document.querySelector('.run'),
        triatlon = document.querySelector('.triatlon'),
        buyNow = document.querySelectorAll('.buyNow'),
        partAboveTheLine = document.querySelectorAll(".partAboveTheLine");

  closeUp.addEventListener("click", () => {
    popup.style.display = "none";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      popup.style.display = "none";
    }
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  btn.forEach((element) => {
    element.addEventListener("click", () => {
      btn.forEach(el => el.classList.remove("active"));
      element.classList.add("active");
    });
  });
  btnActive.classList.toggle("active", true);

  function addPopupListeners() {
    const openPopupButtons = document.querySelectorAll(".book-Now, .callNow");
    openPopupButtons.forEach(button => {
      button.addEventListener("click", () => {
        popup.style.display = "flex";
      });
    });
  }

  addPopupListeners();
  handleBuyButtons();


  fitnes.addEventListener('click', () => {
    cardWrapper.innerHTML = `
      <div class="card">
          <div class="partAboveTheLine">
              <div class="partOneAboveTheLine">
                <img src="./img/watch.png" alt="" width="200px">
                <h2>Пульсометр Polar FT1</h2>
                <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
                <a href="#" class="details">ПОДРОБНЕЕ</a>
              </div>
              <div class="partTwoAboveTheLine">
                <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
                <a href="#" class="goBack">НАЗАД</a>
              </div>
          </div>
          <div class="partUnderTheLine">
              <div class="prise">
                  <span class="oldPrise">4 750 руб.</span>
                  <span class="newPrise">4 500 руб.</span>
              </div>
              <button class="buyNow">КУПИТЬ</button>
          </div>
      </div>
      <div class="card">
          <div class="partAboveTheLine">
              <div class="PartOneAboveTheLine">
                <img src="./img/watch.png" alt="" width="200px">
                <h2>Пульсометр Suunto M2</h2>
                <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
                <a href="#" class="details">ПОДРОБНЕЕ</a>
              </div>
              <div class="partTwoAboveTheLine">
                <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
                <a href="#" class="goBack">НАЗАД</a>
              </div>
          </div>
          <div class="partUnderTheLine">
              <div class="prise">
                  <span class="oldPrise">6 690 руб.</span>
                  <span class="newPrise">6 641 руб.</span>
              </div>
              <button class="buyNow">КУПИТЬ</button>
          </div>
      </div>
      <div class="card">
          <div class="partAboveTheLine">
              <div class="PartOneAboveTheLine">
                <img src="./img/watch.png" alt="" width="200px">
                <h2>Пульсометр Polar FT4</h2>
                <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
                <a href="#" class="details" >ПОДРОБНЕЕ</a>
              </div>
              <div class="partTwoAboveTheLine">
                <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
                <a href="#" class="goBack" >НАЗАД</a>
              </div>
          </div>
          <div class="partUnderTheLine">
              <div class="prise">
                  <span class="oldPrise">6 690 руб.</span>
                  <span class="newPrise">6 641 руб.</span>
              </div>
              <button class="buyNow">КУПИТЬ</button>
          </div>
      </div>
      <div class="card">
        <div class="partAboveTheLine">
          <div class="PartOneAboveTheLine">
            <img src="./img/watch.png" alt="" width="200px">
            <h2>Пульсометр Polar FT1</h2>
            <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
            <a href="" class="details" >ПОДРОБНЕЕ</a>
          </div>
          <div class="partTwoAboveTheLine">
            <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
            <a href="#" class="goBack">НАЗАД</a>
          </div>
        </div>
        <div class="partUnderTheLine">
          <div class="prise">
            <span class="oldPrise">4 750 руб.</span>
            <span class="newPrise">4 500 руб.</span>
          </div>
          <button class="buyNow">КУПИТЬ</button>
        </div>
      </div>
      <div class="card">
        <div class="partAboveTheLine">
            <div class="PartOneAboveTheLine">
              <img src="./img/watch.png" alt="" width="200px">
              <h2>Пульсометр Suunto M2</h2>
              <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
              <a href="#" class="details" >ПОДРОБНЕЕ</a>
            </div>
            <div class="partTwoAboveTheLine">
              <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
              <a href="#" class="goBack" >НАЗАД</a>
            </div>
        </div>
        <div class="partUnderTheLine">
          <div class="prise">
            <span class="oldPrise">6 690 руб.</span>
            <span class="newPrise">6 641 руб.</span>
          </div>
          <button class="buyNow">КУПИТЬ</button>
        </div>
      </div>
      <div class="card">
        <div class="partAboveTheLine">
          <div class="PartOneAboveTheLine">
            <img src="./img/watch.png" alt="" width="200px">
            <h2>Пульсометр Polar FT4</h2>
            <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
            <a href="#" class="details">ПОДРОБНЕЕ</a>
          </div>
          <div class="partTwoAboveTheLine">
            <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
            <a href="#" class="goBack" >НАЗАД</a>
          </div>
        </div>
        <div class="partUnderTheLine">
          <div class="prise">
            <span class="oldPrise">6 690 руб.</span>
            <span class="newPrise">6 641 руб.</span>
          </div>
          <button class="buyNow">КУПИТЬ</button>
        </div>
      </div>`;
    addPopupListeners();
    handleBuyButtons();
  });


  run.addEventListener("click", () => {
    cardWrapper.innerHTML = `
      <div class="card">
          <div class="partAboveTheLine">
              <div class="partOneAboveTheLine">
                <img src="./img/watch.png" alt="" width="200px">
                <h2>Пульсометр Polar FT1</h2>
                <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
                <a href="#" class="details" >ПОДРОБНЕЕ</a>
              </div>
              <div class="partTwoAboveTheLine">
                <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
                <a href="#" class="goBack" >НАЗАД</a>
              </div>
          </div>
          <div class="partUnderTheLine">
              <div class="prise">
                  <span class="oldPrise">4 750 руб.</span>
                  <span class="newPrise">4 500 руб.</span>
              </div>
              <button class="buyNow">КУПИТЬ</button>
          </div>
      </div>
      <div class="card">
          <div class="partAboveTheLine">
              <div class="partOneAboveTheLine">
                <img src="./img/watch.png" alt="" width="200px">
                <h2>Пульсометр Polar FT1</h2>
                <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
                <a href="#" class="details">ПОДРОБНЕЕ</a>
              </div>
              <div class="partTwoAboveTheLine">
                <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
                <a href="#" class="goBack" >НАЗАД</a>
              </div>
          </div>
          <div class="partUnderTheLine">
              <div class="prise">
                  <span class="oldPrise">4 750 руб.</span>
                  <span class="newPrise">4 500 руб.</span>
              </div>
              <button class="buyNow">КУПИТЬ</button>
          </div>
      </div>`;
    addPopupListeners();
    handleBuyButtons();
  });

  triatlon.addEventListener('click', () => {
    cardWrapper.innerHTML = `
      <div class="card">
          <div class="partAboveTheLine">
              <div class="partOneAboveTheLine">
                <img src="./img/watch.png" alt="" width="200px">
                <h2>Пульсометр Polar FT1</h2>
                <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
                <a href="#" class="details">ПОДРОБНЕЕ</a>
              </div>
              <div class="partTwoAboveTheLine">
                <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
                <a href="#" class="goBack" >НАЗАД</a>
              </div>
          </div>
          <div class="partUnderTheLine">
              <div class="prise">
                  <span class="oldPrise">4 750 руб.</span>
                  <span class="newPrise">4 500 руб.</span>
              </div>
              <button class="buyNow">КУПИТЬ</button>
          </div>
      </div>
      <div class="card">
          <div class="partAboveTheLine">
              <div class="partOneAboveTheLine">
                <img src="./img/watch.png" alt="" width="200px">
                <h2>Пульсометр Polar FT1</h2>
                <span>Для первых шагов в тренировках, основанных на сердечном ритме</span>
                <a href="#" class="details" >ПОДРОБНЕЕ</a>
              </div>
              <div class="partTwoAboveTheLine">
                <p>Здесь будет подробная информация о товаре, характеристики и описание.</p>
                <a href="#" class="goBack">НАЗАД</a>
              </div>
          </div>
          <div class="partUnderTheLine">
              <div class="prise">
                  <span class="oldPrise">4 750 руб.</span>
                  <span class="newPrise">4 500 руб.</span>
              </div>
              <button class="buyNow">КУПИТЬ</button>
          </div>
      </div>`;
    addPopupListeners();
    handleBuyButtons();
  });


  const buyModal = document.getElementById('buyModal');
  const closeBuy = document.querySelector('.close-buy');
  const productTitle = document.querySelector('.product-title');
  const productPrice = document.querySelector('.product-price span');

  function handleBuyButtons() {
    const buyNowButtons = document.querySelectorAll('.buyNow');
    buyNowButtons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        const title = card.querySelector('h2')?.innerText || '';
        const price = card.querySelector('.newPrise')?.innerText || '';

        productTitle.innerText = title;
        productPrice.innerText = price;

        buyModal.style.display = 'flex';
      });
    });
  }

  closeBuy.addEventListener('click', () => {
    buyModal.style.display = 'none';
  });
  buyModal.addEventListener('click', (e) => {
    if (e.target === buyModal) {
      buyModal.style.display = 'none';
    }
  });

  detailsScroll.forEach(element, () => {
    
  })

  document.addEventListener("click", (e) => {
  if (e.target.classList.contains("details") || e.target.classList.contains("goBack")) {
    e.preventDefault();
    const card = e.target.closest(".card");
    const inner = card.querySelector(".partAboveTheLine");
    if (inner) {
      if (inner.style.transform === "translateX(-50%)") {
        inner.style.transform = "translateX(0)";
      } else {
        inner.style.transform = "translateX(-50%)";
      }
    }
  }
});


});
