/* Exercitiul 1 - Crearea unei componente produs care
 sa contina anumite proprietati + cele default */
import PropTypes from "prop-types";

const Product = (props) => {
  return (
    <div
      className="produs-container"
      style={{ backgroundColor: props.categorieColor }}
    >
      <span>{props.categorie}</span>
      <div>
        <h3 className="eticheta">{props.nume}</h3>
        <h2>{props.pret}</h2>
      </div>
    </div>
  );
};

Product.propTypes = {
  categorie: PropTypes.string,
  categorieColor: PropTypes.string,
  nume: PropTypes.string,
  pret: PropTypes.string,
};

Product.defaultProps = {
  categorie: "Diverse",
  categorieColor: "transparent",
  nume: "No name",
  pret: "0",
};
export default Product;
