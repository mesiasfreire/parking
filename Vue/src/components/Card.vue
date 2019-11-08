<template>
        <div class="card mb-2">
            <div class="row no-glutters">
                <div class="col-sm-2">
                    <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </div>
                <div class="col-sm-8">
                <div class="card-body">
                    <slot></slot>
                </div>
            </div>
            </div>
            
        </div>
</template>

<script>
    export default {
        name: 'Card',

        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>