import type {UserRepository} from "~/features/user/domain/user_repository";
import type {User} from "~/features/user/domain/user";
import {Email} from "~/features/user/domain/value-objects/email_value_object";
import {Password} from "~/features/user/domain/value-objects/psw_value_object";

export class LoginUser {
    constructor(readonly repo: UserRepository) {
    }
    async excute(email: string, password: string): Promise<User> {
        const validEmail = Email.create(email)
        const validPassword = Password.create(password)
        return await this.repo.login(validEmail, validPassword)
    }
}