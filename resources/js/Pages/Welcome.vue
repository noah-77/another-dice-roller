<template>
    <div>
        <!-- add a global toggler here for d6 representation vs -sided representation -->

        <Head title="Another Dice Roller"/>
        <div class="dice-box">
            <select>
                <option>2-sided</option>
                <option>4-sided</option>
                <option>6-sided</option>
                <option>8-sided</option>
                <option>10-sided</option>
                <option>12-sided</option>
                <option>20-sided</option>
                <option>50-sided</option>
                <option>100-sided</option>
            </select>
<!--            <button class="btn btn-white"-->
<!--                    :disabled="page === 1"-->
<!--                    @click.prevent="previous()"-->
<!--                    type="button">-->
<!--                {{'yo'}}-->
<!--            </button>-->
        </div>
<!--        <RenderDice/>-->
    </div>
</template>

<script setup>
import {Head, Link} from '@inertiajs/vue3';
import Dropdown from "@/Components/Dropdown.vue";
import RenderDice from "@/Components/3dRender/RenderDice.vue";

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
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
