export default function FilledButton({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: any;
}) {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " flex w-full bg-green text-white font-agrandir md:text-base text-[0.875rem] md:p-2 p-1 rounded-lg"
      }
    >
      <span className="mx-auto">{text}</span>
    </button>
  );
}
