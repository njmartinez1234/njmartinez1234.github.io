<template>
    <div style="text-align: center; padding: 3%;">
        <b-button-group size="lg">
            <b-button v-for="button in buttons" :key="button.id" @click="handleClick(button.symbol, button.id, button.is_arithmetic,button.type)"
                v-b-tooltip.hover:title="button.type">
                {{ button.symbol }}
            </b-button>
        </b-button-group>
    </div>
</template>

<script>
export default {
    props: {
        buttons: {
            type: Array,
            required: true,
        },
    },
    methods: {
        handleClick(operator, opId, isArithmetic,opType) {
            this.$emit("operator-click", operator, opId, isArithmetic, opType);
        },
    },
};
</script>