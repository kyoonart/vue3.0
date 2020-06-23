<template>
  <div>
    <Home :title="name" @titlechange="titleChange"></Home>
    <button type="button" @click="Change()">change</button>
  </div>
</template>

<script>
import Home from "./Home";
export default {
  components: {
    Home
  },
  data() {
    return {
      name: 2
    };
  },
  methods: {
    Change() {
      this.name++;
    },
    titleChange(data) {
      console.log("change", data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
