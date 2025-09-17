<template>
    <li class="d-felx justify-content-between align-items-center">
        <span>{{ item.text }}</span>
        <button @click="$emit('delete-tod0-item', item)" class="sm red">Sil</button>
    </li>
</template>

<script>

    export default {
        props : [ "item" ]
    };

</script>