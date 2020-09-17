<template>
  <div>
    
    <b-steps  v-model="steps" :has-navigation="false" @input="stepsChange()">
      <b-step-item :change="updateConfig" :label="labels[0]" icon="account-key">
        <div class="read columns is-centered">
          <div class="column is-6">
            <h1 v-if="$store.state.language == 'es'" class="title is-uppercase">
              Selecciona un nivel
            </h1>
            <h1 v-if="$store.state.language == 'po'" class="title is-uppercase">
              Selecione um nível
            </h1>
            <div class="columns is-multiline">
              <div class="column is-4">
                <div class="card">
                  <div class="card-content">
                    <p v-if="$store.state.language == 'es'" class="title is-3">
                      Nivel 1
                    </p>
                    <p v-if="$store.state.language == 'po'" class="title is-3">
                      Nível 1
                    </p>
                    <p
                      v-if="$store.state.language == 'es'"
                      class="subtitle is-6"
                    >
                      Exelente nivel para iniciar
                    </p>
                    <p
                      v-if="$store.state.language == 'po'"
                      class="subtitle is-6"
                    >
                      Excelente nível para começar
                    </p>
                  </div>
                  <footer class="card-footer">
                    <b-button
                      type="is-info"
                      @click="setNivel(1)"
                      expanded
                      outlined
                    >
                      <span v-if="$store.state.language == 'po'"> Jogar </span>
                      <span v-if="$store.state.language == 'es'"> Jugar </span>
                    </b-button>
                  </footer>
                </div>
              </div>
              <div class="column is-4">
                <div class="card">
                  <div
                    v-if="$store.state.language == 'es'"
                    class="card-content"
                  >
                    <p class="title is-3">Nivel 2</p>
                    <p class="subtitle is-6">Nivel que reta tu velocidad</p>
                  </div>
                  <div
                    v-if="$store.state.language == 'po'"
                    class="card-content"
                  >
                    <p class="title is-3">Nível 2</p>
                    <p class="subtitle is-6">
                      Nível que desafia sua velocidade
                    </p>
                  </div>
                  <footer class="card-footer">
                    <b-button
                      type="is-info"
                      @click="setNivel(2)"
                      expanded
                      outlined
                    >
                      <span v-if="$store.state.language == 'po'"> Jogar </span>
                      <span v-if="$store.state.language == 'es'"> Jugar </span>
                    </b-button>
                  </footer>
                </div>
              </div>
              <div class="column is-4">
                <div class="card">
                  <div
                    v-if="$store.state.language == 'es'"
                    class="card-content"
                  >
                    <p class="title is-3">Nivel 3</p>
                    <p class="subtitle is-6">Expande tu campo de visión</p>
                  </div>
                  <div
                    v-if="$store.state.language == 'po'"
                    class="card-content"
                  >
                    <p class="title is-3">Nível 3</p>
                    <p class="subtitle is-6">Expanda seu campo de visão</p>
                  </div>
                  <footer class="card-footer">
                    <b-button
                      type="is-info"
                      @click="setNivel(3)"
                      expanded
                      outlined
                    >
                      <span v-if="$store.state.language == 'po'"> Jogar </span>
                      <span v-if="$store.state.language == 'es'"> Jugar </span>
                    </b-button>
                  </footer>
                </div>
              </div>
              <div class="column is-4">
                <div class="card">
                  <div
                    v-if="$store.state.language == 'es'"
                    class="card-content"
                  >
                    <p class="title is-3">Nivel 4</p>
                    <p class="subtitle is-6">Velocidad y palabras partidas</p>
                  </div>
                  <div
                    v-if="$store.state.language == 'po'"
                    class="card-content"
                  >
                    <p class="title is-3">Nível 4</p>
                    <p class="subtitle is-6">Palavras divididas</p>
                  </div>
                  <footer class="card-footer">
                    <b-button
                      type="is-danger"
                      @click="setNivel(4)"
                      expanded
                      outlined
                    >
                      <span v-if="$store.state.language == 'po'"> Jogar </span>
                      <span v-if="$store.state.language == 'es'"> Jugar </span>
                    </b-button>
                  </footer>
                </div>
              </div>
              <div class="column is-4">
                <div class="card">
                  <div
                    v-if="$store.state.language == 'es'"
                    class="card-content"
                  >
                    <p class="title is-3">Nivel 5</p>
                    <p class="subtitle is-6">Campo de visión avanzado</p>
                  </div>
                  <div
                    v-if="$store.state.language == 'po'"
                    class="card-content"
                  >
                    <p class="title is-3">Nível 5</p>
                    <p class="subtitle is-6">Campo de visão avançado</p>
                  </div>
                  <footer class="card-footer">
                    <b-button
                      type="is-danger"
                      @click="setNivel(5)"
                      expanded
                      outlined
                    >
                      <span v-if="$store.state.language == 'po'"> Jogar </span>
                      <span v-if="$store.state.language == 'es'"> Jugar </span>
                    </b-button>
                  </footer>
                </div>
              </div>
              <div class="column is-4">
                <div class="card">
                  <div
                    v-if="$store.state.language == 'es'"
                    class="card-content"
                  >
                    <p class="title is-3">Nivel 6</p>
                    <p class="subtitle is-6">Doble visión extrema</p>
                  </div>
                  <div
                    v-if="$store.state.language == 'po'"
                    class="card-content"
                  >
                    <p class="title is-3">Nível 6</p>
                    <p class="subtitle is-6">Visão dupla extrema</p>
                  </div>
                  <footer class="card-footer">
                    <b-button
                      type="is-danger"
                      @click="setNivel(6)"
                      expanded
                      outlined
                    >
                      <span v-if="$store.state.language == 'po'"> Jogar </span>
                      <span v-if="$store.state.language == 'es'"> Jugar </span>
                    </b-button>
                  </footer>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
          <div class="column is-4">
            <h1 v-if="$store.state.language == 'es'" class="title is-uppercase">
              personalizado
            </h1>
            <h1 v-if="$store.state.language == 'po'" class="title is-uppercase">
              personalizado
            </h1>

            <section>
              <div
                class="field blockText"
                v-bind:class="{ hideText: showText }"
              >
                <div>
                  <div v-for="linea in nLineas" class="columns" :key="linea">
                    <div
                      v-for="palabra in nPalabras"
                      :key="palabra"
                      v-bind:class="{
                        halfText: partir,
                        twoLines: nLineas > 3 && nLineas < 5,
                        fiveLines: nLineas == 5,
                        textSmall: nPalabras > 3,
                      }"
                      class="readText column"
                    >
                      <h2>RIKUY</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <p v-if="$store.state.language == 'es'">Velocidad</p>
                <p v-if="$store.state.language == 'po'">Rapidez</p>
                <b-field>
                  <b-slider
                    size="is-medium"
                    :min="config.min"
                    :max="config.max"
                    :step="config.step"
                    v-model="velocidad"
                    @input="changeInterval"
                    ticks
                  >
                    <template v-for="val in config.common">
                      <b-slider-tick :value="val" :key="val">{{
                        val
                      }}</b-slider-tick>
                    </template>
                  </b-slider>
                </b-field>
              </div>
              <div class="field">
                <p v-if="$store.state.language == 'es'">Número de Palabras</p>
                <p v-if="$store.state.language == 'po'">Número de palavras</p>
                <b-field>
                  <b-slider
                    size="is-medium"
                    :min="1"
                    :max="5"
                    v-model="nPalabras"
                  >
                    <template v-for="val in [1, 2, 3, 4, 5]">
                      <b-slider-tick :value="val" :key="val">{{
                        val
                      }}</b-slider-tick>
                    </template>
                  </b-slider>
                </b-field>
              </div>
              <div class="field">
                <p v-if="$store.state.language == 'es'">Número de Líneas</p>
                <p v-if="$store.state.language == 'po'">Número de linhas</p>
                <b-field>
                  <b-slider
                    size="is-medium"
                    :min="1"
                    :max="5"
                    type="is-danger"
                    v-model="nLineas"
                  >
                    <template v-for="val in [1, 2, 3, 4, 5]">
                      <b-slider-tick :value="val" :key="val">{{
                        val
                      }}</b-slider-tick>
                    </template>
                  </b-slider>
                </b-field>
              </div>
              <div class="field">
                <b-switch v-model="partir">
                  <p v-if="$store.state.language == 'es'">Partir</p>
                  <p v-if="$store.state.language == 'po'">Dividir</p></b-switch
                >
              </div>
              <div class="field">
                <b-switch type="is-danger" disabled>Plantilla</b-switch>
              </div>
            </section>

            <section>
              <b-button type="is-info" @click="updateConfig()" expanded>
                <span v-if="$store.state.language == 'po'"> Jogar </span>
                <span v-if="$store.state.language == 'es'">
                  Jugar
                </span></b-button
              >
            </section>
          </div>
        </div>
      </b-step-item>
      <b-step-item :label="labels[1]" icon="account">
        <readings @next="nextStep" />
      </b-step-item>
      <b-step-item :label="labels[2]" icon="account-plus">
        <speed-read @next="nextStep" ref="refSpeedRead"></speed-read>
      </b-step-item>
      <b-step-item :label="labels[3]" icon="account-plus">
        <exam @next="nextStep" ref="examRef"></exam>
      </b-step-item>
      <b-step-item :label="labels[4]" icon="account-plus">
        <final @restart="restart" ref="finalStep"></final>
      </b-step-item>
    </b-steps>
  </div>
</template>
<style lang="scss" scoped>
.textSmall {
  font-size: 0.9em !important;
}
.blockText {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  border: 2px solid green;
}
.hideText {
  color: white !important;
  .halfText {
    background: linear-gradient(to top, white 50%, white 50%) !important;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.readText {
  font-size: 2em;
  line-height: 1em;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: inline-block;
  padding-right: 5px;
}
.twoLines {
  font-size: 1em;
}
.fiveLines {
  font-size: 0.9em;
}
.halfText {
  margin: 0;
  background: linear-gradient(to top, white 50%, black 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<script>
// @ is an alias to /src
import SpeedRead from "../components/SpeedRead.vue";
import Readings from "../components/Readings.vue";
import Exam from "../components/Exam.vue";
import Final from "../components/Final.vue";
export default {
  name: "Read",
  components: {
    SpeedRead,
    Exam,
    Readings,
    Final,
  },
  data() {
    return {
      velocidad: 100,
      nPalabras: 1,
      nLineas: 1,
      partir: false,
      planilla: false,
      timer: null,
      showText: true,
      steps: 0,
      config: {},
    };
  },
  beforeMount() {
    this.config = this.$store.state.configRead;
    if (this.$store.state.language == "es") {
      this.labels = [
        "Selecciona tu nivel",
        "Selecciona tu lectura",
        "Lectura rápida",
        "Preguntas",
        "Evaluación",
      ];
    }
    if (this.$store.state.language == "po") {
      this.labels = [
        "Selecione seu nível",
        "Selecione sua leitura",
        "Leitura rápida",
        "Questões",
        "Avaliação",
      ];
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {
    this.changeInterval();
  },
  methods: {
    restart() {
      this.steps = 0;
      this.stepsChange();
    },
    clearReading() {
      this.$refs.refSpeedRead.resetInterval();
    },
    stepsChange() {
      if (this.steps == 0) {
        this.changeInterval();
      }
      if (this.steps == 2) {
        this.clearReading();
      }
      if (this.steps == 3) {
        this.$refs.examRef.getQuestions();
      }
      if (this.steps == 4) {
        this.$refs.finalStep.getData();
      }
    },
    changeInterval() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.showText = !this.showText;
      }, 60000 / this.velocidad);
    },
    setNivel(nivel) {
      let r = Math.random() * 50;
      r = parseInt(r);
      switch (nivel) {
        case 1:
          this.velocidad = 100 + r;
          this.nPalabras = 1;
          this.nLineas = 1;
          this.partir = false;
          break;
        case 2:
          this.velocidad = 200 + r;
          this.nPalabras = 1;
          this.nLineas = 1;
          this.partir = false;
          break;
        case 3:
          this.velocidad = 220 + r;
          this.nPalabras = 2;
          this.nLineas = 1;
          this.partir = false;
          break;
        case 4:
          this.velocidad = 280 + r;
          this.nPalabras = 2;
          this.nLineas = 1;
          this.partir = true;
          break;
        case 5:
          this.velocidad = 300 + r;
          this.nPalabras = 3;
          this.nLineas = 1;
          this.partir = true;
          break;
        case 6:
          this.velocidad = 350 + r;
          this.nPalabras = 3;
          this.nLineas = 2;
          this.partir = true;
          break;

        default:
          break;
      }
      this.updateConfig();
    },
    updateConfig() {
      clearInterval(this.timer);
      console.log("ON");
      this.$store.commit("setConfig", {
        speed: this.velocidad,
        nWords: this.nPalabras,
        nLines: this.nLineas,
        split: this.partir,
      });
      this.steps += 1;
    },
    nextStep() {
      this.steps += 1;
      this.stepsChange();
    },
  },
};
</script>
