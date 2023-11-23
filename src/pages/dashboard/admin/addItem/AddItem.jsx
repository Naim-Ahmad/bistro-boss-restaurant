import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionHeader from "../../../../components/SectionHeader";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const IMAGE_HOST_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`

export default function AddItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure()

  const handleAddItem = (data) => {
    const imageData = {image: data.image[0]}
    console.log(data);

    axios.post(IMAGE_HOST_URL, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res=> {
      console.log(res.data)
      if(res.data.success){
        const menuItem = {
          ...data,
          image: res.data.data.display_url,
          print: parseFloat(data.price)
        }
        console.log(menuItem)
        axiosSecure.post('/menu', menuItem)
        .then(res=> {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              icon: "success",
              title: `${data.name} successfully added!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch(err=> {
          console.log(err)
        })
      }
    })
    .catch(err=> {
      console.log(err)
    })
    
  };

  return (
    <div className="bg-white">
      <SectionHeader title="ADD AN ITEM" subTitle="---What's new?---" />
      <form
        onSubmit={handleSubmit(handleAddItem)}
        className="bg-[#F3F3F3] p-10 max-w-5xl mx-auto"
      >
        {/* ============= recipe name =============== */}
        <div className="form-control my-5 w-full">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            className={`input input-bordered w-full ${
              errors.name && "input-error"
            }`}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-error font-medium pt-2">
              This field is required
            </p>
          )}
        </div>

        <div className="flex mb-5 gap-3">
          {/* ============= Category =============== */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", {required: true})}
              defaultValue="default"
              className={`select select-bordered ${
                errors.category && "select-error"
              }`}
            >
              <option disabled value="default">
                Pick one
              </option>
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="drinks">Drinks</option>
            </select>
            {errors.category && (
            <p className="text-error font-medium pt-2">
              This field is required
            </p>
          )}
          </div>

          {/* =========== price ============ */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className={`input input-bordered w-full ${
                errors.name && "input-error"
              }`}
              {...register("price", { required: true })}
            />
            {errors.name && (
              <p className="text-error font-medium pt-2">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="my-5">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            placeholder="Recipe Details"
            className={`textarea textarea-bordered  w-full ${errors.recipe && 'textarea-error'}`}
            {...register("recipe", { required: true })}
          ></textarea>
           {errors.recipe && (
            <p className="text-error font-medium pt-2">
              This field is required
            </p>
          )}
        </div>

        <div className="mb-5">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", {required: true})}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-warning">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
