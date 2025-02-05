<script setup lang="ts">
import { fromTheme } from 'tailwind-merge';
import { z } from 'zod';
import MyInput from '~/components/input/MyInput.vue';
import { VALUES } from '~~/features/user/domain/value-objects/gender_value_object';
import { phoneRegex } from '~~/features/user/domain/value-objects/value_object_phone';
import { cityRegex } from '~~/features/user/feature/location/domain/value_objects/city_value_object';
import { PostCodeRegex } from '~~/features/user/feature/location/domain/value_objects/postcode_value_object';

const validationSchema = toTypedSchema(z.object({
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
}).refine((data) => data.password === data.confirm, {path: ['confirm']}))

const form = useForm({validationSchema})

const onSubmit = form.handleSubmit((VALUES) => {
    console.log(VALUES)
})
const u = ref("string")
</script>

<template>
    <div>
        <MyInput v-model="u" type="text" name="username">
            
        </MyInput>
        
        <form @submit.prevent="onSubmit">

            <Field v-slot="{field}" name="username">
                
                <input v-bind="field" type="text" class="border"/>
                <ErrorMessage name="username"/>
            </Field>

            <Field v-slot="{field}" name="email">
                <input v-bind="field" type="text" class="border"/>
                <ErrorMessage name="email"/>
            </Field>

            <Field v-slot="{field}" name="phone">
                <input v-bind="field" type="text" class="border"/>
                <ErrorMessage name="phone"/>
            </Field>

            <Field v-slot="{field}" name="gender">
                <input v-bind="field" type="text" class="border"/>
                <ErrorMessage name="gender"/>
            </Field>

            <Field v-slot="{field}" name="password">
                <input v-bind="field" type="password" class="border"/>
                <ErrorMessage name="password"/>
            </Field>

            <Field v-slot="{field}" name="confirm">
                <input v-bind="field" type="password" class="border"/>
                <ErrorMessage name="confirm"/>
            </Field>

            <Field v-slot="{field}" name="region">
                <input v-bind="field" type="text" class="border"/>
                <ErrorMessage name="region"/>
            </Field>

            <Field v-slot="{field}" name="city">
                <input v-bind="field" type="text" class="border"/>
                <ErrorMessage name="city"/>
            </Field>

            <Field v-slot="{field}" name="postcode">
                <input v-bind="field" type="text" class="border"/>
                <ErrorMessage name="postcode"/>
            </Field>

            <button type="submit" class="border">
                enviar
            </button>
        </form>
    </div>
</template>