import  express   from 'express';
import type { Express } from 'express';



export function createApplication(){
    const app = express()

    // middleware 
    app.use(express.json())





    // routes
    app.get('/',(req,res)=>{
        return res.json({message:'welcome to my express server eith drizzle and postgress'})
    })


    return app
}