interface TagPillProps {
  children: React.ReactNode;
  className?: string;
}

export function TagPill({ children, className = "" }: TagPillProps) {
  return (
    <span
      className={`inline-block text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
