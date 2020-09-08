<template>
  <div class="is-centered">
    <!-- <div class="columns is-centered is-vcentered">
      <div class="column is-4">
        <div class="card">
          <register />
        </div>
      </div>
    </div> -->
    <div class="columns is-centered">
      <div class="column">
        <div
          v-if="$store.state.session.token == ''"
          class="buttons is-centered"
        >
          <b-button @click="showRegister = true" type="is-info"
            >Regístrate</b-button
          >
          <b-button @click="showLogin = true" type="is-info">Ingresar</b-button>
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
            <register @close="props.close" @resetData="getData" />
          </template>
        </b-modal>
        <b-modal
          v-model="showLogin"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-modal
        >
          <template #default="props">
            <login @close="props.close" @resetData="getData"  />
          </template>
        </b-modal>
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-3 is-half">
        <div class="card">
          <div class="card-content">
            <div v-if="$store.state.session.token != ''" class="media">
              <div class="media-content">
                <p class="title is-4">{{ $store.state.session.user.name }}</p>
                <p class="subtitle is-6">
                  {{ $store.state.session.user.email }}
                </p>
              </div>
            </div>
            <!-- <register /> -->
            <!-- <div class="content center">
              <div class="buttons">
                <b-button type="is-success">Fácil</b-button>
                <b-button type="is-primary">Normal</b-button>
                <b-button type="is-danger">Difícil</b-button>
              </div>
            </div> -->
            <div class="content">
              Comprensión:
              <b-progress
                :value="
                  ($store.state.currentExam.score /
                    $store.state.currentExam.total) *
                  100
                "
                show-value
                format="percent"
              >
                {{
                  (
                    ($store.state.currentExam.score /
                      $store.state.currentExam.total) *
                    100
                  ).toFixed(0)
                }}
                % / 100 %
              </b-progress>
            </div>
            <div  class="content">
              Velocidad:
              <b-taglist attached class="is-centered">
                <b-tag type="is-dark">{{ $store.state.config.speed }}</b-tag>
                <b-tag type="is-info">palabras por minuto</b-tag>
              </b-taglist>
              <canvas v-if="$store.state.session.token != ''" height="250px" id="velocidad-chart"></canvas>
            </div>
            <div class="content">
              <canvas height="250px" id="planet-chart"></canvas>
            </div>
            <div class="content">
              <div class="buttons">
                <b-button type="is-primary" expanded @click="restart"
                  >Juguemos de nuevo</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script>
import Chart from "chart.js";
import Register from "@/components/Register";
import Login from "@/components/Login";
import { APIgetData } from "../api/Data";

export default {
  components: { Register, Login },
  beforeMount() {},
  mounted() {},
  methods: {
    restart() {
      this.$emit("restart");
    },
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
    drawGraphs() {
      const ctx = document.getElementById("planet-chart");
      const ctx2 = document.getElementById("velocidad-chart");

      const myChart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "Tus Intentos",
              data: [
                {
                  x: 450,
                  y: 40,
                },
                {
                  x: 500,
                  y: 80,
                },
                {
                  x: 350,
                  y: 100,
                },
              ],
              backgroundColor: "rgb(255,0,255)",
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
      const velocidadChart = new Chart(ctx2, {
        type: "line",
        data: {
          labels: [
            "03-Jun",
            "04-jun",
            "04-jun",
            "04-jun",
            "04-jun",
            "04-jun",
            "04-jun",
          ],
          datasets: [
            {
              label: "Tu Velocidad de Lectura",
              data: [100, 259, 375, 220, 220, 255, 240],
              backgroundColor: "rgba(2,22,0,0.5)",
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Velocidad de lectura vs Fecha",
          },
        },
      });
      console.log(myChart);
      console.log(velocidadChart);
    },
  },
  data() {
    return {
      showRegister: false,
      showLogin: false,
      dataComprehension: [],
      mydataComprehension: [],
      myspeed: [],
      dateSpeed: [],
    };
  },
};
</script>
