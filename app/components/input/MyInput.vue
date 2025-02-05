<script lang="ts" setup>
import { cn } from '@/lib/utils';
import type { HtmlHTMLAttributes } from 'vue';

    interface Props {
        
        name: string
        type: "text" | "email" | "password"
        class?: HtmlHTMLAttributes["class"]

    }
    const prop = defineProps<Props>()
    const value = ref("value")
  
</script>

<template>
    <input v-model="value" :type :name :class='[{
        "shadow-xl" : type === "text",
        "border border-black" : type === "text"
    },cn("bg-red-500",prop.class)]'/>
    <div>
        {{ value }}
    </div>
</template>