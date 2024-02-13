export default function Bar({ text }: { text: string }) {
  return (
    <div className="flex w-full bg-green py-2 px-4 font-semibold tracking-wider text-white text-[1.2rem] font-agrandir">
      {text}
    </div>
  );
}
