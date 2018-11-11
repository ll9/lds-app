<template>
    <FloatTextField v-model="date" :hint="hint" @focus="getDate"></FloatTextField>
</template>

<script>
import Vue from "vue";
import DateService from "../../utils/DateService";
import FloatTextField from "../FloatTextField";

const Service = new DateService();

export default Vue.extend({
  props: ["value", "hint"],
  data() {
    return {
      date: this.value
    };
  },
  methods: {
    async getDate() {
      this.date = await Service.getDate();
      this.$emit("input", this.date);
    }
  },
  components: {
    FloatTextField
  }
});
</script>

<style scoped lang="scss">
</style>
