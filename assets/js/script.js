/* ------------------------------  MODAL ------------------------------ */
const openBtn = document.querySelector('#open-button');
const closeBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');

// Open modal
openBtn.addEventListener('click', () => {
    modal.showModal();
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.setAttribute('close','');

    modal.addEventListener('animationend', () => {
        modal.removeAttribute('close');
        modal.close();
    },{once:true})
})

modal.addEventListener('click', (e) => {
    if (e.target.nodeName === 'DIALOG') {
        modal.close();
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        modal.close();
    }
});
/* ------------------------------  MODAL END ------------------------------ */