<template>
  <RouterView />
</template>

<script >
import { RouterView } from 'vue-router'
import fc from "flutter-core"

export default {
  components: { RouterView },
  mounted() {
    fc.init(this)
  }
}

</script>
