export default function Button({children, onClick}) {
  return (
    <button onClick={onClick} className="btn  uppercase btn-ghost border-b-4 border-b-black">
      {children}
    </button>
  );
}
