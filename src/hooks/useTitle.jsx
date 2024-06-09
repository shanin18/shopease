import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ShopEase`;
  }, [title]);
};

export default useTitle;
