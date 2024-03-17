export default function FilledButton({
  text,
  color,
  hex,
  className,
  onClick,
}: {
  text: string;
  color: string;
  hex?: string;
  className?: string;
  onClick?: any;
}) {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " flex w-full bg-" +
        (hex ? `[${hex}]` : color) +
        " text-white font-agrandir md:text-base text-[0.875rem] md:p-2 p-1 rounded-lg"
      }
    >
      <span className="mx-auto">{text}</span>
    </button>
  );
}
