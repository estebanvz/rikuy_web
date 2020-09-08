<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Ingresar</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field>
          <b-input v-model="email" placeholder="Correo" icon="account">
          </b-input>
        </b-field>
        <b-field>
          <b-input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            icon="security"
            password-reveal
          >
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <!-- <button class="button" type="button" @click="$emit('close')">
          Cerrar
        </button> -->
        <!-- <b-button @click="register()" class="button is-info"
          >Registrarse</b-button
        > -->
        <b-button @click="login()" class="button is-info">Ingresar</b-button>
      </footer>
    </div>
  </div>
</template>

<script>
import { APIlogin, APIuser } from "../api/Authentication.js";
export default {
  methods: {
    login() {
      APIlogin(this.email, this.password).then((e) => {
        if (e.data != undefined && e.data.error == undefined) {
          this.$store.commit("setToken", e.data.success.token);
          APIuser().then((e) => {
            console.log(e);
          });
          this.$emit('resetData');
          this.$emit('close');
          // this.drawCharts();
        }
      });
    },
  },
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password_c: "",
    };
  },
};
</script>

<style></style>
