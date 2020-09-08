import axios from "axios";
import store from "@/store";

export function APIgetData() {
  if (store.state.session.token == "") {
    return axios.get(store.state.session.url + "/data");
  } else {
    return axios.post(
      store.state.session.url + "/data",
      {},
      { headers: { Authorization: "Bearer " + store.state.session.token } }
    );
  }
}
