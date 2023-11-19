export default function MenuItem({ menu }) {
//   console.log(Object.keys(menu).join(","));
  const {name,recipe,image,price} = menu;

  return (
    <div className="flex gap-6">
      <div>
        <div className={`bg-slate-300 overflow-hidden h-16 w-16 rounded-full rounded-tl-none`}>
            <img src={image} className="object-fill" alt="" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">{name} ------------------</h3>
        <p>
          {recipe}
        </p>
      </div>
      <div><span className="text-[#BB8506]">${price}</span></div>
    </div>
  );
}
