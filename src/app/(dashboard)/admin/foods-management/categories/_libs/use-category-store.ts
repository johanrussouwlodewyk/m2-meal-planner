import { createStore } from "@/lib/createStore";

type State = {
  selectedCategoryId: number | null;
  categoryDialogOpen: boolean;
};

type Actions = {
  updateSelectCategoryId: (id: State["selectedCategoryId"]) => void;
  updatecCategoryDialogOpen: (is: State["categoryDialogOpen"]) => void;
};
type Store = State & Actions;

const useCategoriesStore = createStore<Store>(
  (set) => ({
    selectedCategoryId: null,
    updateSelectCategoryId: (id) =>
      set((state) => {
        state.selectedCategoryId = id;
      }),
    categoryDialogOpen: false,
    updatecCategoryDialogOpen: (is) =>
      set((state) => {
        state.categoryDialogOpen = is;
      }),
  }),
  {
    name: "categories-store",
  },
);

export { useCategoriesStore };
