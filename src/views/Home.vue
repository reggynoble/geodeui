<template>
  <div class="home">
    <img id ='logo' alt="logo" src="../assets/geodelogo-white.png">
    <div id = title>Create User  </div>
    <FormSubmission />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import FormSubmission from '@/components/FromSubmission.vue' // @ is an alias to /src

@Options({
  components: {
    FormSubmission
  }
})
export default class Home extends Vue {}
</script>
<style scoped>

logo {
  float: right;
}
</style>
