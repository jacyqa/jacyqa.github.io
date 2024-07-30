<template>
  <div>
    <h1>随机抽人</h1>
    <el-button @click="randomSelect">随机选择</el-button>
    <p>随机选择的人是:{{ result.num }} {{ result.name }}</p>
  </div>
</template>

<script lang="ts">
import { data } from "@/components/data-1";

export default {
  setup() {
    const people = ref(data);
    const result = ref<{
      num: number;
      name: string;
      grade: number;
    }>({
      num: 0,
      name: "",
      grade: 0,
    });

    const randomSelect = () => {
      const randomIndex = Math.floor(Math.random() * people.value.length);
      const selectedPerson = people.value[randomIndex];
      result.value = selectedPerson;
    };

    return {
      people,
      result,
      randomSelect,
    };
  },
};
</script>
