window.onload = function() {
  const changeBGDiv = document.querySelector('.changeBG-div');
  const changeFontColorDiv = document.querySelector('.changeFontColor-div');
  const changeFontSizeDiv = document.querySelector('.changeFontSize-div');
  const changeLineHeightDiv = document.querySelector('.changeLineHeight-div');
  const changeFontFamilyDiv = document.querySelector('.changeFontFamily-div');
  let buttonsArray = [];

  function createButton(divName, buttonName, addClass) {
    let button = document.createElement('button');
    button.innerText = buttonName;
    button.className = 'button ' + addClass;
    buttonsArray.push(button)
    divName.appendChild(button);
  }

  createButton(changeBGDiv,'Background Color 1', 'bgcolor1');
  createButton(changeBGDiv,'Background Color 2', 'bgcolor2');
  createButton(changeBGDiv,'Background Color 3', 'bgcolor3');
  createButton(changeFontColorDiv,'Font Color 1', 'fontcolor1');
  createButton(changeFontColorDiv,'Font Color 2', 'fontcolor2');
  createButton(changeFontColorDiv,'Font Color 3', 'fontcolor3');
  createButton(changeFontSizeDiv,'Font Size 1', 'fontsize1');
  createButton(changeFontSizeDiv,'Font Size 2', 'fontsize2');
  createButton(changeFontSizeDiv,'Font Size 3', 'fontsize3');
  createButton(changeLineHeightDiv,'LineHeight 1', 'lineheight1');
  createButton(changeLineHeightDiv,'LineHeight 2', 'lineheight2');
  createButton(changeLineHeightDiv,'LineHeight 3', 'lineheight3');
  createButton(changeFontFamilyDiv,'FontFamily 1', 'fontfamily1');
  createButton(changeFontFamilyDiv,'FontFamily 2', 'fontfamily2');
  createButton(changeFontFamilyDiv,'FontFamily 3', 'fontfamily3');

  function changeBGColor(buttonClass, color) {
    let button = document.querySelector(buttonClass);
    button.addEventListener('click', function() {
      let body = document.querySelector('.website-body');
      body.style.backgroundColor = color;
    });
  }

  changeBGColor('.bgcolor1', 'blue');
  changeBGColor('.bgcolor2', 'green');
  changeBGColor('.bgcolor3', 'yellow');

  function changeFontColor(buttonClass, color) {
    let button = document.querySelector(buttonClass);
    button.addEventListener('click', function() {
      let body = document.querySelector('.website-body');
      body.style.color = color;
    })
  }

  changeFontColor('.fontcolor1', 'white');
  changeFontColor('.fontcolor2', 'red');
  changeFontColor('.fontcolor3', 'purple');

  function changeFontSize(buttonClass, fontSize) {
    let button = document.querySelector(buttonClass);
    button.addEventListener('click', function() {
      let mainText = document.querySelector('.main-content-text');
      mainText.style.fontSize = fontSize;
    })
  }

  changeFontSize('.fontsize1', '1.05em');
  changeFontSize('.fontsize2', '1.10em');
  changeFontSize('.fontsize3', '1.15em');

  function changeLineHeight(buttonClass, lineHeight) {
    let button = document.querySelector(buttonClass);
    button.addEventListener('click', function() {
      let mainText = document.querySelector('.main-content-text');
      mainText.style.lineHeight = lineHeight;
    })
  }

  changeLineHeight('.lineheight1', '25px');
  changeLineHeight('.lineheight2', '30px');
  changeLineHeight('.lineheight3', '35px');

  function changeFontFamily (buttonClass, fontFamily) {
    let button = document.querySelector(buttonClass);
    button.addEventListener('click', function() {
      let body = document.querySelector('.website-body');
      body.style.fontFamily = fontFamily;
    })
  }

  changeFontFamily ('.fontfamily1', 'Arial');
  changeFontFamily ('.fontfamily2', 'Courier');
  changeFontFamily ('.fontfamily3', 'monospace');

  console.log(localStorage);
  localStorage.removeItem('Arial');
  localStorage.removeItem('Courier');
  localStorage.removeItem('body.style.fontFamily');
  localStorage.removeItem('body.style.font-family');
}