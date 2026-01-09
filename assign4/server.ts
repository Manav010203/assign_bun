import express,{ type Request, type Response }  from "express"
import { Errorhandler } from "./middleware";

const app = express();

app.use(express.json());

app.get("/check/:id",Errorhandler,async(req:Request,res:Response)=>{
    const user = null;
    if(!user){
        return;
    }
    
})
app.listen(3000);