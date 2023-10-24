var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
}

//Modal Box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
	btn.onclick = (e) => {
		itemDetailModal.style.display = 'flex';
		e.preventDefault();
	};
});

// Klik tombol close modal

document.querySelector('.modal .close-icon').onclick = (e) => {
	itemDetailModal.style.display = 'none';
	e.preventDefault();
};

//klik diluar modal

window.onclick = (e) => {
	if (e.target === itemDetailModal) {
		itemDetailModal.style.display = 'none';
	}
};