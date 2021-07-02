const entryText = document.getElementById('entry-text');
const addMovieModal = document.getElementById('add-modal');
//const addMovieBtn = document.getElementById('add-movie-btn'); = if we selecting it by ID = //
const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive')

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
};

// = Cancel Add Movie btn Function
const cancelAddMovieBtnClick = () => {
  toggleMovieModal();
}

// == Add EventListener to the Add Movie btn and changing classes == //
addMovieBtn.addEventListener('click', toggleMovieModal);

//== Add EventListener to the backdrop == //
backdrop.addEventListener('click', backdropClickHandler);

//== Add EventListener to the Cancel button
cancelAddMovieBtn.addEventListener('click', cancelAddMovieBtnClick);

