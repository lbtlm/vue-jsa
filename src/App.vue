<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { Message } from '@element-plus/icons-vue'
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary" round-full>Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info" :icon="Message" circle></el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
</template>

<style></style>
