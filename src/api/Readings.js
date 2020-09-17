import axios from "axios";
import store from "@/store";

export function APIgetReadings() {
  return axios.get(store.state.session.url + "/readings");
}
export function APIstartGame() {
  if (store.state.session.token != "") {
    return axios.get(store.state.session.url + "/readings");
  } else {
    return axios.post(store.state.session.url + "/readings");
  }
}
export function APIstartTest(id, config) {
  if (store.state.session.token == "") {
    return axios.get(store.state.session.url + "/test", {
      params: {
        id: id,
        speed: config.speed,
        number_words: config.nWords,
        number_lines: config.nLines,
        splited: config.split,
        template_id: 1,
      },
    });
  } else {
    return axios.post(
      store.state.session.url + "/test",
      {
        id: id,
        speed: config.speed,
        number_words: config.nWords,
        number_lines: config.nLines,
        splited: config.split,
        template_id: 1,
      },
      { headers: { Authorization: "Bearer " + store.state.session.token } }
    );
  }
}
export function APIquestion(id, time, user_answer) {
  return axios.put(store.state.session.url + "/questionexams/" + id, {
    time: time,
    user_answer: user_answer,
  });
}
export function APIabstract(id, abstract) {
  return axios.put(store.state.session.url + "/abstract/" + id, {
    abstract: abstract,
  });
}
export function APIfinalizar() {
  if (store.state.session.token != "") {
    return axios.get(store.state.session.url + "/test");
  } else {
    return axios.post(
      store.state.session.url + "/test",
      {},
      { headers: { Authorization: "Bearer " + store.state.session.token } }
    );
  }
}
export function APIcolaboration(reading,questions) {
  return axios.post(
    store.state.session.url + "/readings",
    {
      reading:reading,
      questions:questions,
    },
    { headers: { Authorization: "Bearer " + store.state.session.token } }
  );
}
