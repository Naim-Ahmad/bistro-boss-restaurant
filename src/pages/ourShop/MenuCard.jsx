import Button from "../../components/Button";

export default function MenuCard({ data }) {
    // console.log(Object.keys(data).join(','))
    const {_id,name,recipe,image,category,price} = data;
  return (
    <div className="card w-96 mx-auto md:w-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <Button className="btn btn-primary">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
