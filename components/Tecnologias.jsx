import Link from "next/link";

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
                                <img src="../public/logo-3-tecnologias.png" className="tecnologia1" alt="logo html5 css js" />
                                <img src="../public/logo-bootstram.png" className="tecnologia1" alt="logo bootstrap" />
                                <img src="../public/logo-nextjs.png" className="tecnologia1" alt="logo bootstrap" />
                            </div>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-database"></i>
                            <div className="text">
                             Banco de Dados
                             <img src="../public/MySQL-logo.png" className="tecnologia1" alt="logo bootstrap" />
                            </div>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-user-plus"></i>
                            <div className="text">
                                <p>Redes Sociais </p>
                                <a href="https://github.com/emesonfreire"><img src="../public/logo-github.png" target="_blank" className="tecnologia1"  alt=""/></a>
                                <a href="https://www.linkedin.com/in/emesonfreire/" target="_parent"  ><img src="../public/logo-linkedin.png" className="tecnologia1" alt="" /></a>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                </section>
    </div>
);

export default Tecnologias;