import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./categoryQueries";

const useCatergories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};

export { useCatergories };
