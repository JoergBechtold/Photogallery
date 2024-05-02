let images = [
  'img/img-1.jpg',
  'img/img-2.jpg',
  'img/img-3.jpg',
  'img/img-4.jpg',
  'img/img-5.jpg',
  'img/img-6.jpg',
  'img/img-7.jpg',
  'img/img-8.jpg',
  'img/img-9.jpg',
  'img/img-10.jpg',
  'img/img-11.jpg',
  'img/img-12.jpg',
  'img/img-13.jpg',
  'img/img-14.jpg',
  'img/img-15.jpg',
  'img/img-16.jpg',
  'img/img-17.jpg',
  'img/img-18.jpg',
  'img/img-19.jpg',
  'img/img-20.jpg',
  'img/img-21.jpg',
  'img/img-22.jpg',
  'img/img-23.jpg',
  'img/img-24.jpg',
  'img/img-25.jpg',
  'img/img-26.jpg',
  'img/img-27.jpg',
  'img/img-28.jpg',
  'img/img-29.jpg',
  'img/img-30.jpg',
  'img/img-31.jpg',
  'img/img-32.jpg',
  'img/img-33.jpg',
  'img/img-34.jpg',
];

/* Animation nur einmal ausführen */
let modalOpen = false;

/* Die ersten 17 Bilder Laden */
function loadAllPicture() {
  let imgContainer = document.getElementById('img-container');

  for (let i = 0; i < 17; i++) {
    imgContainer.innerHTML += generateHtmlAllPicture(i);
  }
}

/* Generiert HTML für die ersten 17 Bilder */
function generateHtmlAllPicture(i) {
  return /*HTML*/ `
  <div class="imageBox">
    <img onclick="showPictureBig(${i})" src="${images[i]}">
  </div>
  `;
}

/*Button zeigt die nächsten 17 Bilder  */
function showMorePictures() {
  let imgContainer = document.getElementById('img-container');
  for (let i = 17; i < 34; i++) {
    imgContainer.innerHTML += generateHtmlAllPicture(i);
  }

  hideBtn();
}

/* Show More Button wird nach drücken nicht mehr angezeigt */
function hideBtn() {
  document.getElementById('btn-container').classList.add('d_none');
}

/* Zeigt das Bild groß */
function showPictureBig(i) {
  noSroll();
  displayFlex();

  let showPictureBig = document.getElementById('show-picture-big');
  showPictureBig.innerHTML = generateHtmlBigPicture(i);

  addAnimatePicture();

  /* Generiert HTML für das große Bild */
  function generateHtmlBigPicture(i) {
    return /*HTML*/ `
  <div id="picture-big-content" class="picture_big_content">
            <div class="container_arrow_left">
              <button onclick="closeBigPicture()" class="close_big_pitcture"><img src="icons/xmark-solid.svg" alt="Schließen" /></button>
              <button onclick="clickPictureLeft(${i})" id="arrow-btn-left" class="arrow_btn_left"><img src="icons/chevron-left-solid.svg" alt="angle links" /></button>
            </div>
            <div class="container_picture_center">
            <img  src="${images[i]}">
            </div>
            <div class="container_arrow_right">
              <div class="icons_right_container">
                <img src="icons/share-nodes-solid.svg" alt="Teilen" />
                <img src="icons/sliders-solid.svg" alt="Regler" />
                <img src="icons/magnifying-glass-solid.svg" alt="Suchen" />
                <img src="icons/info-solid.svg" alt="Info" />
                <img src="icons/star-solid.svg" alt="Favorit" />
                <img src="icons/trash-can-solid.svg" alt="Mülleimer" />
                <img src="icons/ellipsis-vertical-solid.svg" alt="Menü" />
              </div>
              <button onclick="clickPictureRight(${i})" id="arrow-btn-right" class="arrow_btn_right"><img src="icons/chevron-right-solid.svg" alt="angle rechts" /></button>
            </div>
          </div>
    `;
  }
  if (i == 0) {
    addDisplayNoneArrowBtnLeft();
  }
  if (i == images.length - 1) {
    addDisplayNoneArrowBtnRight();
  }
}

/* Vorheriges Bild nach Links KLicken */
function clickPictureLeft(i) {
  i--;
  showPictureBig(i);
  removeAnimate();
}

/* Vorheriges Bild nach Rechts KLicken */
function clickPictureRight(i) {
  i++;
  showPictureBig(i);
  removeAnimate();
}

/* Hintergrund soll nicht mehr scrollbar sein, wenn großes Bild angezeigt wird */
function noSroll() {
  document.getElementById('body').classList.add('no_scroll');
}

/* Großes Bild Schließen und Body wieder scrollbar machen */
function closeBigPicture() {
  document.getElementById('show-picture-big').classList.add('d_none');
  document.getElementById('body').classList.remove('no_scroll');
  removeAnimate();
}

/* D_none wird entzogen */
function displayFlex() {
  document.getElementById('show-picture-big').classList.remove('d_none');
}

/* Animation hinzufügen zum Großen Bild */
function addAnimatePicture() {
  document.getElementById('picture-big-content').classList.add('animate');
}

/* D_none wird rechten pfeil btn hinzugefügt */
function addDisplayNoneArrowBtnRight() {
  document.getElementById('arrow-btn-right').classList.add('d_none');
}

/* D_none wird linken pfeil btn hinzugefügt */
function addDisplayNoneArrowBtnLeft() {
  document.getElementById('arrow-btn-left').classList.add('d_none');
}

/* Klasse animate entfernen*/
function removeAnimate() {
  document.getElementById('picture-big-content').classList.remove('animate');
}
