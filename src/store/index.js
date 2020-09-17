import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "po",
    session: {
      url: "https://api.rikuy.eyachay.com/api",
      user: {},
      token: "",
    },
    config: {
      speed: 100,
      nWords: 1,
      nLines: 1,
      split: false,
    },
    configRead: {
      speed: [100, 200, 300, 400, 500],
      min: 100,
      max: 500,
      step: 50,
      common: [100, 300, 500],
    },
    currentExam: {
      score: 0.0,
      total: 0.0,
    },
    currentText: {
      id: 1,
      title: "",
      author: "",
      text: "",
      abstract: "",
      topic: "",
      level: "",
      complexity: "",
      words: "",
    },
    readings: [
      {
        id: 1,
        title: "Natureza",
        author: "Camila Pereira De Farias",
        text: `Natureza, uma palavra muito grande, que envolve tudo o que existe ao redor. É o grande cenário da vida – o que herdamos e o que já existia, mesmo sem a ação humana. A natureza está no Universo e é feita de água, de terra, de minérios, de vegetações. Ela é nossa moldura. É onde começa e termina.
        Mas o que ela representa? Onde principia? Como a paisagem espelha e reflete nosso olhar, nosso sentir, nosso pensar?
    Artistas de todos os tempos e lugares sempre perseguiam questões assim, criando suas próprias interpretações para o sentido da natureza.
        Já maduro, vivendo em sua casa em Giverny, cercada de belos e vastos jardins, Monet confessou que durante toda a sua vida teve um único desejo: “mesclar-se o mais estritamente possível com a natureza”. Foi justamente o que ele conseguiu ao pintar suas séries de ninféias ou nenúfares, tipos de plantas aquáticas.
        Monet não queria especificar as flores e folhas que retratava com precisão, mas sim propor um clima de natureza, pintando luzes e sombras, claridade e escuridão, folhagens e seus reflexos.
        Van Gogh, um dos maiores nomes da arte ocidental, confere uma energia emocional a suas telas como nenhum outro artista. Sua maneira de pintar os ciprestes é manifestada por pinceladas nervosas, retorcidas, curvas, entrelaçadas. Ciprestes são árvores verdes-escuras, cuja estrutura é composta de pequenas e numerosas agulhas. Na pintura, eles lembram chamas e parecem adquirir vida. As nuvens também se retorcem e às vezes a paisagem parece prestes 
        a desabar.`,
        abstract:
          "Natureza, uma palavra muito grande, que envolve tudo o que existe ao redor.",
        topic: "Natureza",
        level: "Basic",
        words: "249",
        language: "português",
        link:
          "https://acessaber.com.br/atividades/interpretacao-de-texto-natureza-4o-ano/",
      },
      {
        id: 2,
        title: "Aconchego aprende uma palavra nova",
        author: "Helia Pereira",
        text: ` – Comida! Comida! – grita a pequena filhote Aconchego toda vez que está com fome. Como neste momento.

        A mãe dela, a tucano Solar, adora os piados de aconchego, mas ela gostaria que Aconchego aprendesse outras palavras também.
    
        É hora do almoço e Aconchego está na cadeirinha de bebê.
    
        – Comida! Comida! – ela pia.
    
        – Você consegue dizer “sementinhas”? – pergunta Solar, mostrando para Aconchego uma colher cheia de sementes.
    
        – Comida! Comida! – Aconchego pia ainda mais alto.
    
        Solar dá algumas sementes a Aconchego. Aconchego fica calada enquanto as mastiga.
    
        – Comida! Comida! – Aconchego pia novamente, assim que esvazia a boca.
    
        – Aconchego, você poderia pelo menos dizer “por favor”? – pede Solar, não tão paciente quanto antes.
    
        – Pavor! Pavor! – Aconchego grita estridente. Então, ela inclina a cabeça e pia – Comida!
    
        – Não, não “pavor”, Aconchego, você consegue dizer “por favor”? – Solar ri, pegando mais sementes.
    
        Aconchego fica tão agitada que começa a bater as asinhas. Uma delas bate na colher e as sementes voam todas pelo chão.
    
        – Ai, Aconchego, que bagunça! – Solar suspira. Ela rapidamente varre as sementes.
    
        Aconchego observa tudo isso quieta. Quando ela abre a boca para dizer alguma coisa. Solar rapidamente diz:
    
        – Comida, por favor! Comida, por favor!
    
        A boca de Aconchego se fecha e ela fica observando Solar por um momento. Então, ela diz:
    
        – Comida, por favor! Comida, por favor!
    
        – Aconchego, você conseguiu! – entoa Solar, toda sentimental.
    
        – Comida, por favor! Comida, por favor! – pia Aconchego.
    
        E Solar a alimenta, com um grande sorriso.`,
        abstract: "Comida! Comida! – Aconchego pia ainda mais alto.",
        topic: "Comida",
        level: "Básico",
        language: "português",
        words: "263",
        link:
          "https://acessaber.com.br/atividades/interpretacao-de-texto-aconchego-aprende-uma-palavra-nova-4o-ano/",
      },
    ],
  },
  mutations: {
    setConfig(state, config) {
      state.config = config;
    },
    setText(state, text) {
      state.currentText = text;
    },
    setExam(state, exam) {
      state.currentExam = exam;
    },
    setToken(state, token) {
      state.session.token = token;
    },
    setUser(state, user) {
      state.session.user = user;
    },
  },
  actions: {
    setStorage(context) {
      localStorage.setItem("token", context.state.session.token);
      localStorage.setItem("user", JSON.stringify(context.state.session.user));
    },
    loadStorage(context) {
      if (
        localStorage.getItem("token") != null &&
        localStorage.getItem("user") != null
      ) {
        context.commit("setToken", localStorage.getItem("token"));
        context.commit("setUser", JSON.parse(localStorage.getItem("user")));
      }
    },
  },
  modules: {},
});
