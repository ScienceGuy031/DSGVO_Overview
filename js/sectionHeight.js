var detailsElements = document.querySelectorAll('details');

detailsElements.forEach(function (details) {
    details.addEventListener('toggle', function () {
        var sectionId = details.getAttribute('data-section-id');
        var section = document.getElementById(sectionId);
        var vh = window.innerHeight * 0.01;
        
        questionsDiv = section.querySelector('.questions');
        chapterDiv = section.querySelector('.title');

        if (questionsDiv.clientHeight > chapterDiv.clientHeight) {
            section.style.height = (questionsDiv.clientHeight + 50 * vh) + 'px';
        }
        else {
            section.style.height = (chapterDiv.clientHeight + 50 * vh) + 'px';
        }

    });
});