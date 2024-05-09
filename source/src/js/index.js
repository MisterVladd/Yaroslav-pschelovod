function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll('.photography__btn__item');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  activeButton.classList.add('active');
}


function handleButton1() {
  content.innerHTML = `
  <img src="./img/yaroslav/yaroslav1.jpg" alt="" >
  <img src="./img/yaroslav/yaroslav2.jpg" alt="" >
  <img src="./img/yaroslav/yaroslav3.jpg" alt="" >
  <img src="./img/yaroslav/yaroslav4.jpg" alt="" >
  `;
  setActiveButton(button1);
}

function handleButton2() {
  content.innerHTML = `
  `;
  setActiveButton(button2);
}
function handleButton3() {
  content.innerHTML = `
  `;
  setActiveButton(button3);
}
function handleButton4() {
  content.innerHTML = `
  `;
  setActiveButton(button4);
}

button1.addEventListener("click", handleButton1);
button2.addEventListener("click", handleButton2);
button3.addEventListener("click", handleButton3);
button4.addEventListener("click", handleButton4);

content.innerHTML = `
<img src="./img/yaroslav/yaroslav1.jpg" alt="" >
<img src="./img/yaroslav/yaroslav2.jpg" alt="" >
<img src="./img/yaroslav/yaroslav3.jpg" alt="" >
<img src="./img/yaroslav/yaroslav4.jpg" alt="" >
`;
setActiveButton(button1);
