<script setup lang="ts">
import { ref } from 'vue';
import { Edit } from '@element-plus/icons-vue';

const visible = ref(false);

function toggle() {
  visible.value = !visible.value;
}
</script>

<template>
  <div class="web-extend-content-container">
    <div v-if="visible" class="web-extend-content">
      <h1>WebExtend + Vue</h1>
      <p>This is a content script.</p>
    </div>
    <div @click="toggle">
      <el-button size="large" type="primary" :icon="Edit" circle />
    </div>
  </div>
</template>

<style scoped>
.web-extend-content-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: end;
  z-index: 1000;
}

.web-extend-content {
  color: #000;
  background-color: #fff;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
  padding: 12px;
}

.web-extend-content h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

.web-extend-content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
