<template>
    <div class="border rounded m-2" style="background-color:#424549;">
        <div class="d-flex py-2" :class="history.length > 0 ? 'border-bottom' : null" style="flex-direction: row">
            <div class="mt-2">
                <div class="total title" style="white-space: nowrap; min-width: 5em">
                    {{ 'Total: ' + rolls.reduce((a, b) => a + b[1], 0) }}
                </div>

            </div>
            <div class="d-flex flex-start flex-wrap flex-grow-1" style="flex-direction: row">
                <button v-for="([dice_type, roll], index) in rolls" class="btn btn-transparent"
                        @click.prevent="remove(index)">
                <span class="roll">{{ 'd' + dice_type }}
                    <span :key="index" class="">{{ roll + '         ' }}</span>
                </span>
                </button>
            </div>
            <div class="mt-2 justify-content-end align-items-center flex-shrink-0" style="flex-direction: row">
                <button class="btn btn-outline-danger" @click="clearRolls()">Clear</button>
            </div>
        </div>
        <div v-for="(entry, history_index) in history" class="py-2 d-flex" style="flex-direction: row">
            <div class="mt-2">
                <div class="total title" style="white-space: nowrap; min-width: 5em">
                    {{ 'Total: ' + entry.reduce((a, b) => a + b[1], 0) }}
                </div>
                <!--                <button class="btn btn-outline-danger m-2" @click="clearHistoryEntry(history_index)">Remove</button>-->
            </div>
            <div class="d-flex flex-start flex-wrap flex-grow-1" style="flex-direction: row">
                <button v-for="([dice_type, roll], die_index) in entry" class="btn btn-transparent"
                        @click.prevent="removeRollFromHistory(history_index, die_index)">
                <span class="roll">{{ 'd' + dice_type }}
                    <span :key="die_index" class="mr-1">{{ roll + '         ' }}</span>
                </span>
                </button>
                <!--                <icon name="trash" class="ml-2" @click="clearHistoryEntry(history_index)"/>-->
<!--                <MyIcon name="file"/>-->
            </div>
            <div class="mt-2 justify-content-end align-items-center flex-shrink-0" style="flex-direction: row">
                <button class="btn btn-outline-danger m-2" @click="clearHistoryEntry(history_index)">Remove</button>
            </div>
        </div>
        <!--        <span>test</span>-->
        <!--        <div>test</div>-->
    </div>
</template>

<script>
import MyIcon from "@/Components/MyIcon.vue";

export default {
    name: "RollLog",

    components: {
        MyIcon,
    },

    props: {
        rolls: {required: true, type: Array},
    },

    data() {
        return {
            history: [],
        };
    },

    methods: {
        remove(index) {
            this.rolls.splice(index, 1);
        },

        clearRolls() {
            this.history.unshift(this.rolls);

            this.$emit('clear')
        },

        clearHistoryEntry(index) {
            this.history.splice(index, 1);
        },

        removeRollFromHistory(history_index, die_index) {
            this.history[history_index].splice(die_index, 1);
            if (this.history[history_index].length === 0) {
                this.clearHistoryEntry(history_index);
            }
        },
    },
}
</script>

<style scoped>
.roll {
    display: flex;
    flex-direction: column;
}

.total {
    /*margin-right: 2em;*/
}
</style>
