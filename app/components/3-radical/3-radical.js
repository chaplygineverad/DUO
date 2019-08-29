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
            content.style.cssText = 'display: block;';
        });

        popups[i].addEventListener('mouseout', function (event) {
            let content = popups[i].querySelector('.danger__show');
            content.style.cssText = 'display: none;';
        });
    }
}

{
    let arrows = document.querySelectorAll('.danger__arrow');

    let i = 0;
    function glowing(array){
        for (let i = 0; i < array.length; i++) {
            array[i].style.opacity = 0;
        }
        array[i].style.opacity = 1;
        i++;
        if (i == arrows.length) {
            i = 0;
        }
        setTimeout(glowing(array), 1000);
    }

    glowing(arrows);
}