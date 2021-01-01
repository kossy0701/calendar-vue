<template>
  <div id="nav">
    <router-view />
    <Footer />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import FooterComponent from '@/views/Footer'

export default defineComponent({
  component: {
    Footer: FooterComponent
  }
})
</script>
