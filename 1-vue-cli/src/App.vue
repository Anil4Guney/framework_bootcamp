<template>
  <div>
    <app-header></app-header>

    <div class="container">
      <h3>Bu benim ilk Vue CLI Uygulamam</h3>
      <p>Bugün component ve Vue CLI konularını görüyoruz.</p>
    </div>
      <!-- CounterItem componentini kullanıyoruz -->
      <counter-item></counter-item>
  </div>
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
import AppHeader from "@/components/appHeader.vue";

export default {
  components: {
    CounterItem,
    AppHeader
  },
};
</script>
