<template>
  <div>
    <div class="read columns is-centered">
      <div class="column is-4">
        <section v-if="playing">
          <div class="field blockText">
            <div>
              <div v-for="(words, i) in currentWords" :key="i">
                <div
                  v-bind:class="{
                    words1: config.nWords==1,
                    words2: config.nWords==2,
                    words3: config.nWords==3,
                    words4: config.nWords==4,
                    words5: config.nWords==5,
                    halfText: config.split,
                    twoLines: config.nLines > 3 && config.nLines < 5,
                    fiveLines: config.nLines == 5,
                  }"
                  class="readText column"
                >
                  <span v-for="(e, i) in words" :key="i">
                    {{ e }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-else class="blockText">
          <b-button @click="start" type="is-success">{{text.play}}</b-button>
        </section>
        <section class="pt-3">
          <b-button @click="next" type="is-warning" :disabled="$store.state.currentText.id==null">{{text.exam}}</b-button>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blockText {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border: 2px solid green;
}
.words1 {
  font-size: 2.5em;
  line-height: 1em;
}
.words2 {
  font-size: 2.0em;
  line-height: 1em;
}
.words3 {
  font-size: 1.5em;
  line-height: 1em;
}
.words4 {
  font-size: 1.3em;
  line-height: 1em;
}
.words5 {
  font-size: 1.45em;
  line-height: 1em;
}
.readText {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: inline-block;
  padding-right: 5px;
  padding-bottom: 0px;
  padding-top: 0px;
}
.twoLines {
  font-size: 1em;
}
// .fiveLines {
//   font-size: 1.7em;
// }
.halfText {
  margin: 0;
  background: linear-gradient(to top, white 43%, black 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "Read",
  data() {
    return {
      planilla: false,
      timer: null,
      showText: true,
      words: [],
      currentWords: [],
      currentIndex: 0,
      playing: false,
      texto: this.$store.state.currentText.text,
      config: this.$store.state.config,
      text:{}
    };
  },
  beforeMount(){
    if(this.$store.state.language=="es"){
      this.text.play="Comenzar"
      this.text.exam="Preguntas"
    }
    if(this.$store.state.language=="po"){
      this.text.play="Començar"
      this.text.exam="Questões"
    }
  },
  beforeDestroy() {
    this.resetInterval();
  },
  methods: {
    next() {
      this.$emit("next");
    },
    start() {
      (this.texto = this.$store.state.currentText.text), (this.playing = true);
      this.config = this.$store.state.config;

      this.words = this.texto.replace(/\s\s+/g, " ").split(" ");
      this.changeInterval();
    },
    resetInterval() {
      this.playing = false;
      this.currentIndex = 0;
      this.currentWords = [];
      clearInterval(this.timer);
    },
    changeInterval() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.currentIndex < this.words.length) {
          this.currentWords = [];
          for (
            let j = 0;
            j < this.config.nLines && this.currentIndex < this.words.length;
            j++
          ) {
            let tmp = [];
            for (
              let i = 0;
              i < this.config.nWords && this.currentIndex < this.words.length;
              i++
            ) {
              tmp.push(this.words[this.currentIndex]);
              this.currentIndex += 1;
            }
            this.currentWords.push(tmp);
          }
        } else {
          this.playing = false;
          this.currentIndex = 0;
          this.currentWords = [];
          clearInterval(this.timer);
        }
      }, 60000 / this.config.speed);
    },
  },
};
</script>
