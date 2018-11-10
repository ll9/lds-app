<template>
    <GridLayout rows="30, auto" marginBottom="5">
        <Label ref="label" row="1" :text="placeholder" opacity="0.4" fontSize="14"  class="input"></Label>
        <TextField ref="textField" :secure="secure" row="1"  @focus="onFocus" @blur="onBlur" borderBottomWidth="3" borderBottomColor="#cec8c8" padding="2"></TextField>
    </GridLayout>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["placeholder", "secure"],
  data() {},
  methods: {
    onFocus() {
      const label = this.$refs.label.nativeElement;
      const textField = this.$refs.textField.nativeElement;

      // animate the label sliding up and less transparent.
      label
        .animate({
          translate: { x: 0, y: -25 },
          opacity: 1
        })
        .then(() => {}, () => {});

      // set the border bottom color to green to indicate focus
      textField.borderBottomColor = new Color("#00b47e");
    },
    onBlur() {
      const label = this.$refs.label.nativeElement;
      const textField = this.$refs.textField.nativeElement;

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