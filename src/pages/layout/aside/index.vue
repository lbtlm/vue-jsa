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
          <img src="../blank.gif" class="flag" :class="'flag-' + Object.keys(item['iso'])[0]" />
          <span class="pl-1 text-gray-700 text-sm">{{ item['text_en'] }}</span>
        </button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const flagName = ref('')
const countries = ref({})
async function getCountryList() {
  const countries = await axios.get('http://api.hello-sms.com/v1/guest/countries')
  return countries
}

const countryList = getCountryList().then((response) => {
  // console.log(response['data'])
  countries.value = response['data']
})
</script>
<style lang="scss"></style>
