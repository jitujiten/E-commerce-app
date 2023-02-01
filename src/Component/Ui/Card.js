import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2 className="title">{props.title}</h2>
      <img className="img-fluid w-50" src={props.imageUrl} alt="color" />
      <div className="btncart">
        <p id="price">Rs/-{props.price}</p>
        <button className="btnofcart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Card;
