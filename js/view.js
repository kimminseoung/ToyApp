const Viewheight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
}
window.addEventListener("resize",Viewheight);

disableScroll = () => {
    document.querySelector('body').addEventListener('touchmove', this.removeEvent, { passive: false });
    document.querySelector('body').addEventListener('onclick', this.removeEvent, { passive: false });
    document.querySelector('body').addEventListener('mousewheel', this.removeEvent, { passive: false });
  }

  removeEvent = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  enableScroll = () => {
    document.querySelector('body').removeEventListener('touchmove', this.removeEvent);
    document.querySelector('body').removeEventListener('onclick', this.removeEvent);
    document.querySelector('body').removeEventListener('mousewheel', this.removeEvent);
  }