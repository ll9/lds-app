<template>
    <Page class="page">
        <SDActionBar></SDActionBar>
        <ScrollView>
          <StackLayout>
              <FloatTextField v-model="lichtpunktnummer" hint="Lichtpunktnummer"></FloatTextField>
              <FloatTextField v-model="ort" hint="Ort"></FloatTextField>
              <FloatTextField v-model="straße" hint="Straße" />
              <FloatTextField v-model="hausnummer" hint="Hausnummer" />
              <FloatTextField v-model="bemerkung" hint="Bemerkung" />
              <FloatTextField v-model="schranknummer" hint="Schranknummer" />
              <FloatTextField v-model="masttyp" hint="Masttyp" />
              <FloatTextField v-model="mastlänge" hint="Mastlänge" />
              <FloatTextField v-model="fundament" hint="Fundament" />
              <FloatTextField v-model="auslegertyp" hint="Auslegertyp" />
              <DateTextField v-model="mastMontagedatum" hint="Montagedatum" />
              <FloatTextField v-model="leuchtentyp" hint="Leuchtentyp" />
              <DateTextField v-model="leuchtenMontagedatum" hint="Montagedatum" />
              <FloatTextField v-model="lichtpunkthöhe" hint="Lichtpunkthöhe" keyboardType="number" />
              <FloatTextField v-model="lampentyp" hint="Lampentyp" />
              <DateTextField v-model="lampenMontagedatum" hint="Montagedatum" />
              <FloatTextField v-model="material" hint="Material" />
              <DateTextField v-model="materialMontagedatum" hint="Montagedatum" />

              <Button text="Weiter" @tap="navigateForward"></Button>
          </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import Vue from "vue";
import SDActionBar from "./SDActionBar";
import FloatTextField from './FloatTextField';
import DateTextField from './sub/DateTextField';
import FinalPage from "./FinalPage";
import { navigationOptions } from "../utils/settings";
import DateService from '../utils/DateService';

const Service = new DateService();

export default Vue.extend({
  data() {
    return {
      lichtpunktnummer: '',
      ort: '',
      straße: '',
      hausnummer: '',
      bemerkung: '',
      schranknummer: '',
      masttyp: '',
      mastlänge: '',
      fundament: '',
      auslegertyp: '',
      mastMontagedatum: '',
      leuchtentyp: '',
      leuchtenMontagedatum: '',
      lichtpunkthöhe: '',
      lampentyp: '',
      lampenMontagedatum: '',
      material: '',
      materialMontagedatum: '',
    };
  },
  computed: {
    any: () => {}
  },
  methods: {
    navigateForward() {
      this.$navigateTo(FinalPage, navigationOptions);
    },
    async getDate() {
      await Service.getDate();
    }
  },
  components: {
    SDActionBar,
    FloatTextField,
    DateTextField
  }
});
</script>

<style scoped lang="scss">
</style>
