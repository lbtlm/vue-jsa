<template>
  <div class="w-1/2 h-full mr-2 pt-2 mt-2 bg-slate-50 rounded pb-2">
    <p class="pl-4 text-lg">请选择对应的国家：</p>
    <div class="pt-1 ml-4 flex content-start flex-wrap flex-row">
      <section>
        <button
          v-for="(item, index) in countries"
          :key="index"
          class="border border-gray-300 rounded px-1 mr-2 mb-2"
        >
          <img src="./blank.gif" class="flag flag-bd" />
          <span class="pl-1 text-gray-700 text-sm">{{ item['text_en'] }}</span>
        </button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { getCountryList } from '@/api/countries.js'

import axios from 'axios'

// import { ref, toRefs, reactive } from 'vue'

const countries = axios
  .get('http://api.hello-sms.com/v1/guest/countries')
  .then(async function (response) {
    // console.log(response.data)

    return response.data
  })
  .catch(function (error) {
    console.log(error)
  })

console.log(countries)

// })

// const dataCountry = countries
// console.log(dataCountry)

// console.log(countries)
</script>
<style lang="scss"></style>
