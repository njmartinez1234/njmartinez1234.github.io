<template>
    <div class="operation-txt" style="text-align: center; padding: 3%;">
        <h1 style="font-size: 2vw">{{ result }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        result: {
            type: [Number, String],
        },
        operation_id: {
            type: Number,
        },
    },
};
</script>
