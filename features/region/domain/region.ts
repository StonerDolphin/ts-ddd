import { UUID } from "~/features/shared/value_object_uuid";

export class Region {
    private constructor(
        readonly id: UUID,
        readonly name: string,
    ) { }

    static create(id: UUID,
        name: string): Region {
        return new Region(id, name);
    }

    static fromPrimitive(id: string,
        name: string): Region {
        return new Region(
            UUID.fromValue(id),
            name,
        );
    }
}