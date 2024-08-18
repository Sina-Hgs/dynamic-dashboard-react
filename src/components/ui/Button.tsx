interface ButtonProps {
  variant: "primary" | "link" | "pagination";
  onClick?: () => void;
  children?: string | React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

const Button = ({
  variant,
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) => {
  const styleVariants = {
    primary:
      "py-2 rounded-lg w-full text-center bg-action text-md text-lightPrimary hover:opacity-90 disabled:opacity-70 transition-all",
    secondary:
      "py-2 rounded-lg w-full text-center bg-lightPrimary text-md text-darkPrimary hover:opacity-90 disabled:opacity-70 transition-all",
    pagination:
      "py-1 px-1 rounded-lg w-fit text-center bg-action text-md text-lightPrimary hover:opacity-90 disabled:bg-darkPrimary transition-all shadow-sm",
    link: "underline text-action hover:opacity-90 font-semibold",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styleVariants[variant]}
    >
      {children}
    </button>
  );
};

export default Button;
