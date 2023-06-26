<template>
    <div>
        <div class="container-fluid bg-gray-lighter py-4 px-2 d-flex"
             style="min-height: 100vh; display:flex; flex-direction: column">
            <app/>
        </div>
    </div>
</template>

<script setup>
import App from "@/Pages/App.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

</script>

<style>
</style>
