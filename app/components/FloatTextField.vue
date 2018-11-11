<template>
    <GridLayout rows="30, auto" marginBottom="5">
        <Label ref="label" row="1" :text="hint" opacity="0.4" fontSize="14"  class="input"></Label>
        <TextField ref="textField" 
        v-model="text" 
        :secure="secure" 
        :keyboardType="keyboardType" 
        @textChange="onInput" 
        @focus="onFocus" 
        @blur="onBlur" 
        row="1"  
        borderBottomWidth="3" 
        borderBottomColor="#cec8c8" 
        padding="2"
        ></TextField>
    </GridLayout>
</template>

<script>
import Vue from "vue";
import { Color } from "tns-core-modules/color";

export default Vue.extend({
  props: ["value", "hint", "secure", "keyboardType", "editable"],
  data() {
    return {
      text: value
    };
  },
  methods: {
    onInput() {
      this.$emit("input", this.text);
    },
    onFocus() {
      const label = this.$refs.label.nativeView;
      const textField = this.$refs.textField.nativeView;

      // animate the label sliding up and less transparent.
      label
        .animate({
          translate: { x: 0, y: -25 },
          opacity: 1
        })
        .then(() => {}, () => {});

      // set the border bottom color to green to indicate focus
      textField.borderBottomColor = new Color("#00b47e");
      this.$emit("focus");
    },
    onBlur() {
      const label = this.$refs.label.nativeView;
      const textField = this.$refs.textField.nativeView;

      // if there is text in our input then don't move the label back to its initial position.
      if (!textField.text) {
        label
          .animate({
            translate: { x: 0, y: 0 },
            opacity: 0.4
          })
          .then(() => {}, () => {});
      }
      // reset border bottom color.
      textField.borderBottomColor = new Color("#cec8c8");
    }
  }
});
</script>