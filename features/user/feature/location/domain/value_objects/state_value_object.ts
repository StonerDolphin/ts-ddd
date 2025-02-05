import {InvalidStateException} from "~~/features/user/feature/location/domain/Exceptions/state_exception";

export class State{
    private constructor(readonly value: string) {}

    static create(value: string): State {
        if (!/^[A-Z]{2}$/.test(value)) {
            throw new InvalidStateException();
        }
        return new State(value);
    }
}
