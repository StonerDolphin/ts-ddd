import {User} from "~~/features/user/domain/user";
import type {UserRepository} from "~~/features/user/domain/user_repository";
import type {Email} from "~~/features/user/domain/value-objects/email_value_object";
import type {Password} from "~~/features/user/domain/value-objects/psw_value_object";
import bcrypt from "bcrypt";

export class UserMemory implements UserRepository {
    users: Array<(User & {password: string})> = []

    async register(user: User, password: Password): Promise<void> {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password.value, salt)
        this.users.push({...user, password: hashedPassword})
        console.log(this.users)
    }

    async login(email: Email, password: Password): Promise<User> {
        const user = this.users
            .find(user => user.email.value === email.value)
        if (!user) throw new Error("User not found")
        const isPasswordValid = await bcrypt.compare(password.value, user.password)
        if (!isPasswordValid) throw new Error("Invalid password")
        console.log(user)
        return user
    }
}