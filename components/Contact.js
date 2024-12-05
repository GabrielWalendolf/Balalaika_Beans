const Contact = {
    data() {
        return {
            name: '',
            email: '',
            opiniao: '',
            message: '',
            messages: []
        };
    },
    template: `
        <section class="contact-section text-center">
            <div class="container">
                <h2>Entre em Contato</h2>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Seu nome" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="Seu email" />
                    </div>
                    <div class="mb-3">
                        <label for="opiniao" class="form-label">Qual a sua opinião sobre Grigori Rasputin?</label>
                        <input type="text" class="form-control" id="opiniao" v-model="opiniao" placeholder="Sua opinião" />
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensagem</label>
                        <textarea class="form-control" id="message" v-model="message" rows="3" placeholder="Sua mensagem"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
                <div class="mt-5">
                    <h3>Mensagens Enviadas:</h3>
                    <ul>
                        <li v-for="(msg, index) in messages" :key="index">
                            <strong>{{ msg.name }}</strong> ({{ msg.email }}) - {{ msg.opiniao }}
                            <p>{{ msg.message }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `,
    methods: {
        submitForm() {
            const newMessage = {
                name: this.name,
                email: this.email,
                opiniao: this.opiniao,
                message: this.message
            };
            this.messages.push(newMessage);
            localStorage.setItem('messages', JSON.stringify(this.messages));
            this.resetForm();
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.opiniao = '';
            this.message = '';
        },
        loadMessages() {
            const storedMessages = localStorage.getItem('messages');
            if (storedMessages) {
                this.messages = JSON.parse(storedMessages);
            }
        }
    },
    mounted() {
        // Limpa as mensagens ao abrir o site novamente
        localStorage.clear();
        this.loadMessages();
    }
};
export default Contact;
