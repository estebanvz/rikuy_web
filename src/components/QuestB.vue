<template>
  <div class="quest">
    <div class="field">
      <p class="questText">
        {{ quest }}
      </p>
    </div>
    <section class="answers">
      <div
        v-for="(answer, index) in selectedAnswers"
        :key="index"
        class="field"
      >
        <b-checkbox
          @input="selectedChoices"
          v-model="selectedAnswers[index].selected"
          :native-value="answer.id"
        >
          {{ answer.name }}
        </b-checkbox>
      </div>
    </section>
  </div>
</template>
<script>
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
export default {
  props: ["id", "quest", "answers"],
  data() {
    return {
      selectedAnswers: []
    };
  },
  methods: {
    selectedChoices() {
      this.$emit("picked", { selected: this.selectedAnswers, id: this.id });
    }
  },
  beforeMount() {
    this.answers.forEach(e => {
      this.selectedAnswers.push({ selected: false, name: e.name, id: e.id });
    });
    shuffleArray(this.selectedAnswers);
  }
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
