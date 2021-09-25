import Link from "next/link";

const linkStyle = {
    marginRight: 15
}

const InfoAcademico = () => (
    <div>
      <section className="services" id="info-academico">
            <div className="max-width">
            <h2 className="title">Informações Acadêmicas</h2>
                        <p>📚 Instituição : Anhanguera</p>
                        <p>💻 Curso : SUPERIOR EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
                        <p>conclusão prevista: Dezembro de 2021</p>
                        <br/>
                        <p>📚 Intituição: INSTITUTO FEDERAL DE ALAGOAS</p>
                        <p>🍽 Curso: Técnico em alimentos(Agroindústria)</p>
                        <p>Conclusão: Fevereiro de 2015</p>
                        <br/>
                        <p>📚Intituição: SENAI</p>
                        <p>🔌 Curso: Eletricista Predial</p>
                        <p>Conclusão: Setembro de 2021</p>
                        <br/>
                        <p>📚 Intituição: SENAI</p>
                        <p>🛠 Curso: Mecânico de Máquinas industriais</p>
                        <p>Conclusão: Julho de 2018</p>
                </div>
                </section>
    </div>
);

export default InfoAcademico;