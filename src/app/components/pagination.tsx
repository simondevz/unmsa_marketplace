export default function Pagination() {
  return (
    <div className="flex w-full font-agrandir">
      <div className="flex mx-auto gap-2">
        <button className="flex border-2 border-green px-4 py-1 text-green rounded">
          <span className="my-auto flex">prev</span>
        </button>
        <button className="flex border-2 border-green px-4 py-1 text-green rounded">
          <span className="my-auto flex">1</span>
        </button>
        <button className="flex border-2 border-green px-4 py-1 text-green rounded">
          <span className="my-auto flex">2</span>
        </button>
        <button className="flex border-2 border-green px-4 py-1 text-green rounded">
          <span className="my-auto flex">3</span>
        </button>
        <button className="flex border-2 border-green px-4 py-1 text-green rounded">
          <span className="my-auto flex">4</span>
        </button>
        <button className="flex border-2 border-green px-4 py-1 text-green rounded">
          <span className="my-auto flex">...</span>
        </button>
        <button className="flex border-2 border-green px-4 py-1 text-green rounded">
          <span className="my-auto flex">next</span>
        </button>
      </div>
    </div>
  );
}
