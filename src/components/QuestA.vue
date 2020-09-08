<template>
  <div class="quest">
    <div class="card">
      <div class="card-content">
        <b-loading
          :is-full-page="false"
          v-model="isLoading"
          :can-cancel="false"
        ></b-loading>

        <div class="field">
          <p class="questText">
            {{ question.question.quest }}
            <b-icon
              v-if="answered && correct == true"
              type="is-success"
              icon="check"
            ></b-icon>
            <b-icon
              v-if="answered && correct == false"
              type="is-danger"
              icon="close"
            ></b-icon>
          </p>
        </div>
        <section class="answers">
          <div v-for="(answer, index) in answersT" :key="index" class="field">
            <b-radio
              @input="selectedChoice"
              v-model="selectedAnswer"
              :native-value="answer"
              :disabled="answered"
            >
              {{ answer }}
            </b-radio>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
import { APIquestion } from "../api/Readings";
export default {
  props: ["question"],
  data() {
    return {
      selectedAnswer: null,
      answersT: [],
      isLoading: false,
      answered: false,
      correct: null,
    };
  },
  methods: {
    selectedChoice(idSelected) {
      // this.$emit("picked", { selected: idSelected, id: this.id });
      this.isLoading = true;
      APIquestion(this.question.id, this.question.time, idSelected).then((e) => {
        console.log(e);
        if (e.data != undefined) {
          e.data;
          this.correct = e.data.correct;
        }
        this.answered = true;
        this.isLoading = false;
        this.$store.commit("setExam", e.data.exam);
      });
    },
  },
  beforeMount() {
    this.question.question.answers.forEach((element) => {
      this.answersT.push(element);
    });
    shuffleArray(this.answersT);
  },
};
</script>
<style lang="scss" scoped>
.quest {
  text-align: left;
  .answers {
    left: 0px;
  }
}
</style>
