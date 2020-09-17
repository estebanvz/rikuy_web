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
            >{{text.register}}</b-button
          >
          <b-button @click="showLogin = true" type="is-info">{{text.login}}</b-button>
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
            <login @close="props.close" @resetData="getData" />
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
                <p class="title is-4 is-capitalized">
                  {{ $store.state.session.user.name }}
                </p>
                <p class="subtitle is-6 has-text-link">
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
              {{ text.comprehension }} (
              {{ $store.state.currentExam.time }} seg. ):
              <b-progress
                :value="
                  ($store.state.currentExam.score /
                    $store.state.currentExam.total) *
                    100 -
                  $store.state.currentExam.time / 30
                "
                show-value
                format="percent"
              >
                {{
                  (
                    ($store.state.currentExam.score /
                      $store.state.currentExam.total) *
                      100 -
                    $store.state.currentExam.time / 30
                  ).toFixed(0)
                }}
                % / 100 %
              </b-progress>
            </div>
            <div class="content">
              {{ text.speed }}:
              <b-taglist attached class="is-centered">
                <b-tag type="is-dark">{{
                  $store.state.config.speed *
                  $store.state.config.nWords *
                  $store.state.config.nLines
                }}</b-tag>
                <b-tag type="is-info">{{ text.ppm }}</b-tag>
              </b-taglist>
              <canvas
                v-if="$store.state.session.token != ''"
                height="250px"
                id="velocidad-chart"
              ></canvas>
            </div>
            <div class="content">
              <canvas height="250px" id="planet-chart"></canvas>
            </div>
            <div class="content">
              <div class="buttons">
                <b-button type="is-primary" expanded @click="restart">{{
                  text.again
                }}</b-button>
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
  beforeMount() {
    if (this.$store.state.language == "es") {
      this.text.comprehension = "Comprensión";
      this.text.speed = "Velocidad";
      this.text.ppm = "Palabras por minuto";
      this.text.speedTime = "Velocidad de lectura por fecha";
      this.text.you = "Tu";
      this.text.others = "Otros";
      this.text.comprehensionSpeed = "Comprensión vs velocidad";
      this.text.again = "Juguemos de nuevo";
      this.text.login = "Ingresa";
      this.text.register = "Regístrate";
    }
    if (this.$store.state.language == "po") {
      this.text.comprehension = "Compreensão";
      this.text.speed = "Rapidez";
      this.text.ppm = "Palavras por minuto";
      this.text.speedTime = "Velocidade de leitura por data";
      this.text.you = "Você";
      this.text.others = "Outros";
      this.text.comprehensionSpeed = "Compreensão vs rapidez";
      this.text.again = "Jogar de novo";
      this.text.login = "Conecte-se";
      this.text.register = "Inscrever-se";
    }
  },
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

      let options = {
        type: "line",
        data: {
          labels: this.dateSpeed,
          datasets: [
            {
              label: this.text.you,
              data: this.myspeed,
              backgroundColor: "rgba(0,125,125,0.5)",
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: this.text.speedTime,
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
      };

      if (this.firstTime) {
        this.speedChart = new Chart(ctx2, options);
        this.firstTime = false;
      } else {
        this.speedChart.data.labels = options.data.labels;
        this.speedChart.data.datasets = options.data.datasets;
        this.speedChart.update();
      }
      console.log(this.speedChart);
    },
    drawComprehension() {
      const ctx = document.getElementById("planet-chart");
      const myChart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: this.text.you,
              data: this.mydataComprehension,
              backgroundColor: "rgb(0,125,125)",
            },
            {
              label: this.text.others,
              data: this.dataComprehension,
              backgroundColor: "rgb(125,125,125)",
            },
          ],
        },
        options: {
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel + "% " + tooltipItem.xLabel + " ppm";
              },
            },
          },
          title: {
            display: true,
            text: this.text.comprehensionSpeed,
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
    // drawGraphs() {
    //   const ctx = document.getElementById("planet-chart");
    //   const ctx2 = document.getElementById("velocidad-chart");

    //   const myChart = new Chart(ctx, {
    //     type: "scatter",
    //     data: {
    //       datasets: [
    //         {
    //           label: this.text.you,
    //           data: [
    //             {
    //               x: 450,
    //               y: 40,
    //             },
    //             {
    //               x: 500,
    //               y: 80,
    //             },
    //             {
    //               x: 350,
    //               y: 100,
    //             },
    //           ],
    //           backgroundColor: "rgb(255,0,255)",
    //         },
    //       ],
    //     },
    //     options: {
    //       tooltips: {
    //         callbacks: {
    //           label: function (tooltipItem) {
    //             return (
    //               "Comprensión " +
    //               tooltipItem.yLabel +
    //               "% Velocidad " +
    //               tooltipItem.xLabel +
    //               " ppm"
    //             );
    //           },
    //         },
    //       },
    //       title: {
    //         display: true,
    //         text: this.text.comprehensionSpeed,
    //       },
    //       scales: {
    //         xAxes: [
    //           {
    //             label: "velocidad",
    //             type: "linear",
    //             position: "bottom",
    //             ticks: {
    //               // Include a dollar sign in the ticks
    //               callback: function (value) {
    //                 return value;
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   });
    //   console.log(myChart);
    //   const velocidadChart = new Chart(ctx2, {
    //     type: "line",
    //     data: {
    //       labels: [
    //         "03-Jun",
    //         "04-jun",
    //         "04-jun",
    //         "04-jun",
    //         "04-jun",
    //         "04-jun",
    //         "04-jun",
    //       ],
    //       datasets: [
    //         {
    //           label: this.text.you,
    //           data: [100, 259, 375, 220, 220, 255, 240],
    //           backgroundColor: "rgba(2,22,0,0.5)",
    //         },
    //       ],
    //     },
    //     options: {
    //       title: {
    //         display: true,
    //         text: this.text.speedTime,
    //       },
    //     },
    //   });
    //   console.log(myChart);
    //   console.log(velocidadChart);
    // },
  },
  data() {
    return {
      showRegister: false,
      showLogin: false,
      dataComprehension: [],
      mydataComprehension: [],
      myspeed: [],
      dateSpeed: [],
      firstTime: true,
      speedChart: null,
      text: {},
      comprehensionChart: null,
    };
  },
};
</script>
