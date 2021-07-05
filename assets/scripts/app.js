const entryText = document.getElementById('entry-text');
const addMovieModal = document.getElementById('add-modal');
//const addMovieBtn = document.getElementById('add-movie-btn'); = if we selecting it by ID = //
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
//another way to connect the element although can be used any other way as above
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const usrInputs = addMovieModal.querySelectorAll('input');
//const usrDescription = document.getElementById('text-area');
const movieList = document.getElementById('movie-list');

// = Array to collect the added movies
const movies = [];

// = Update UI
const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = 'block';
  } else {
    entryText.style.display = 'none';
  };
};

// = Rendering movie list on the screen
const renderMovieList = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  movieList.append(newMovieElement);
}

// = Clear the inputs function
const clearMovieInputs = () => {
  for (const usrInput of usrInputs) {
    usrInput.value = '';
  };
  //usrDescription.value = '';
};

// = Backdrop functions
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// = Toggle Btn Functions
const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  addMovieModal.style.backgroundColor = "whitesmoke";
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};

// = Cancel Add Movie btn Function
const cancelAddMovieBtnClick = () => {
  toggleMovieModal();
  clearMovieInputs();
}

// = Confirm Add Movie btn Function
const confirmAddMovieBtnClick = () => {
  const userTitleValue = usrInputs[0].value;
  const userImgValue = usrInputs[1].value;
  const userRatingValue = usrInputs[2].value;
  //const userDescriptionValue = usrDescription.value;

  //check if there has value, clean empty spaces and check the raiting
  if(userTitleValue.trim() === '' || 
    userImgValue.trim() === '' ||
    //userDescriptionValue.trim() === '' ||
    userRatingValue.trim() === '' || 
    +userRatingValue < 1 || 
    +userRatingValue > 5) {
    alert('You need to enter a title, image, description and rating (between 1 and 5)')
    return;
  }

  //collect the user inputs into an object, push them to the array, close the modal and clear the inputs
  const newMovie = {
  title: userTitleValue,
  image: userImgValue,
  rating: userRatingValue,
  //description: userDescriptionValue
  };
  movies.push(newMovie);
  toggleMovieModal();
  clearMovieInputs();
  renderMovieList(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

// == Add EventListener to the Add Movie btn and changing classes == //
startAddMovieBtn.addEventListener('click', toggleMovieModal);

//== Add EventListener to the backdrop == //
backdrop.addEventListener('click', backdropClickHandler);

//== Add EventListener to the Cancel button
cancelAddMovieBtn.addEventListener('click', cancelAddMovieBtnClick);

//== Add EventListener to the Confirm button
confirmAddMovieBtn.addEventListener('click', confirmAddMovieBtnClick);