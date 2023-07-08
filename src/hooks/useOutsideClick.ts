import { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: Function
): void => {
  const handleClick = (ev: React.MouseEvent<HTMLElement>): void => {
    if (ref.current && !ref.current.contains(<Node>ev!.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick as any, true);

    return () => {
      document.removeEventListener("click", handleClick as any, true);
    };
  });
};

export default useOutsideClick;
