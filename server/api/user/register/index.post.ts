import { UserRequest } from "~/features/user/application/user_request";
import { service } from "~/server/dependencies/user";


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const dto = new UserRequest(body.id,
        body.username,
        body.email,
        body.password,
        body.phone,
        body.gender, body.place)
    await service.create(dto)
    return {
        statusCode: 200,
    }
})