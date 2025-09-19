function Menu() {
  const specials = [
    {
      id: "salad",
      title: "Greek Salad",
      price: "€ 12.90",
      desc: "Crisp lettuce, olives, feta, and our lemon vinaigrette.",
      img: "/assets/salad.png",
    },
    {
      id: "bruschetta",
      title: "Bruschetta",
      price: "€ 7.50",
      desc: "Grilled bread topped with tomatoes, garlic, and basil.",
      img: "/assets/bruschetta.png",
    },
    {
      id: "dessert",
      title: "Lemon Dessert",
      price: "€ 5.90",
      desc: "Zesty lemon cream with a buttery biscuit base.",
      img: "/assets/dessert.png",
    },
  ];

  return (
    <section className="grid-menu" aria-labelledby="menu-title">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h3 id="menu-title">This Week’s Specials</h3>
        <a className="button" href="/order">
          Order online
        </a>
      </div>

      <ul
        className="menu-list"
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: "1rem",
        }}
      >
        {specials.map((item) => (
          <li key={item.id} className="card">
            <img src={item.img} alt={item.title} loading="lazy" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: "0.5rem",
              }}
            >
              <h4 className="card-title">{item.title}</h4>
              <span className="highlight">{item.price}</span>
            </div>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
