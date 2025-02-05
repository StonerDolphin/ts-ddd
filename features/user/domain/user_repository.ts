import type {User} from "~~/features/user/domain/user";
import type {Password} from "~~/features/user/domain/value-objects/psw_value_object";
import type {Email} from "~~/features/user/domain/value-objects/email_value_object";

export interface UserRepository {

    register(user: User, password: Password): Promise<void>
    login(email: Email, password: Password): Promise<User>
}
