document.addEventListener('DOMContentLoaded', function() {
    var hoverTarget = document.querySelector('.hover-target');
    var tooltiptext = document.querySelector('.tooltiptext');

    hoverTarget.addEventListener('mouseover', function() {
        tooltiptext.style.visibility = 'visible';
    });

    hoverTarget.addEventListener('mouseout', function() {
        tooltiptext.style.visibility = 'hidden';
    });
});
