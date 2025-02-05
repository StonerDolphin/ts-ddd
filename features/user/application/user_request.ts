import type { PlaceDto } from "~~/features/user/feature/location/application/place_dto";

export class UserRequest {
    constructor(public id: string,
        public username: string,
        public email: string,
        public password: string,
        public phone: string,
        public gender: string,
        public place: PlaceDto) {

    }
}