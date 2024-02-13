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
        " flex w-full bg-green text-white font-agrandir p-2 rounded-lg"
      }
    >
      <span className="mx-auto">{text}</span>
    </button>
  );
}
