<template>
    <div>
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>

<script>
export default {
    props: {
        limit: {
            type: Number,
            required: true,
        },
        offset: {
            type: Number,
            required: true,
        },
        totalItems: {
            type: Number,
            required: true,
        },
    },
    computed: {
        currentPage() {
            return Math.ceil((this.offset + 1) / this.limit);
        },
        totalPages() {
            return Math.ceil(this.totalItems / this.limit);
        },
    },
    methods: {
        previousPage() {
            if (this.currentPage > 1) {
                this.$emit('page-change', this.offset - this.limit);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('page-change', this.offset + this.limit);
            }
        },
    },
};
</script>
