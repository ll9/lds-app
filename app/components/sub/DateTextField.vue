<template>
    <FloatTextField v-model="value" :hint="hint" @focus="getDate"></FloatTextField>
</template>

<script>
import Vue from "vue";
import DateService from "../../utils/DateService";
import FloatTextField from "../FloatTextField";

const Service = new DateService();

export default Vue.extend({
  props: ["value", "hint"],
  data() {
    return {};
  },
  methods: {
    async getDate() {
      this.value = await Service.getDate();
      this.$emit("input", this.value);
    }
  },
  components: {
    FloatTextField
  }
});
</script>

<style scoped lang="scss">
</style>
