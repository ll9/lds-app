<template>
    <FloatTextField v-model="val" :hint="hint" @focus="getDate" editable="false"></FloatTextField>
</template>

<script>
import Vue from "vue";
import DateService from "../../utils/DateService";
import FloatTextField from '../FloatTextField';

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
  },
  components: {
    FloatTextField
  }
});
</script>

<style scoped lang="scss">
</style>
