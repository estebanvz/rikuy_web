<template>
  <div class="exam" :key="examKey">
    <br />
    <br />
    <div v-for="(q, i) in questions" :key="i + examKey">
      <quest-a :question="q"></quest-a>
      <hr />
      <b-loading
        :is-full-page="false"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
    </div>
    <div class="buttons is-centered">
      <b-button class="is-info" @click="next()"> Finalizar </b-button>
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
import { APIstartTest } from "../api/Readings";
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
    };
  },
  methods: {
    next() {
      this.$emit("next");
    },
    getQuestions() {
      this.examKey += 1;
      this.id = this.$store.state.currentText.id;
      this.loading = true;
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
