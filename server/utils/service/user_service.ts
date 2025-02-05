import {CreateUser} from "~~/features/user/application/create_user";
import {UserRequest} from "~~/features/user/application/user_request";
import {LoginUser} from "~~/features/user/application/login_user";
import {User} from "~~/features/user/domain/user";

export class UserService {
    constructor(readonly createUser: CreateUser, readonly loginUser: LoginUser) {}

    async create(userDto: UserRequest): Promise<void> {
      return await this.createUser.execute(userDto)
    }
    async login(email: string, password: string): Promise<User> {
        return await this.loginUser.excute(email, password)
    }
}