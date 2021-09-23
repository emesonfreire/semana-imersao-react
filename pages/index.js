import Head from 'next/head';
import Contatos from '../components/Contatos';
import InfoAcademico from '../components/InfoAcademico';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import Sobre from '../components/Sobre';
import Tecnologias from '../components/Tecnologias';
import Topo from '../components/Topo';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Cesar - Celke" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Emeson - Home</title>
            </Head>
            <Menu />
            <Topo/>
            <Sobre/>
            <InfoAcademico/>
            <Tecnologias/>
            <Contatos/>
            <Rodape/>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export default Home;