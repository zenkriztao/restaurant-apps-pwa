class HeroKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="jumbotron">
                <div class="image-content">
                    <picture>
                        <source type="image/webp"
                                srcset="./images/heros/hero-image-small.webp"
                                media="(max-width: 600px)">
                        <source type="image/webp"
                                srcset="./images/heros/hero-image-large.webp"
                                media="(min-width: 601px)">
                        <img src='./images/heros/hero-image.jpg' class="low-res-image lazyload" alt="jumbotron" role="presentation"
                            srcset="./images/heros/hero-image-small.jpg 480w, ./images/heros/hero-image-large.jpg 800w"
                            sizes="(max-width: 600px) 480px, 800px">
                    </picture>
                </div>
                <div class="container">
                    <div class="content-wrapper">
                        <h2>Yuk Cari Restaurant Favorit Kamu</h2>
                        <div class="scroll">
                        </div>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define('my-hero', HeroKu);
