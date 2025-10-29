"use client";
import { Button } from "@/components/ui/button";
import { useCatergories } from "../_services/use-category-queries";
import { useDeleteCategory } from "../_services/use-catergory-mutations";
import { Edit, Trash } from "lucide-react";

const CategoryCards = () => {
  const categoriesQuery = useCatergories();
  const deleteCategoryMutation = useDeleteCategory();

  return (
    <div className="grid grid-cols-4 gap-2">
      {categoriesQuery.data?.map((item) => (
        <div
          className="bg-accent rounde-lg flex flex-col justify-between gap-3 p-6 shadow-md"
          key={item.id}
        >
          <p className="turncate">{item.name}</p>
          <div className="flex gap-1">
            <Button
              className="size-6"
              variant="ghost"
              size="icon"
              onClick={() => {}}
            >
              <Edit />
            </Button>
            <Button
              className="size-6"
              variant="ghost"
              size="icon"
              onClick={() => {
                alert({
                  onConfirm: deleteCategoryMutation.mutate(item.id),
                });
              }}
            >
              <Trash />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CategoryCards };
