<template>
  <div class="home">
    <div class="container">
      <div class="card article">
        <div class="card-content">
          <p class="title article-title pb-5">
            RIKUY: Plataforma de lectura veloz
          </p>

          <p>
            Rikuy es una plataforma que busca mejorar la velocidad de lectura
            usando inteligencia artificial. Este utiliza una técnicas avanzadas
            de lectura y exámenes para mejorar la comprensión lectora.
          </p>
          <router-link to="/read"
            >Para practicar clic en el boton leer o aquí.</router-link
          >
          <div
            v-show="this.$store.state.session.token != ''"
            class="columns is-centered is-vcentered"
          >
            <div class="column">
              <div class="is-centered">
                <div class="columns">
                  <div class="column is-offset-3 is-half">
                    <div class="card">
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <p class="title is-4">
                              {{ $store.state.session.user.name }}
                            </p>
                            <p class="subtitle is-6">
                              {{ $store.state.session.user.email }}
                            </p>
                          </div>
                        </div>
                        <!-- <div class="content center">
              <div class="buttons">
                <b-button type="is-success">Fácil</b-button>
                <b-button type="is-primary">Normal</b-button>
                <b-button type="is-danger">Difícil</b-button>
              </div>
            </div> -->
                        <!-- <div class="content">
                          Comprensión Promedio:
                          <b-progress :value="80" show-value format="percent">
                            80 % / 100 %
                          </b-progress>
                        </div> -->
                        <div class="content">
                          <!-- Velocidad Promedio:
                          <b-taglist attached class="is-centered">
                            <b-tag type="is-dark">500</b-tag>
                            <b-tag type="is-info">palabras por minuto</b-tag>
                          </b-taglist> -->
                          <canvas height="250px" id="velocidad-chart"></canvas>
                        </div>
                        <div class="content">
                          <canvas height="250px" id="planet-chart"></canvas>
                        </div>
                        <div class="content">
                          <div class="buttons">
                            <b-button
                              type="is-primary"
                              expanded
                              @click="$router.push('/read')"
                              >Juguemos</b-button
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-show="this.$store.state.session.token == ''"
            class="columns is-centered is-vcentered"
          >
            <div class="column">
              <div class="container">
                <div class="container">
                  <div class="columns">
                    <div
                      class="column is-half is-offset-3 is-centered is-vcentered"
                    >
                      <h1 class="title">Ingresar</h1>
                      <b-field>
                        <b-input
                          v-model="email"
                          placeholder="Correo"
                          icon="account"
                        >
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
                      <div class="buttons">
                        <b-button @click="login()" type="is-primary"
                          >Ingresar</b-button
                        >
                        <b-button
                          type="is-primary is-light"
                          @click="showRegister = true"
                          >Registrarme</b-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      v-model="showRegister"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <template #default="props">
        <register @close="props.close" />
      </template>
    </b-modal>
  </div>
</template>
<style lang="scss" scoped>
img {
  width: 60%;
  padding: 0.4em initial;
}
</style>
<script>
import Register from "@/components/Register";
import Chart from "chart.js";
import { APIlogin, APIuser } from "@/api/Authentication.js";
import { APIgetData } from "../api/Data";
export default {
  components: {
    Register,
  },
  beforeMount() {},
  mounted() {
    APIuser().then((e) => {
      console.log(e);
    });
    this.getData();
  },
  methods: {
    getData() {
      APIgetData().then((e) => {
        console.log(e);
        if (e.data != undefined) {
          this.dataComprehension = e.data.comprehension;
          this.mydataComprehension = e.data.mycomprehension;
          this.myspeed = [];
          this.dateSpeed = [];
          e.data.myspeed.forEach((element) => {
            this.myspeed.push(element.speed);
            this.dateSpeed.push(element.initial_date.slice(2, 10));
          });
          this.drawComprehension();
          if (this.$store.state.session.token != "") {
            this.drawSpeed();
          }
        }
      });
    },
    login() {
      APIlogin(this.email, this.password).then((e) => {
        if (e.data != undefined && e.data.error == undefined) {
          this.$store.commit("setToken", e.data.success.token);
          APIuser().then((e) => {
            console.log(e);
          });
          // this.drawCharts();
        }
      });
    },
    drawSpeed() {
      const ctx2 = document.getElementById("velocidad-chart");
      const velocidadChart = new Chart(ctx2, {
        type: "line",
        data: {
          labels: this.dateSpeed,
          datasets: [
            {
              label: "Tu Velocidad de Lectura",
              data: this.myspeed,
              backgroundColor: "rgba(0,125,125,0.5)",
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Velocidad de lectura vs Fecha",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
      console.log(velocidadChart);
    },
    drawComprehension() {
      const ctx = document.getElementById("planet-chart");
      const myChart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "Todos los Intentos",
              data: this.dataComprehension,
              backgroundColor: "rgb(125,125,125)",
            },
            {
              label: "Tus intentos",
              data: this.mydataComprehension,
              backgroundColor: "rgb(0,125,125)",
            },
          ],
        },
        options: {
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return (
                  "Comprensión " +
                  tooltipItem.yLabel +
                  "% Velocidad " +
                  tooltipItem.xLabel +
                  " ppm"
                );
              },
            },
          },
          title: {
            display: true,
            text: "Comprensión vs Velocidad",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                label: "velocidad",
                type: "linear",
                position: "bottom",
                ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value) {
                    return value;
                  },
                },
              },
            ],
          },
        },
      });
      console.log(myChart);
    },
  },
  data() {
    return {
      showRegister: false,
      email: null,
      password: null,
      dataComprehension: [],
      mydataComprehension: [],
      myspeed: [],
      dateSpeed: [],
    };
  },
};
</script>
