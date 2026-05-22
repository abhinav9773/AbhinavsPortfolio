import useFadeIn from "../hooks/useFadeIn";

const FadeIn = ({ children, delay = 0, className = "", style = {} }) => {
  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
