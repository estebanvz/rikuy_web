<template>
  <div class="quest">
    <quest-a :quest="quest" :answers="answers" @picked="show" :id="1"></quest-a>
    <quest-b :quest="quest" :answers="answers" @picked="show" :id="2"></quest-b>
  </div>
</template>
<script>
// import api from "../router/questions.js";
import QuestA from "../components/QuestA.vue";
import QuestB from "../components/QuestB.vue";
export default {
  name: "Quest",
  components: {
    QuestA,
    QuestB
  },
  data() {
    return {
      quest: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, possimus
        doloremque. Ea aliquid labore nam, inventore odio adipisci soluta
        deserunt architecto tempore fugit ratione eveniet cumque. Est magni
        totam omnis.`,
      answers: [
        { name: "Default1", id: 1 },
        { name: "Default2", id: 2 }
      ]
    };
  },
  mounted() {
    // api.getSomeData().then(r => {
    //   console.log(r);
    // });
  },
  methods: {
    show(value) {
      console.log(value);
    }
  }
};
</script>
