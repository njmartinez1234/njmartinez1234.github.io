<template>
    <div class="operation-txt" style="text-align: center; padding: 3%;">
        <h1 style="font-size: 2vw">{{ num1 }} {{ operationValue }} {{ num2 }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        num1: {
            type: String,
        },
        num2: {
            type: String,
        },
        operationValue: {
            type: String,
        },
    },
};
</script>
