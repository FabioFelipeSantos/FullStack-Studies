interface TableHeaderProps {
  children?: string;
  width?: number;
}

export function TableHeader({ width, ...props }: TableHeaderProps) {
  return (
    <th
      {...props}
      className={
        width
          ? `px-4 py-3 text-sm font-semibold text-left w-[${width}]`
          : "px-4 py-3 text-sm font-semibold text-left"
      }
    />
  );
}
