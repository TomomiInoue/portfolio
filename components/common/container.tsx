interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Container({ children, style }: ContainerProps) {
  return (
    <div
      className="relative mx-auto w-full px-[16px] sm:px-[80px]"
      style={style}
    >
      {children}
    </div>
  );
}
