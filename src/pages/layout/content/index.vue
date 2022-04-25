<template>
  <div class="w-full h-full pt-2 mt-2 bg-slate-50 rounded">
    <div class="ml-4 flex content-start flex-wrap flex-row mb-2 text-gray-500">
      <button class="border border-gray-300 rounded px-2 mr-2 mb-2 mt-2">任何服务商</button>
      <button class="border border-gray-300 rounded px-2 mr-2 mb-2 mt-2">任何服务商</button>
      <button class="border border-gray-300 rounded px-2 mr-2 mb-2 mt-2">任何服务商</button>
      <button class="border border-gray-300 rounded px-2 mr-2 mb-2 mt-2">任何服务商</button>
    </div>
    <hr />
    <div class="mt-2">
      <div v-for="(item, index) in products" :key="index" class="flex flex-row pb-2 px-4 rounded">
        <button class="h-12 w-full pl-2 border-2 items-center rounded-lg grid grid-cols-3 gap-4">
          <div class="flex flex-row">
            <img class="pl-2 pr" :class="'pr-' + item" src="../blank.gif" />
            <h2 class="pl-4">{{ item }}</h2>
          </div>

          <div>
            <span>
              <b>{{ productObj[item]['Qty'] }}</b>
              个
            </span>
          </div>

          <div class="flex justify-between pr-2">
            <span class="pl-36">最低价</span>
            <div class="flex flex-row">
              <div>{{ productObj[item]['Price'] }}</div>
              <div class="pl-2">元</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const products = ref([])
const productObj = ref({})

async function getProductsList() {
  const productsTemp = await axios.get('http://api.hello-sms.com/v1/guest/products/any/any')
  return productsTemp
}

const prodctsList = getProductsList().then((res) => {
  //   console.log(res)
  //   console.log(Object.keys(res['data']))
  products.value = Object.keys(res['data'])
  productObj.value = res['data']
  console.log(productObj.value)

  //   console.log(products.value)
})

// console.log(products.value)

// const flagName = ref('')
// const countries = ref({})
// async function getCountryList() {
//   const countries = await axios.get('http://api.hello-sms.com/v1/guest/countries')
//   return countries
// }

// const countryList = getCountryList().then((response) => {
//   console.log(response['data'])
//   countries.value = response['data']
// })
</script>
<style lang="scss"></style>
