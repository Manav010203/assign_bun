const server = Bun.serve({
    port:3000,
    routes:{
        "/health": {
            GET : ()=>  Response.json({"status":"ok","timestamp":new Date},{status:200})
        }
    }
});
console.log(`listening on ${server.port}`)
