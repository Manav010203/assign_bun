import { ProdSchema } from "./types";
import {v4 as uuidv4} from "uuid"
export interface PriceInterface{id:string,name:string,price:number}
let products:PriceInterface[]=[]
const server = Bun.serve({
    port:3000,
    routes:{
        "/products/:id":{
        GET: async(req)=>{
            const id = req.params.id;
            if(!id){
                return Response.json({"error":"id not provided"},{status:400});
            }
            if(!products.find((product)=>product.id === id)){
                return Response.json({"error":"product not found"},{status:404})
            }
            const data = products.find((product)=>product.id === id);
            return  Response.json({"data":data},{status:200});
        }
    },
    "/products":{
        POST : async req =>{
            const body = ProdSchema.safeParse(await req.body?.json());
            if(!body.success){
                return Response.json({"error":"wrong schema provided for the product"},{status:400});
            }
            const id = uuidv4();
            const prod:PriceInterface ={
                id:id,
                name:body.data.name,
                price:body.data.price
            }
            products.push(prod);
            return Response.json({"message":"Prodeuct added",data:prod},{status:201});
        }
    }
}
});
console.log(`listening on ${server.port}`)
