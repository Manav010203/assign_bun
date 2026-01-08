import {v4 as uuidv4} from 'uuid'
import { SchemaReq } from "./types";

const server = Bun.serve({
    port:3000,
    routes:{
        "/health": {
            GET : ()=>  Response.json({"status":"ok","timestamp":new Date},{status:200})
        },
        "/users":{
            POST : async req=>{
                const body = SchemaReq.safeParse(await req.body?.json());
                if(!body.success){
                    return Response.json({"error":"Validation error message"},{status:400});
                }
                const id = uuidv4();
                return Response.json({"id":id,"name":body.data.name,"email":body.data.email,"age":body.data.age},{status:201});
            }
        }
    }
});
console.log(`listening on ${server.port}`)
