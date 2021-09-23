import Link from "next/link";

const linkStyle = {
    marginRight: 15
}

const Topo = () => (
    <div>
        <section className="top" id="top">
            <div className="max-width">
                <div className="top-content">
                <img src="../public/perfil.jpg" class="perfil" alt=""/>
                    <div class="text-1">Sou o talento</div>
                    <div class="text-2">que a sua empresa precisa</div>
                    <div class="text-3">Procuro uma oportunidade Front End, você pode me ajudar?😁</div>
                    <a href="mailto:emeson.freire@hotmail.com?subject= posso te ajudar com uma vaga front end">Entrar em Contato</a>
                </div>
            </div>
        </section>
    </div>
);

export default Topo;