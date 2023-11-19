export default function Button({children}) {
  return (
    <button className="btn  uppercase btn-ghost border-b-4 border-b-black">
      {children}
    </button>
  );
}
