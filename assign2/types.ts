import z from "zod"
export const SchemaReq = z.object({
    name:z.string().min(3),
    email:z.email(),
    age:z.optional(z.number().min(18))|| null
})