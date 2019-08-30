{
    let linksPopup = document.querySelectorAll('.ever-popup-btn');

    for (let i = 0; i < linksPopup.length; i++) {
        linksPopup[i].addEventListener('click', function (event) {
            event.preventDefault();
        })
    }
}

{
    let popups = document.querySelectorAll('.danger__var');

    for (let i = 0; i < popups.length; i++) {
        popups[i].addEventListener('mouseover', function (event) {
            let content = popups[i].querySelector('.danger__show');
            content.classList.add('fade');
        });

        popups[i].addEventListener('mouseout', function (event) {
            let content = popups[i].querySelector('.danger__show');
            content.classList.remove('fade');
        });
    }
}
