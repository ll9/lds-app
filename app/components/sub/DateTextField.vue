<template>
    <TextField v-model="val" :hint="hint" @focus="getDate" editable="false" />
</template>

<script>
import Vue from "vue";
import DateService from "../../utils/DateService";

const Service = new DateService();

export default Vue.extend({
  props: ["value", "hint"],
  data() {
    return {
      val: this.value
    }
  },
  methods: {
    async getDate(args) {
      this.val = await Service.getDate();
      this.$emit('input', this.val);
    }
  }
});
</script>

<style scoped lang="scss">
</style>
