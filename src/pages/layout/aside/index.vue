<template>
  <div class="w-1/2 h-full mr-2 pt-2 mt-2 bg-slate-50 rounded pb-2">
    <p class="pl-4 text-lg">请选择对应的国家：</p>
    <div class="pt-1 ml-4 flex content-start flex-wrap flex-row">
      <el-container>
        <span>
          <img class="flag flag-zw" />
          <span class="pl-2 font-medium text-gray-700">阿富汗</span>
        </span>
        <span class="rounded px-2 py-1 border-2 my-1 mr-2 items-center">
          <img class="flag flag-zw" />
          <span class="pl-2 font-medium text-gray-700">阿富汗</span>
        </span>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
// import getAllCountry from '@/api/request.js'
// import { ref, toRefs, reactive } from 'vue'

// const countries = reactive(getAllCountry().then(function(){

// })

// const dataCountry = countries
// console.log(dataCountry)

// console.log(countries)
</script>
<style lang="scss"></style>
