import {InvalidCityException} from "~/features/user/feature/location/domain/Exceptions/city_exception";

export class City{
    private constructor(readonly value: string) {}

    static create(value: string): City {
        if (!/^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/.test(value)) {
            throw new InvalidCityException();
        }
        return new City(value);
    }
}
