import {InvalidCityException} from "~~/features/user/feature/location/domain/Exceptions/city_exception";

export const cityRegex = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/
export class City{
    private constructor(readonly value: string) {}

    static create(value: string): City {
        if (!cityRegex.test(value)) {
            throw new InvalidCityException();
        }
        return new City(value);
    }
}
