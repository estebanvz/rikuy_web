<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Registro</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field label="Nombres">
          <b-input
            type="text"
            v-model="name"
            placeholder="Tus nombres"
            required
          >
          </b-input>
        </b-field>
        <b-field label="Apellidos">
          <b-input
            type="text"
            v-model="lastname"
            placeholder="Tus apellidos"
            required
          >
          </b-input>
        </b-field>
        <b-field label="Email">
          <b-input
            type="email"
            v-model="email"
            placeholder="Your email"
            required
          >
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            v-model="password"
            password-reveal
            placeholder="Your password"
            required
          >
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            v-model="password_c"
            password-reveal
            placeholder="Your password"
            required
          >
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <!-- <button class="button" type="button" @click="$emit('close')">
          Cerrar
        </button> -->
        <b-button @click="register()" class="button is-info">Registro</b-button>
      </footer>
    </div>
  </div>
</template>

<script>
import { APIregister } from "../api/Authentication.js";
export default {
  methods: {
    register() {
      APIregister(
        this.name,
        this.lastname,
        this.email,
        this.password,
        this.password_c
      ).then((e)=>{
        if(e.data != undefined && e.data.error == undefined){
          this.$store.commit('setToken',e.data.success.token);
          // this.$emit('resetData');
          this.$emit('close');
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
