import type { PlaceDto } from "~/features/user/feature/location/application/place_dto";

export class UserResponse {
    constructor(public id: string,
        public username: string,
        public email: string,
        public phone: string,
        public gender: string,
        public place: PlaceDto) {

    }
}