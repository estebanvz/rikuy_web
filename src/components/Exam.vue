<template>
  <div class="exam" :key="examKey">
    <b-loading
      :is-full-page="true"
      v-model="loading"
      :can-cancel="true"
    ></b-loading>
    <b-field :label="text.resume" label-position="on-border" type="is-success">
      <b-input v-model="abstract" maxlength="1000" type="textarea"></b-input>
    </b-field>

    <div v-for="(q, i) in questions" :key="i + examKey">
      <quest-a :question="q"></quest-a>
      <hr />
    </div>
    <div class="buttons is-centered">
      <b-button class="is-info" @click="next()"> {{ text.end }} </b-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.exam {
  width: 80%;
  margin: auto;
}
</style>
<script>
import QuestA from "../components/QuestA.vue";
import { APIabstract, APIstartTest } from "../api/Readings";
export default {
  components: {
    QuestA,
  },
  data() {
    return {
      examKey: 1,
      id: null,
      questions: [],
      loading: false,
      text: {},
      abstract: "",
    };
  },
  beforeMount() {
    if (this.$store.state.language == "es") {
      this.text.end = "Finalizar";
      this.text.resume = "Escribe un pequeño resumen (Opcional)";
    }
    if (this.$store.state.language == "po") {
      this.text.end = "Avaliação";
      this.text.resume = "Escreva um breve resumo (Opcional)";
    }
  },
  methods: {
    next() {
      APIabstract(this.$store.state.currentText.id, this.abstract).finally(
        () => {
          this.$emit("next");
        }
      );
    },
    getQuestions() {
      this.examKey += 1;
      this.id = this.$store.state.currentText.id;
      this.loading = true;
      this.questions = [];

      APIstartTest(this.id, this.$store.state.config).then((e) => {
        console.log(e);
        if (e.data != undefined) {
          this.$store.commit("setExam", e.data.exam);
          this.questions = e.data.questions;
          this.questions.forEach((element) => {
            element.question.answers = JSON.parse(element.question.answers);
          });
          this.loading = false;
        }
      });
    },
  },
};
</script>
