<template>
    <Page class="page">
        <SDActionBar></SDActionBar>
        <ScrollView>
          <StackLayout>
              <FloatTextField placeholder="Lichtpunktnummer" secure></FloatTextField>
              <FloatTextField placeholder="Ort" secure></FloatTextField>
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
              <TextField v-model="montagedatum" hint="Montagedatum" @focus="getDate" />
              <TextField v-model="leuchtentyp" hint="Leuchtentyp" />
              <TextField v-model="montagedatum" hint="Montagedatum" @focus="getDate" />
              <TextField v-model="lichtpunkthöhe" hint="Lichtpunkthöhe" keyboardType="number" />
              <TextField v-model="lampentyp" hint="Lampentyp" />
              <TextField v-model="montagedatum" hint="Montagedatum" @focus="getDate" />
              <TextField v-model="material" hint="Material" />
              <TextField v-model="montagedatum" hint="Montagedatum" @focus="getDate" />

              <Button text="Weiter" @tap="navigateForward"></Button>
          </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import Vue from "vue";
import SDActionBar from "./SDActionBar";
import FloatTextField from './FloatTextField';
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
    FloatTextField
  }
});
</script>

<style scoped lang="scss">
</style>
