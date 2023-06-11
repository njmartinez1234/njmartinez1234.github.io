<template>
    <b-overlay :show="show" spinner-variant="primary" spinner-type="grow" variant="white" spinner-small rounded="sm">
        <slot></slot>
    </b-overlay>
</template>

<script>
export default {
    name: 'OverlayComponent',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>