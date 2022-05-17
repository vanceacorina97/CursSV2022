import Product from "../Product";

const Exercitiu1 = () => {
  return (
    <div className="exercitiu">
      <div>Exercitiu 1 - Produse Alimentare</div>
      <div className="d-flex">
        <Product
          categorie="Dulciuri"
          categorieColor="red"
          nume="Corn cu ciocolata"
          pret="2.00lei"
        />
        <Product categorieColor="yellow" nume="Sosete" pret="5.00lei" />
        <Product nume="Bratara" pret="14.00lei" />
      </div>
    </div>
  );
};

export default Exercitiu1;
