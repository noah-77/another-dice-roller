<template>
    <v-icon :name="name"/>
</template>

<script>
import 'vue-awesome/icons';
import Icon from "vue-awesome/components/Icon.js";

export default {
    name: "MyIcon",

    components: {
        'v-icon': Icon,
    },

    props: {
        name: {required: true, type: String},
    },
}
</script>

<style scoped>

</style>
