import { test, expect } from "bun:test";

test("HTTP server responds", async () => {
//   const server = Bun.serve({
//     port: 0, // random available port
//     fetch: () => new Response("Hello!"),
//   });
  
  const response = await fetch("http://localhost:3000/products/1");
  expect(await response.json()).toEqual({
    error:"product not found"
  });

  
});

test("HTTP server responds", async () => {
//   const server = Bun.serve({
//     port: 0, // random available port
//     fetch: () => new Response("Hello!"),
//   });
  
const response1 = await fetch("http://localhost:3000/products",{
    method:"POST",
    body:JSON.stringify({message:"hello"})
  })
  expect(await response1.json()).toEqual({
    error:"wrong schema provided for the product"
  })
  
});

test("HTTP server responds", async () => {
//   const server = Bun.serve({
//     port: 0, // random available port
//     fetch: () => new Response("Hello!"),
//   });
  
const response1 = await fetch("http://localhost:3000/users",{
    method:"POST",
    body:JSON.stringify({message:"hello"})
  })
  expect(await response1.json()).toEqual({
    "error":"Validation error message",
  })
  
});

test("HTTP server responds", async () => {
//   const server = Bun.serve({
//     port: 0, // random available port
//     fetch: () => new Response("Hello!"),
//   });
  
const response1 = await fetch("http://localhost:3000/users",{
    method:"POST",
    body:JSON.stringify({message:"hello"})
  })
  expect(await response1.json()).toEqual({
    "error":"Validation error message",
  })
  
});


test("HTTP server responds", async () => {
//   const server = Bun.serve({
//     port: 0, // random available port
//     fetch: () => new Response("Hello!"),
//   });
  
const response1 = await fetch("http://localhost:3000/health")
  expect(await response1.json()).toEqual({
    "error":"Validation error message",
  })
  
});