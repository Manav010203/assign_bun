import z from "zod";
export const ProdSchema = z.object({
    name:z.string(),
    price:z.number().min(1)
})