
import type { Gender, PrismaClient } from "@prisma/client";
import type { UserRepository } from "../domain/user_repository";
import { User } from "../domain/user";
import { Password } from "../domain/value-objects/psw_value_object";
import { Email } from "../domain/value-objects/email_value_object";
import bcrypt from "bcrypt"
import { Place } from "~/features/user/feature/location/domain/place";

export class UserPrismaData implements UserRepository {
    constructor(readonly repo: PrismaClient) { }

    async register(user: User, password: Password): Promise<void> {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password.value, salt)
        await this.repo.user.create({
            data: {
                id: user.id.value,
                username: user.username,
                email: user.email.value,
                phone: user.phone.value,
                gender: user.gender.value as Gender,
                place: {
                    connect: {
                        id: user.place.id.value
                    }
                },
                password: hashedPassword
            }
        })
    }

    async login(email: Email, password: Password): Promise<User> {
        const user = await this.repo.user.findUniqueOrThrow({
            where: {
                email: email.value
            },
            include: {
                place: {
                    region: true
                }
            }
        })
        const isPasswordValid = await bcrypt.compare(password.value, user.password)
        if (!isPasswordValid) throw new Error("Invalid password")
        return User.fromPrimitive(
            user.id,
            user.username,
            user.email,
            user.phone, user.gender,
            Place.fromPrimitive(user.place.id, user.place.city, user.place.state, user.place.postcode))
    }
}