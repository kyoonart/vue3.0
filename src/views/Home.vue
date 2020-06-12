<template>
  <div class="home">
    <div>
      <h1>vue3.0 CompositionAPI</h1>
      <p>{{ data.name }}</p>
      <h2>
        <button type="button" @click="ChangeAge(-1)">-</button> {{ data.age }}
        <button type="button" @click="ChangeAge(1)">+</button>
      </h2>
      <button type="button" @click="ChangeYear(-1)">-</button>
      <h4 class="year">出生年份:{{ data.year }}</h4>
      <button type="button" @click="ChangeYear(1)">+</button>
    </div>
  </div>
</template>

<script>
// todo reactive 2020-6-11 21:08:52
// @ is an alias to /src
import { ref, computed, reactive, watch } from "vue";
export default {
  props: {
    title: {
      type: Number
    }
  },
  name: "Home",
  setup(props, context) {
    const data = reactive({
      name: "zhangsan",
      age: 18,
      year: computed({
        get: () => {
          return 2020 - data.age;
        },
        set: val => {
          data.age = 2020 - val;
        }
      })
    });
    const name = ref("zhangsan");
    const age = ref(18);

    function ChangeAge(val) {
      data.age += val;
    }
    watch(
      () => props.title,
      (oldtitle, newtitle) => {
        console.log(oldtitle, newtitle);
      }
    );
    function ChangeYear(val) {
      data.year = data.year + val;
      // console.log(props.title);
      context.emit("titlechange", "changeindndndidni");
    }
    return { data, ChangeAge, ChangeYear };
  }
};
</script>

<style scoped>
.year {
  display: inline-block;
}
</style>
