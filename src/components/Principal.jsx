import styles from "../css/Principal.module.css"
export default function Principal() {
    return (
        <body>
            <main>
                <section className={styles.novidades}>
                    <div className={styles.parte_cima}>
                        <h2 className={styles.titulos}>Novidades</h2>
                        <a className={styles.ver_todos} href="../VariosProdutos/Produtos.html">VER TODOS :</a>
                    </div>
                    <div className={styles.produto}>
                        <a href="../ProdutoSimples/compra-gabinete.html">
                            <div className={styles.novidades_produto}>
                                <img src=" ../src/imagens/produtos/produto-gabinete.webp" alt="gabinete" className={styles.novidade_produto_imagem}/>
                                    <div className={styles.novidade_produto_descricao}>Gabinete Gamer Redragon Brawn, Mid Tower, Vidro Temperado, Black, Sem fonte, Sem Fan, GC-500</div>
                                    <div className={styles.preco}>R$ 349,99</div>
                                    <div className={styles.metodo_pagamento}>À vista no pix</div>
                                    <a href="../html/carrinho.html"><button className={styles.novidade_produto_botao}>Comprar</button></a>
                            </div>
                        </a>
                        <a href="#">
                            <div className={styles.novidade_produto}>

                                <img src=" ../src/imagens/produtos/produto-placa mae.webp" alt="placa mae" className={styles.novidade_produto_imagem}/>
                                    <div className={styles.novidade_produto_descricao}>Placa Mãe Biostar B560MX-E PRO, Chipset B560, Intel LGA 1200, mATX, DDR4</div>
                                    <div className={styles.preco}>R$ 559,99</div>
                                    <div className={styles.metodo_pagamento}>À vista no pix</div>
                                    <a href="https://google.com"><button className={styles.novidade_produto_botao}>Comprar</button></a>
                            </div>
                        </a>
                        <div className={styles.novidade_produto}>
                            <a href="#">
                                <img src=" ../src/imagens/produtos/produto-processador.jpg" alt="processador" className={styles.novidade_produto_imagem}/>
                                    <div className={styles.novidade_produto_descricao}>Processador AMD Ryzen 5 4600G 3.7GHz (4.2GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, 100-100000147BOX</div>
                                    <div className={styles.preco}>R$ 489,99</div>
                                    <div className={styles.metodo_pagamento}>À vista no pix</div>
                                    <a href="https://google.com"><button className={styles.novidade_produto_botao}>Comprar</button></a>
                            </a>
                        </div>
                        <a href="#">
                            <div className={styles.novidade_produto}>
                                <img src=" ../src/imagens/produtos/produto-monitor.jpg" alt="monitor" className={styles.novidade_produto_imagem}/>
                                    <div className={styles.novidade_produto_descricao}>Monitor Gamer Samsung T350, 22 pol, Full HD, IPS, HDMI/VGA, LF22T350FHLMZD</div>
                                    <div className={styles.preco}>R$ 899,99</div>
                                    <div className={styles.metodo_pagamento}>À vista no pix</div>
                                    <a href="https://google.com"><button className={styles.novidade_produto_botao}>Comprar</button></a>
                            </div>
                        </a>
                    </div>
                </section>

                <section>
                    <h2 className={styles.titulos}>Categorias</h2>
                    <div id="categorias">
                        <div className={styles.categorias_individual}>
                            <p>Hardware</p>
                            <a href="#"><img src=" ../src/imagens/categorias/hardware.webp" alt="hardware" className={styles.categorias_individual_imagem}/></a>

                        </div>
                        <div className={styles.categorias_individual}>
                            <p>Periféricos</p>
                            <a href="#"><img src=" ../src/imagens/categorias/mouse.jpg" alt="perifericos" className={styles.categorias_individual_imagem}/></a>

                        </div>
                        <div className={styles.categorias_individual}>
                            <p>Jogos</p>
                            <a href="#"><img src=" ../src/imagens/categorias/games.jpg" alt="games" className={styles.categorias_individual_imagem}/></a>

                        </div>
                        <div className={styles.categorias_individual}>
                            <p>Computador</p>
                            <a href="#"><img src=" ../src/imagens/categorias/computador.jpg" alt="computador" className={styles.categorias_individual_imagem}/></a>

                        </div>
                    </div>
                </section>
            </main>
            <script src="https://kit.fontawesome.com/ebb52b10e0.js" crossorigin="anonymous"></script>
            <script src="script.js"></script>
        </body>
    )
}