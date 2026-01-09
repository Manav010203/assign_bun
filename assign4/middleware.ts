import type { NextFunction, Request, Response } from "express";

export const Errorhandler = (err: Error & {statusCode?:number },req:Request,res:Response,next:NextFunction)=>{
    if(res.headersSent){
        return next(err);
    } 
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
            error:{
                message:err.message || "Internal server error",
                name:err.name
            }

        })
    
}