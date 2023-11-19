export default function MenuItem({ menu }) {
//   console.log(Object.keys(menu).join(","));
  const {_id,name,recipe,image,category,price} = menu;

  return (
    <div className="flex gap-6">
      <div>
        <div className={`bg-slate-300 overflow-hidden h-16 w-16 rounded-full rounded-tl-none`}>
            <img src={image} className="object-fill" alt="" />
        </div>
      </div>
      <div className="space-y-4">
        <h3>{name} ------------------</h3>
        <p>
          {recipe}
        </p>
      </div>
      <div><span className="text-[#BB8506]">${price}</span></div>
    </div>
  );
}
