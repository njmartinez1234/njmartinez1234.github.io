<template>
    <b-modal id="modal-center" centered v-model="isOpen">
        <p>{{ text }}</p>
    </b-modal>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    computed: {
        isOpen: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
            },
        },
    },
};
</script>

<style>
.modal-header .close {
  display:none;
}
</style>