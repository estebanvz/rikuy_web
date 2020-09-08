import axios from "axios";
import store from "@/store";

export function APIregister(name, lastname, email, password, password_c) {
  return axios
    .post(store.state.session.url + "/register", {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      password_c: password_c,
    })
    .catch(() => alert("Servidor ocupado vuelva a intentar."));
}

export function APIlogin(email, password) {
  return axios
    .post(store.state.session.url + "/login", {
      email: email,
      password: password,
    })
    .catch(() => alert("Servidor ocupado vuelva a intentar."));
}

export function APIuser() {
  return axios
    .get(store.state.session.url + "/user", {
      headers: {
        Authorization: "Bearer " + store.state.session.token,
      },
    })
    .then((e) => {
      if (e.data != undefined) {
        store.state.session.user = e.data.success;
        store.dispatch("setStorage");
      }
    })
    .catch((e) => {
      console.log(e);
      localStorage.clear();
    });
}
