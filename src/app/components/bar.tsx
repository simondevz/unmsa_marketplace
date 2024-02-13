export default function Bar({ text }: { text: string }) {
  return (
    <div className="flex w-full bg-green py-2 px-4 font-semibold tracking-wider text-white md:text-[1.2rem] text-[0.875rem] rounded-md font-agrandir">
      {text}
    </div>
  );
}
