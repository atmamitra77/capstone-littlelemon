function Hero() {
  return (
    <section className="grid-hero hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">Little Lemon</h1>
        <h2 className="sr-only">Mediterranean Restaurant</h2>
        <p className="lead">
          Fresh Mediterranean dishes, crafted daily with seasonal ingredients.
        </p>
        <a className="button" href="/reservations">
          Reserve a table
        </a>
      </div>

      {/* Optional Bild (füge /assets/hero.jpg hinzu) */}
      <div className="hero__media">
        <img
          src="/assets/hero.png"
          alt="A plate of Mediterranean food at Little Lemon"
          loading="eager"
        />
      </div>
    </section>
  );
}

export default Hero;
