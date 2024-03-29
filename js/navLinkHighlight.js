window.addEventListener('scroll', highlightNav);

function highlightNav() {
  const currentRegion = [...document.querySelectorAll("section:not([id=''])")]
    .find(e => e.getBoundingClientRect().bottom >= 0)

  if (currentRegion) {
    [...document.querySelectorAll(`a:not([href='#${currentRegion.id}'])`)]
      .forEach(a => a.classList.remove('active'))

    document.querySelector(`a[href='#${currentRegion.id}']`)?.classList.add('active')
  }
}