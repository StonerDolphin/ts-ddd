import type {UserRepository} from "~~/features/user/domain/user_repository";
import {UserMapper} from "~~/features/user/application/user_mapper";
import type {UserRequest} from "~~/features/user/application/user_request";
import {Password} from "~~/features/user/domain/value-objects/psw_value_object";

export class CreateUser{
    constructor(readonly userDao: UserRepository) {}

    async execute(userDto: UserRequest): Promise<void> {
        const password = Password.create(userDto.password)
        const user = UserMapper.toDomain(userDto)
        await this.userDao.register(user, password)
    }
}