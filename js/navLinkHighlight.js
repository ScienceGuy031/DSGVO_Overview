window.addEventListener('scroll', highlightNav);

function highlightNav() {
  const currentRegion = [...document.querySelectorAll("section:not([id=''])")]
    .find(e => e.getBoundingClientRect().top >= 0)

  if (currentRegion) {
    window.location.hash = `#${currentRegion.id}`;

    [...document.querySelectorAll(`a:not([href='#${currentRegion.id}'])`)]
      .forEach(a => a.classList.remove('active'))

    document.querySelector(`a[href='#${currentRegion.id}']`)?.classList.add('active')
  }
}