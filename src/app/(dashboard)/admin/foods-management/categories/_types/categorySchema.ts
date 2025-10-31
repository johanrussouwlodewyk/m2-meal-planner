import z from "zod";

const categorySchema = z.intersection(
  z.object({
    name: z.string().min(1).max(255),
  }),
  z.discriminatedUnion("action", [
    z.object({ action: z.literal("create") }),
    z.object({ action: z.literal("update"), id: z.number().min(1) }),
  ]),
);

type CategorySchema = z.infer<typeof categorySchema>;

const categoryDefaultValues: CategorySchema = {
  action: "create",
  name: "",
};

export { categorySchema, categoryDefaultValues, type CategorySchema };

/*
type BaseProduct = {
    name: string;
    price: number;
}
type Laptop = {
    type: "laptop";
    cpu: string;
    gpu: string;
}

type Phone = {
    type: "phone"
    camera: string;
}

type Product = BaseProduct & (Laptop | Phone)
const newProduct:Product = {
    name: "Laptop something",
    price: 100,
    type: "laptop"
}
    */
/*
const userSchema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    age: z.coerce.number().min(18).max(99),
})

type UserSchema = z.infer<typeof userSchema>
*/
