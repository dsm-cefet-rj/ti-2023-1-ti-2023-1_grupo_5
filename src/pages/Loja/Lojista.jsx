import styles from "./Lojista.module.css"
import Produto from "../../components/Produto/Produto"
import { Navigate } from "react-router-dom"
export default function Lojista() {
    const loja = {
        nome: "loja 1",
        endereco: "rua bartolomeu 123",
        cnpj: "99999-99999",
        telefone: "(21) 3333-3333",
        email: "loja1@loja.com",
        produtos: [
            {
                id: "1",
                img: "../../public/images/produtos/produto-gabinete.webp",
                tipo: "Gabinete",
                descricao: "Gabinete Gamer Redragon Brawn",
                preco: 349,
                caracteristicas: "Marca: Rise Mode, Modelo: Gabinete Rise Mode GLASS 06X BLACK – SEM FANS Especificações:Part Number: RM-CA-06X-FB, Cor: Preto, Dimensões (L x W x H): L 365mm x W 200mm x H 455mm, Fans: Suporte para 6 fans (fans não inclusos),* Produto não acompanha fans, imagem ilustrativa ",
            },
            {
                id: "2",
                img: "../../public/images/produtos/produto-placa mae.webp",
                tipo: "Placa Mãe",
                descricao: "Placa Mãe Biostar B560MX-E PRO",
                preco: 559,
                caracteristicas: "Características:- Marca: MSI- Modelo: B560M PRO-E CPU:- Suporta Processadores Intel Core de 10ª Geração, Processadores Intel Core de 11ª Geração, Processadores Pentium Gold e Celeron"
            },
            {
                id: "3",
                img: "../../public/images/produtos/produto-processador.jpg",
                tipo: "Processador",
                descricao: "Processador AMD Ryzen 5 4600G 3.7GHz",
                preco: 489,
                caracteristicas: "Plataforma: Computador de mesa | Família de produto: AMD Ryzen Processors | Linha de produto: D Ryzen 5 4000 G-Series Desktop Processors with Radeon™ Graphics | Nº de núcleos de CPU: 6 | Nº de threads: 12 | Clock de Max Boost: Até 4.2GHz | Clock básico: 3.7GHz"
            },
            {
                id: "4",
                img: "../../public/images/produtos/produto-monitor.jpg",
                tipo: "Monitor",
                descricao: "Monitor Gamer Samsung T350",
                preco: 899,
                caracteristicas: "Monitor Samsung Gamer 22 Fhd 75hz Hdmi Vga Freesync Preto Série T350 - Lf22t350fhlmzd"
            }
        ]
    }
    //const loja = null;
    if (loja != null) {
        return (
            <div className={styles.loja}>
                <div className={styles.campo_info}>
                    <h1>{loja.nome}</h1>
                    <div>{loja.endereco}</div>
                    <div>{loja.cnpj}</div>
                    <div>{loja.telefone}</div>
                    <div>{loja.email}</div>
                </div>
                <h1>Produtos</h1>
                <div className={styles.campo_produtos}>
                    {loja.produtos.map((prod) => <Produto produto={prod} key={prod.id} />)}
                </div>
            </div>
        )
    }else{
        return ( <Navigate to="/error"/> )
    }
}