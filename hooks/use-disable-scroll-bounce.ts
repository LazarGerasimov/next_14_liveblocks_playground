import { useEffect } from "react";

export const useDisableScrollBounce = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden", "overscoll-none");

    return () => {
      document.body.classList.remove("overflow-hidden", "overscroll-none")
    };
  }, [])
}