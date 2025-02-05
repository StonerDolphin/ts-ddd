import {User} from "~~/features/user/domain/user";
import {UserResponse} from "~~/features/user/application/user_response";
import { PlaceMapper } from "~~/features/user/feature/location/application/place_mapper";

export class UserMapper{

    static toDomain(dto: UserResponse): User{
        return User.fromPrimitive(dto.id, dto.username, dto.email, dto.phone, dto.gender, PlaceMapper.toDomain(dto.place))
    }

    // static fromJson(json: Record<string, any>): UserResponse{
    //     return new UserResponse(json.id, json.username, json.email, json.phone)
    // }
}