
import {service} from "~~/server/utils/dependencies/user";


export default defineEventHandler( async ( event ) => {
    const body = await readBody(event) 
    const user = await service.login(body.email, body.password)
    console.log(user)
    return {
        statusCode: 200,
    }
})