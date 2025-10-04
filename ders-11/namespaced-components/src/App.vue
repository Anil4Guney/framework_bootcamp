<script setup>

//import Input from './components/Form/Input.vue';
//import Label from './components/Form/Label.vue';
//import Select from './components/Form/Select.vue';
import * as Form from "./components/form-components";


</script>



<template>
  <!--
  <Label>
    Başlık
    <Input/>
  </Label>
  <Label>
    Katagori
    <Select/>
  </Label>
  -->

  <Form.Label>
    Başlık
    <Form.Input/>
  </Form.Label>
  <Form.Label>
    Katagori
    <Form.Select/>
  </Form.Label>
</template>