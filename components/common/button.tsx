import React, { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  className,
  variant = "primary",
  size = "large",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        "py-[10px] py-2 rounded-sm text-14px font-semibold hover:shadow-lg",
        variant === "primary" &&
          "border-navy border-2 text-navy hover:bg-black",
        variant === "secondary" &&
          "border-white border-2 text-primary hover:bg-grey",
        size === "large" && "px-10 md:px-[80px] ",
        size === "small" && "px-4",
        className
      )}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
