<template>
    <div class="text-gray-400">
        <div class="row justify-content-center mt-4 mb-1 text-center">
            <span class="display-4">Another Dice Roller</span>
        </div>
        <div class="row justify-content-center mb-4 text-center">
            <small class="text-sm">A simple app to roll dice.</small>
        </div>
        <div class="row justify-content-center">
            <dice-bar class="col-5" @roll="recordRoll" @mod="recordMod"/>
        </div>
        <div class="row justify-content-center">
            <roll-log class="col-5" :rolls="rolls" :mod="mod" @clear="clearRolls"/>
<!--            <div class="col-3 border">-->
<!--                <select>-->
<!--                    <option>2-sided</option>-->
<!--                    <option>4-sided</option>-->
<!--                    <option>6-sided</option>-->
<!--                    <option>8-sided</option>-->
<!--                    <option>10-sided</option>-->
<!--                    <option>12-sided</option>-->
<!--                    <option>20-sided</option>-->
<!--                    <option>50-sided</option>-->
<!--                    <option>100-sided</option>-->
<!--                </select>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
import DiceBar from "@/Components/DiceBar.vue";
import RollLog from "@/Components/RollLog.vue";

export default {
    components: {
        DiceBar,
        RollLog,
    },

    data() {
        return {
            rolls: [],
            mod: 0,
            saved: {},
        }
    },

    mounted() {
        this.saved.sd = 'yo'
    },

    methods: {
        recordRoll(roll) {
            this.rolls.push(roll)
        },

        recordMod(mod) {
            this.mod = mod
        },

        clearRolls() {
            this.rolls = []
        }
    }
}
</script>

<style scoped>

</style>
