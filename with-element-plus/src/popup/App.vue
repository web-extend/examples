<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="content">
    <p>Count: {{ count }}</p>
    <el-button type="primary" @click="count++">Click me</el-button>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  padding: 12px;
}
</style>
