<template>
    <Page class="page">
        <SDActionBar></SDActionBar>
        <ScrollView>
          <StackLayout>
              <FloatTextField v-model="lichtpunktnummer" placeholder="Lichtpunktnummer" secure></FloatTextField>
              <FloatTextField v-model="ort" placeholder="Ort" secure></FloatTextField>
              <Label :text="ort" />
              <!-- <TextField v-model="lichtpunktnummer" hint="Lichtpunktnummer" />
              <TextField v-model="ort" hint="Ort" /> -->
              <TextField v-model="straße" hint="Straße" />
              <TextField v-model="hausnummer" hint="Hausnummer" />
              <TextField v-model="bemerkung" hint="Bemerkung" />
              <TextField v-model="schranknummer" hint="Schranknummer" />
              <TextField v-model="masttyp" hint="Masttyp" />
              <TextField v-model="mastlänge" hint="Mastlänge" />
              <TextField v-model="fundament" hint="Fundament" />
              <TextField v-model="auslegertyp" hint="Auslegertyp" />
              <DateTextField v-model="montagedatum" hint="Montagedatum" />
              <TextField v-model="leuchtentyp" hint="Leuchtentyp" />
              <DateTextField v-model="montagedatum" hint="Montagedatum" />
              <TextField v-model="lichtpunkthöhe" hint="Lichtpunkthöhe" keyboardType="number" />
              <TextField v-model="lampentyp" hint="Lampentyp" />
              <DateTextField v-model="montagedatum" hint="Montagedatum" />
              <TextField v-model="material" hint="Material" />
              <DateTextField v-model="montagedatum" hint="Montagedatum" />

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
      montagedatum: '',
      leuchtentyp: '',
      montagedatum: '',
      lichtpunkthöhe: '',
      lampentyp: '',
      montagedatum: '',
      material: '',
      montagedatum: '',
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
