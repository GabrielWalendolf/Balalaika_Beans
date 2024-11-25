// Componentes Vue.js
const Home = {
    template: `
        <section class="text-center" style="padding: 80px 0">
            <h1 style="color: #3d3bf3">Bem-vindo à Balalaika Beans</h1>
            <p>O melhor café russo, direto para o seu paladar, mantendo a tradição desde 29 de dezembro de 1916.</p>
        </section>

        <section class="container text-center my-5">
            <h2 style="color: #9694ff">Sobre nós</h2>
            <p>Descubra mais sobre nossa história e o que faz nosso café especial.</p>
        </section>
    `,
};

const About = {
    template: `
        <div class="about-card">
            <h2 class="text-center">Nossa História</h2>
            <div class="text-container">
                <p>
                    A Balalaika Beans nasceu como umas das invenções misteriosas de Grigori Rasputin em 29 de dezembro de 1916. Nós continuamos a missão mística das Balalaika Beans, de proporcionar o melhor café para aqueles que apreciam qualidade e sabor. Faz parte na nossa tradição a lenda de que as Balalaikas Beans, possuem uma magia própria colocada por Rasputin, para maximizar o sabor, fragância e experiência interdimensional de ingerir nossas Balalaika Beans.
                </p>
                <p>
                    Nosso processo de seleção de grãos é minucioso, seguindo a tradição escrita nos grimórios escritos pelo o próprio Grigori Rasputin, no ápice da sua feitiçaria culinária. Garantindo um café único e especial. Aqui, cada grão conta uma história. Infelizmente, Rasputin não pode continuar sua criação, devido ao sua terceira e última tentativa de assassinato em 30 de dezembro 1916. Mas nós continuamos seu legado e missão, com o objetivo de propocionar o mesmo sabor que já experiênciamos, em nossa primeira degustação das Balalaika Beans.
                </p>
            </div>
        </div>
    `,
};

const Contact = {
    template: `
        <section class="contact-section text-center">
            <div class="container">
                <h2>Entre em Contato</h2>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" placeholder="Seu nome" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Seu email" />
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensagem</label>
                        <textarea class="form-control" id="message" rows="3" placeholder="Sua mensagem"></textarea>
                    </div>
                    <button type="submit" class="btn">Enviar</button>
                </form>
            </div>
        </section>
    `,
};

// Instância do Vue
const app = Vue.createApp({
    data() {
        return {
            currentPage: "home", // Página inicial
        };
    },
    components: {
        home: Home,
        about: About,
        contact: Contact,
    },
});

// Montar o Vue na Div #app
app.mount("#app");
