<script setup lang="ts">
import { z } from 'zod';
import { VALUES } from '~~/features/user/domain/value-objects/gender_value_object';
import { Password } from '~~/features/user/domain/value-objects/psw_value_object';
import { phoneRegex } from '~~/features/user/domain/value-objects/value_object_phone';
import { cityRegex } from '~~/features/user/feature/location/domain/value_objects/city_value_object';
import { PostCodeRegex } from '~~/features/user/feature/location/domain/value_objects/postcode_value_object';

const schema = toTypedSchema(z.object({
    username: z.string().min(1),
    email: z.string().email(),
    phone: z.string().regex(phoneRegex),
    gender: z.enum(VALUES),
    password: z.string().min( 8 ).regex( RegExp( /^(?=.*[a-z]).*$/ ))
        .regex( RegExp( /^(?=.*[A-Z]).*$/ ))
        .regex( RegExp( /^(?=.*\d).*$/ ))
        .regex( RegExp( /^(?=.*[$@!?&]).*$/ )),
    confirm: z.string(),
    region: z.string().min(1),
    city: z.string().regex(cityRegex),
    postcode: z.string().regex(PostCodeRegex)
}).refine((data) => data.password === data.confirm))
</script>

<template>
    <div>
        register
    </div>
</template>