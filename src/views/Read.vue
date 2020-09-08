<template>
  <div>
    <b-steps v-model="steps" :has-navigation="false" @input="stepsChange()">
      <b-step-item
        :change="updateConfig"
        label="Seleciona tu nivel"
        icon="account-key"
      >
        <div class="read columns is-centered is-vcentered">
          <div class="column is-4">
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
                <b-field label="Velocidad">
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
                <b-field label="Número de Palabras">
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
                <b-field label="Número de Líneas">
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
                <b-switch v-model="partir">Partir</b-switch>
              </div>
              <div class="field">
                <b-switch type="is-danger" disabled>Plantilla</b-switch>
              </div>
            </section>

            <section>
              <b-button type="is-info" @click="updateConfig()" expanded
                >Jugar</b-button
              >
            </section>
          </div>
        </div>
      </b-step-item>
      <b-step-item label="Seleciona tu lectura" icon="account">
        <readings @next="nextStep" />
      </b-step-item>
      <b-step-item label="Comienza a leer" icon="account-plus">
        <speed-read @next="nextStep" ref="refSpeedRead"></speed-read>
      </b-step-item>
      <b-step-item label="Preguntas" icon="account-plus">
        <exam @next="nextStep" ref="examRef"></exam>
      </b-step-item>
      <b-step-item label="Puntaje" icon="account-plus">
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
      if(this.steps == 4){
        this.$refs.finalStep.getData();
      }
    },
    changeInterval() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.showText = !this.showText;
      }, 60000 / this.velocidad);
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
