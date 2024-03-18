export default function OutlinedButton({
  text,
  className,
  color,
  hex,
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
        " flex w-full border-2 border-" +
        (hex ? `[${hex}]` : color) +
        " text-" +
        (hex ? `[${hex}]` : color) +
        " font-agrandir md:text-base text-[0.875rem] md:p-2 p-1 rounded-lg"
      }
    >
      <span className="mx-auto">{text}</span>
    </button>
  );
}
