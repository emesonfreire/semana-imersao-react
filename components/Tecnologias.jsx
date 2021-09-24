import Link from "next/link";
import Image from 'next/image';
import Tecnologia from '../public/logotecnologias.png';
import Bootstramp from '../public/logobootstram.png';
import Mysql from '../public/MySQL-logo.png';
import Github from '../public/logogithub.png';
import Linkedin from '../public/logolinkedin.png';
import Next from '../public/logonextjs.png'



const linkStyle = {
    marginRight: 15
}

const Tecnologias = () => (
    <div>
      <section className="services" id="tecnologias">
            <div className="max-width">
            <h2 className="title">Tecnologias</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            
                            <i className="fas fa-code"></i>
                            <div className="text">
                                 <p>Front End</p>
                                 <Image src={Tecnologia}  className="tecnologia1" alt="logo html5 css js" />
                                 <Image src={Bootstramp} className="tecnologia1" alt="logo bootstrap" />
                                 <Image src={Next} className="tecnologia1" alt="logo bootstrap" />
                            </div>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-database"></i>
                            <div className="text">
                             Banco de Dados
                             <Image src={Mysql} className="tecnologia1" alt="logo bootstrap" />
                            </div>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-user-plus"></i>
                            <div className="text">
                                <p>Redes Sociais </p>
                                <a href="https://github.com/emesonfreire"><Image src={Github} target="_blank" className="tecnologia1"  alt=""/></a>
                                <a href="https://www.linkedin.com/in/emesonfreire/" target="_parent"  ><Image src={Linkedin} className="tecnologia1" alt="" /></a>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                </section>
    </div>
);

export default Tecnologias;