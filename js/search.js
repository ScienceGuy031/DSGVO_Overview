document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchbar");
  const searchResults = document.getElementById("searchresults");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const results = [];
    const searchableElements = document.body.getElementsByTagName("ul");

    for (let i = 0; i < searchableElements.length; i++) {
      if (!searchableElements[i].id) {
        searchableElements[i].id = "searchIndex" + i;
      }
    }


    Array.from(searchableElements).forEach((element) => {
      if (
        element.textContent.toLowerCase().includes(searchTerm) &&
        !element.closest("header")
      ) {
        results.push(element);
      }
    });

    renderResults(results);

    if (searchTerm == ""){
        searchResults.innerHTML= "";
    }

    fixHeight();
  });

  function renderResults(results) {
    searchResults.innerHTML = "";
    results.forEach((result) => {
      const resultLink = document.createElement("a");
      resultLink.href = "#" + result.id;
      const resultElement = document.createElement("div");
      const resultText = document.createElement("p");
      resultText.textContent = result.textContent.slice(0, 200) + "...";
      resultElement.classList.add("searchresult");
      resultElement.classList.add("title");
      resultElement.appendChild(resultText);
      resultLink.appendChild(resultElement);
      searchResults.appendChild(resultLink);
    });

    if (results.length === 0) {
      const noResultsElement = document.createElement("div");
      noResultsElement.textContent = "Keine Ergebnisse gefunden.";
      noResultsElement.classList.add("searchresult");
      noResultsElement.classList.add("title");
      searchResults.appendChild(noResultsElement);
    }
  }

  function fixHeight() {
    const searchSection = document.getElementById("searchsection");

    const searchResults = searchSection.getElementsByClassName("searchresult");
    var contentHeight = 0;
    var vh = window.innerHeight * 0.01;

    Array.from(searchResults).forEach((result) => {
      contentHeight += result.clientHeight + 1 * vh;
    });

    if (searchSection.clientHeight > 100 * vh) {
      searchSection.style.height = 100 * vh + 'px';
    }

    if (contentHeight > 70 * vh) {
      searchSection.style.height = contentHeight + 40 * vh + "px";
    }
  }
});
