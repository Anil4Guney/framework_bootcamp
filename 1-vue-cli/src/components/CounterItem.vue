<template>
  <div class="container-sm">
    <h3 class="mb-2">{{ counter }}</h3>
    <button @click="counter--" class="btn red sm">-</button>
    <button @click="counter++" class="btn green sm">+</button>
  </div>
</template>

<script>
export default {
  name: "CounterItem",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style scoped>
.container-sm {
  padding: 10px;
  text-align: center;
}

button {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  color: white;
  cursor: pointer;
}

.red {
  background-color: #e74c3c;
}

.green {
  background-color: #2ecc71;
}

.sm {
  font-size: 14px;
}
</style>
