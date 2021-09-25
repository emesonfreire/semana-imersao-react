import Link from "next/link";
import Image from 'next/image';
import Perfil from '../public/perfil.jpg'

const linkStyle = {
    marginRight: 15
}

const Sobre = () => (
    <div>
        
        
        
      <section className="services" id="sobre">
            <div className="max-width">
                <h2 className="title">Sobre</h2>
                <div className="apresenta">

                <Image src={Perfil} className="perfil" alt="" height="300vh" width="280px"/>
                    <div className="text-1">Sou o talento</div>
                    <div className="text-2">que a sua empresa precisa</div>
                    <div className="text-3">Procuro uma oportunidade Front End, você pode me ajudar?😁</div>
                    <a href="mailto:emeson.freire@hotmail.com?subject= posso te ajudar com uma vaga front end">Entrar em Contato</a>
                
                </div>
                        <p>😎📢 Emeson Freire, alagoano arretado e paulista de coração! atualmente resido
                     em São Bernardo do Campo-SP, tenho 26 anos e casado a 7, me considero uma pessoa 
                     multipotencial . Minha trajetória acadêmica começa no IFAL com o curso técnico em 
                     agroindústria (alimentos); no IFAL tive a oportunidade de ser bolsista em alguns projetos
                      de extensão sendo um deles: produção de queijo boursin com leite de cabra; logo em 
                      seguida me tornei monitor de informática, e daí minha sede por conhecimento não parou 
                      mais: já cursei engenharia agronômica por 1 ano e meio, pedagogia por 6 meses, fiz curso 
                      profissionalizante no SENAI de mecâncio de máquinas de costura reta e overloque em 2018, 
                      atualmente estou cursando o 4° período de análise e desenvolvimento de sistemas, 
                      participei do Hiring Coders e estou me formando no SENAI como Eletricista.</p>
                    <br/>
                        <p>💻 Minha primeira experiência prática como desenvolvedor Front End foi um teste para
                         estagiário e meu desafio era criar uma copia de uma página web da empresa e assim o 
                         fiz, a partir dessa experiência comecei a gostar da ideia de ser desenvolvedor Front
                          End, em julho de 2021 tive a oportunidade de ser selecionado para participar do 
                          HIRING CODERS e expandir mais meu conhecimento como desenvolvedor Full Stack, das 3 
                          fases atualmente se encontro na #FASE2.</p>
                    <br/>
                    
                                     
                        <p>❤Participo como voluntário de uma organização internacional que ajuda a pessoas a
                             encontrar ajuda para lidar com problemas do dia-a-dia, nessa mesma obra voluntária 
                             tive o prazer trabalhar lado a lado com pessoas de língua espanhola e então estudar 
                             espanhol ,e um marco para mim foi participar ajudando pessoas que falam o idioma 
                             árabe, entender a cultura, estudar o alfabeto e hoje posso dizer que árabe não é 
                             tão difícil como muitos acreditam, consegui decorar o alfabeto e consigo ler muitas 
                             coisas neste idioma. Deseja saber mais sobre esse serviço voluntário? acessa o <a href="https://www.jw.org/pt/testemunhas-de-jeova/">JW.ORG</a></p>
                    <br/>
                        <p>📈📝Estou sempre aberto para novas oportunidades e acredito que qualquer oportunidade 
                            que me é apresentada, sempre irá somar para mim pois a experiência vivida levo para
                             toda a vida e aplico em várias áreas diferentes.</p>
                    <br/><br/>
                        <p>😁🙃😉Fique à vontade para me adicionar no linkedin! é um prazer tê-lo aqui.</p>
                </div>
                </section>
    </div>
);

export default Sobre;