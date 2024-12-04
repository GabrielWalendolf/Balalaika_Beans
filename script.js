// script.js
import Home from './components/Home.js';
import Coffees from './components/Coffees.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

// Instância do Vue
const app = Vue.createApp({
    data() {
        return {
            currentPage: "home", // Página inicial
        };
    },
    components: {
        home: Home,
        coffees: Coffees,
        about: About,
        contact: Contact,
    },
});

// Montar o Vue na Div #app
app.mount("#app");
