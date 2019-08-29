{
    let linksPopup = document.querySelectorAll('.ever-popup-btn');

    for (let i = 0; i < linksPopup.length; i++) {
        linksPopup[i].addEventListener('click', function(event) {
            event.preventDefault();
        })
    }
}