import Swal from "sweetalert2";
import Button from "../../components/Button";
import useAddCart from "../../hooks/useAddCart";

export default function MenuCard({ data }) {
  // console.log(Object.keys(data).join(','))
  const { name, recipe, image,  price } = data;

  const {data:addCart, isSuccess, mutate} = useAddCart()

  const handleAddCart = () => {
    const review = {...data}
    delete review._id;
    mutate(review)
    
  };


  if(isSuccess && addCart.insertedId){
     Swal.fire({
      icon: 'success',
      title: 'Added Review',
      text: 'Added Review Successful!'
    })
  }

  return (
    <div className="card w-96 mx-auto md:w-auto bg-base-100 relative shadow-xl">
      <div className="p-2 bg-black bg-opacity-70 max-w-fit absolute right-2 top-2 text-white font-semibold rounded">
        ${price}
      </div>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <Button onClick={handleAddCart} className="btn btn-primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
