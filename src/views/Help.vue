<template>
  <div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">My proposal</h1>
        <div class="container">
          <b-field label="Title" label-position="on-border">
            <b-input size="is-small" v-model="title"></b-input>
          </b-field>
          <b-field label="Link" label-position="on-border">
            <b-input size="is-small" v-model="link"></b-input>
          </b-field>
          <b-field label="Author" label-position="on-border">
            <b-input size="is-small" v-model="author"></b-input>
          </b-field>
          <b-field label="Settings" label-position="on-border">
            <b-select v-model="language" placeholder="Language">
              <option value="español">Español</option>
              <option value="português">Portugues</option>
              <option value="english">English</option>
            </b-select>
            <b-select v-model="nivel" placeholder="Nivel">
              <option value="1">Nivel 1</option>
              <option value="2">Nivel 2</option>
              <option value="3">Nivel 3</option>
            </b-select>
          </b-field>
          <b-field label="Abstract" label-position="on-border">
            <b-input
              v-model="abstract"
              maxlength="2000"
              type="textarea"
            ></b-input>
          </b-field>
          <b-field label="Text" label-position="on-border">
            <b-input v-model="text" maxlength="20000" type="textarea"></b-input>
          </b-field>
          <h1 class="title is-4">Questions</h1>
          <div
            class="container mb-6"
            v-for="(quest, index) in questions"
            :key="index"
          >
            <b-field label="Quest" type="is-info" label-position="on-border">
              <b-input size="is-small" v-model="quest.question"></b-input>
            </b-field>
            <b-field
              label="Correct Answer"
              type="is-success"
              label-position="on-border"
            >
              <b-input size="is-small" v-model="quest.correct"></b-input>
            </b-field>
            <b-field
              label="Distracting Answers"
              type="is-danger"
              label-position="on-border"
            >
              <b-taginput size="is-small" v-model="quest.distracting">
              </b-taginput>
            </b-field>
          </div>
          <div class="buttons">
            <b-button
              @click="addQuest()"
              icon-right="plus-circle"
              type="is-info"
              class="mt-2"
              outlined
            >
              Add Quest
            </b-button>
            <b-button
              @click="sendText()"
              icon-right="send"
              type="is-info"
              class="mt-2"
              :disabled="questions.length < 5"
            >
              Send Text
            </b-button>
            <p v-if="questions.length < 5" class="has-text-danger">
              * we need at least 5 questions
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { APIcolaboration } from "../api/Readings";
export default {
  data() {
    return {
      loading: false,
      questions: [
        {
          question: "",
          correct: "",
          distracting: [],
        },
      ],
      text: "",
      abstract: "",
      nivel: "1",
      language: "español",
      author: "",
      link: "",
      title: "",
    };
  },
  methods: {
    sendText() {
      this.loading = true;
      let text = {
        text: this.text,
        abstract: this.abstract,
        nivel: this.nivel,
        language: this.language,
        author: this.author,
        link: this.link,
        title: this.title,
        questions: this.questions,
      };
      APIcolaboration(text)
        .then(() => {
          this.loading = false;
          this.thanks();
        })
        .catch(() => {
          this.sorry();
        });
    },
    sorry() {
      this.$buefy.dialog.alert({
        type: "is-danger",
        title: "Error",
        message: "Our servers are bussy please try later.",
      });
    },
    thanks() {
      this.$buefy.dialog.alert({
        type: "is-info",
        title: "Thank you :)",
        message:
          "Thank you for help us to improve the reading skills of people!",
      });

      this.questions = [
        {
          question: "",
          correct: "",
          distracting: [],
        },
      ];
      this.text = "";
      this.abstract = "";
      this.nivel = "1";
      this.language = "español";
      this.author = "";
      this.link = "";
      this.title = "";
    },
    addQuest() {
      this.questions.push({
        quest: "",
        correct: "",
        distracting: [],
      });
    },
  },
};
</script>

<style></style>
