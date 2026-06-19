import {createServer} from 'node:http'
import { createApplication } from './app/index.js'

async function main(){
    try{
        const server = createServer(createApplication())
        const PORT: number = 8000
        server.listen(PORT,()=>{
            console.log("server is running at port 8000")
        })
    }catch(error){
        console.log(`Error starting http server`);
        throw error;
    }
}
main()
