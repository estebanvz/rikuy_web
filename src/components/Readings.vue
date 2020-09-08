<template>
  <div class="columns is-multiline is-centered">
    <div
      class="column is-4"
      @click="setText(reading)"
      v-for="(reading, index) in readings"
      :key="index"
    >
      <div class="card">
        <div class="card-content">
          <div class="media mb-1">
            <div class="media-content">
              <!-- <p class="title is-5 has-text-centered is-uppercase mb-0">{{ reading.title }}</p> -->
              <b-button type="is-info is-uppercase mb-1" expanded focused>{{
                reading.title
              }}</b-button>
              <a :href="reading.link">{{ reading.author }}</a>
            </div>
          </div>
          <div class="content mb-2">
            {{ reading.abstract }}
          </div>
          <b-taglist class="center">
            <b-tag type="is-primary">Nivel {{ reading.level }}</b-tag>
            <b-tag type="is-success">{{ reading.topic.name }}</b-tag>
            <b-tag type="is-warning">Palabras: {{ reading.words }}</b-tag>
            <b-tag type="is-info is-light">{{ reading.language }}</b-tag>
          </b-taglist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { APIgetReadings } from "../api/Readings";
export default {
  data() {
    return {
      readings: [],
    };
  },
  beforeMount() {
    this.readings = this.$store.state.readings;
    APIgetReadings().then((e) => {
      if (e.data != undefined) {
        this.$store.state.readings = e.data;
        this.readings = this.$store.state.readings;
      }
    });
  },
  methods: {
    setText(text) {
      this.$store.commit("setText", text);
      this.$emit("next");
    },
  },
};
</script>
<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
}
.card {
  cursor: pointer;
}
</style>
