/* eslint-disable  
@typescript-eslint/no-unused-vars
 */
import express, { Request, Response } from "express";

interface RootResponse {
  message: string;
}

interface HealthResponse {
  status: string;
}

interface MeResponse {
  name: string;
  age: number;
  email: string;
}

const app = express();
const a: string = "";
app.use(express.json());

app.get("/", (req: Request, res: Response<RootResponse>) => {
  res.json({
    message: "Express TypeScript API is running"
  });
});

app.get("/health", (req: Request, res: Response<HealthResponse>) => {
  res.status(200).json({
    status: "ok"
  });
});
app.get("/me",(req: Request, res: Response<MeResponse>)=>{
    res.status(200).json({
        name:"pranav",
        age:22,
        email:"abc@gmail.com"
    })
})
export default app;
