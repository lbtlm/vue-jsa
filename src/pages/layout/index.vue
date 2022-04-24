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
      <div class="w-full h-full pt-2 mt-2 bg-slate-50 rounded">
        <div class="ml-4 flex content-start flex-wrap flex-row mb-2">
          <span class="rounded px-2 py-1 border-2 my-1 mr-2">任何运ds营商</span>
          <span class="rounded px-2 py-1 border-2 my-1 mr-2">任何运营商</span>
          <span class="rounded px-2 py-1 border-2 my-1 mr-2">任何运</span>
          <span class="rounded px-2 py-1 border-2 my-1 mr-2">任何运营商</span>
          <span class="rounded px-2 py-1 border-2 my-1 mr-2">任运营商</span>
        </div>
        <hr />
        <div class="mt-2">
          <div class="flex flex-row pb-2 px-4 rounded">
            <div
              class="h-12 w-full pl-2 flex flex-row justify-between border-2 items-center rounded-lg"
            >
              <div class="flex flex-row">
                <img class="pl-2 pr pr-adidas" />
                <h2 class="pl-4">adidas</h2>
              </div>

              <div>
                <span>
                  <b>49922</b>
                  个
                </span>
              </div>

              <div class="flex flex-row pr-2">
                <span class="pr-12">最低价</span>
                <div>1.1</div>
                <div class="pl-2">元</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row pb-2 px-4 rounded">
            <div
              class="h-12 w-full pl-2 flex flex-row justify-between border-2 items-center rounded-lg"
            >
              <div class="flex flex-row">
                <img class="pl-2 pr pr-adidas" />
                <h2 class="pl-4">adidas</h2>
              </div>

              <div>
                <span>
                  <b>49922</b>
                  个
                </span>
              </div>

              <div class="flex flex-row pr-2">
                <span class="pr-12">最低价</span>
                <div>1.1</div>
                <div class="pl-2">元</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row pb-2 px-4 rounded">
            <div
              class="h-12 w-full pl-2 flex flex-row justify-between border-2 items-center rounded-lg"
            >
              <div class="flex flex-row">
                <img class="pl-2 pr pr-adidas" />
                <h2 class="pl-4">adidas</h2>
              </div>

              <div>
                <span>
                  <b>49922</b>
                  个
                </span>
              </div>

              <div class="flex flex-row pr-2">
                <span class="pr-12">最低价</span>
                <div>1.1</div>
                <div class="pl-2">元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderBar from './header/index.vue'
import Articles from './articles/index.vue'
import Notice from './notice/index.vue'
import Aside from './aside/index.vue'
</script>
