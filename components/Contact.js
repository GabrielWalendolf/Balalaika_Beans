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
                        <label for="message" class="form-label">Qual a sua opinião sobre Grigori Rasputin?</label>
                        <input type="text" class="form-control" id="opiniao" placeholder="Sua opinião"></textarea>
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
export default Contact;