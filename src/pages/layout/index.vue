<template>
  <div>
    <!-- 头部 -->
    <HeaderBar />
    <!-- 弹出页面 -->
    <Articles />

    <!-- 公告 -->
    <Notice />

    <!-- 内容 -->
    <div class="container mx-auto flex justify-between">
      <!-- 内容左侧 -->
      <Aside />
      <!-- 内容右侧 -->
      <Content />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderBar from './header/index.vue'
import Articles from './articles/index.vue'
import Notice from './notice/index.vue'
import Aside from './aside/index.vue'
import Content from './content/index.vue'
</script>
