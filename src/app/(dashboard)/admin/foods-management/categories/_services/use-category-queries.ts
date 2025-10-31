import { useQuery } from "@tanstack/react-query";
import { getCategories, getCategory } from "./categoryQueries";
import { useCategoriesStore } from "../_libs/use-category-store";

const useCatergories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
const useCategory = () => {
  const { selectedCategoryId } = useCategoriesStore();
  return useQuery({
    queryKey: ["categories", { selectedCategoryId }],
    queryFn: () => getCategory(selectedCategoryId!),
    enabled: !!selectedCategoryId,
  });
};
export { useCatergories, useCategory };
