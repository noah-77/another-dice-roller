<template>
    <div class="m-1 px-3 pt-4 pb-2">
        <!-- add a global toggler here for d6 representation vs -sided representation -->
        <!--        https://thenounproject.com/icon/icosahedron-407537/-->
        <!--        https://tacticaltokens.com/dice-roller/-->
        <div class="d-flex justify-content-around flex-wrap">
            <button v-for="types in dice_types" :key="types.value" class="btn btn-primary mb-1" style="color:#7289da"
                    @click.prevent="rollDice(types.value)">
                <span class="mr-1 text-white">{{ 'd' + types.value }}</span>
            </button>
            <!--            <input type="number" class="form-control" style="max-width: 5em" v-model="mod" min="-100000" max="100000">&ndash;&gt;-->
        </div>
        <!--        <div class="d-flex justify-content-end align-items-center mt-2">-->
        <!--            &lt;!&ndash;            <button class="btn btn-secondary" @click.prevent="modifier(mod)">Modifier</button>&ndash;&gt;-->
        <!--            <div>-->
        <!--                Modifier:-->
        <!--            </div>-->
        <!--            <input type="number" class="form-control" style="max-width: 5em" v-model="mod" min="-100000" max="100000">-->
        <!--        </div>-->
    </div>
</template>

<script>
export default {
    name: "DiceBar",

    props: {},

    data() {
        return {
            dice_types: [
                {value: 2, img: false},
                {value: 4, img: false},
                {value: 6, img: false},
                {value: 8, img: false},
                {value: 10, img: false},
                {value: 20, img: false},
                {value: 50, img: false},
                {value: 100, img: false},
            ],
            mod: 0,
        };
    },

    watch: {
        mod(mod) {
            this.$emit('mod', mod)
        }
    },

    methods: {
        rollDice(dice_type) {
            // console.log(dice_type);
            // return a random number between 1 and dice_type
            let roll = Math.floor(Math.random() * dice_type) + 1;
            console.log(roll);
            this.$emit('roll', [dice_type, roll])
        },
    },
}
</script>

<style scoped>

</style>
