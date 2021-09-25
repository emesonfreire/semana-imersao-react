import Link from "next/link";
import Image from 'next/image';
import Perfil from '../public/perfil.jpg'

const linkStyle = {
    marginRight: 15
}

const Apresentacao = () => (
    <div>
        <section className="apresentacao1" id="top">
            <div className="max-width">
                <div className="top-content1">
                <Image src={Perfil} className="perfil" alt="" height="300vh" width="280px"/>
                    <div className="text-1">Sou o talento</div>
                    <div className="text-2">que a sua empresa precisa</div>
                    <div className="text-3">Procuro uma oportunidade Front End, você pode me ajudar?😁</div>
                    <a href="mailto:emeson.freire@hotmail.com?subject= posso te ajudar com uma vaga front end">Entrar em Contato</a>
                </div>
            </div>
        </section>
    </div>
);

export default Apresentacao;