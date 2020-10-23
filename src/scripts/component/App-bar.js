class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <nav class="sidenav" id="mobile-nav" >
                <a href="#" class="brand" aria-label="logo">
                    Hunger App
                    <label class="fas fa-times"></label>
                </a>
                <ul aria-label="navigasi" tabindex="0">
                    <li><i class="fas fa-home"></i><a href="#/home">Beranda</a></li>
                    <li><i class="fas fa-heart"></i><a href="#/favorite">Favorit</a></li>
                    <li><i class="fas fa-question"></i><a href="https://www.linkedin.com/in/muhammadrizki1/">Tentang kami</a></li>
                </ul>
            </nav>
            <nav class="top-nav" id="desktop-nav">
                <div class="container">
                    <button class="burger" tabindex="0" aria-label="button navigasi">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="logo">
                        <a href="#">
                            Hunger App
                        </a>
                    </div>
                    <ul id="top-hidden">
                        <li><a href="#/home"  class="nav-link" >Home</a></li>
                        <li><a href="#/favorite" class="nav-link">Favorites</a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/muhammadrizki1/"  class="nav-link">About Us</a></li>
                    </ul>
                    <div>
                            <label  class="theme-switch">
                                <input type="checkbox" id="check">
                            </label>
                        </button>
                    </div>
                </div>
            </nav>`;
  }
}

customElements.define('app-bar', AppBar);
