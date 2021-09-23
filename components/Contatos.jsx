import Link from "next/link";

const linkStyle = {
    marginRight: 15
}

const Contatos = () => (
    <div>
      <section className="contact" id="contact">
            <div className="max-width">
            <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">
                        <p>Fique à vontade para entrar em contato comigo por meio das opçoes abaixo!</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Desenvolvedor Front End</div>
                                    <div className="sub-title"><a href="#">Emeson Freire</a> </div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fab fa-whatsapp"></i>
                                <div className="info">
                                    <div className="head">Telefone</div>
                                    <div className="sub-title"><a href="https://web.whatsapp.com/send?phone=5511966927996" target="_blank">(11)9 6692-7996</a></div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">E-mail</div>
                                    <div className="sub-title"><a href="mailto:emeson.freire@hotmail.com?subject= posso te ajudar com uma vaga front end">emeson.freire@hotmail.com</a></div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fab fa-github"></i>
                                <div className="info">
                                    <div className="head">Repositório</div>
                                    <div className="sub-title"><a href="https://github.com/emesonfreire">github.com/emesonfreire</a></div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fab fa-linkedin"></i>
                                <div className="info">
                                    <div className="head">Rede social</div>
                                    <div className="sub-title"><a href="https://www.linkedin.com/in/emesonfreire/">in/emesonfreire/</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Mensagem de Contato</div>
                        <form>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Digite o nome" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Digite o e-mail" required />
                                </div>
                            </div>

                            <div className="field">
                                <input type="text" placeholder="Digite o assunto" required />
                            </div>

                            <div className="field textarea">
                                <input cols="30" rows="10" placeholder="Digite o conteúdo" required/>
                            </div>

                            <div className="button-area">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Contatos;