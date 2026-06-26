/**
 * Conteúdo das páginas legais (Privacidade, Cookies, Termos).
 *
 * Texto preliminar redigido com os dados reais da empresa. Recomenda-se revisão
 * por advogado antes de considerar a versão definitiva.
 *
 * Estrutura: LEGAL_CONTENT[idioma][pagina] = { sections: [{ title, body[], table? }] }
 * Idiomas ainda sem tradução fazem fallback para "pt".
 */

const COMPANY = "Escala Eximia Engenharia, Lda.";
const ADDRESS = "Rua das Orquídeas, nº 2, 2845-064 Amora";
const NIPC = "516 114 727";
const EMAIL = "geral@eeengenharia.pt";

const pt = {
    privacy: {
        sections: [
            {
                title: "Responsável pelo tratamento",
                body: [
                    "A presente Política de Privacidade aplica-se ao website eeengenharia.com e descreve como são tratados os dados pessoais dos seus utilizadores.",
                    `O responsável pelo tratamento é a ${COMPANY}, com sede na ${ADDRESS}, titular do NIPC ${NIPC} (doravante "Eeengenharia").`,
                    `Para qualquer questão relativa a dados pessoais, pode contactar-nos através do email ${EMAIL}.`,
                ],
            },
            {
                title: "Dados que recolhemos",
                body: [
                    "Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto, nomeadamente: nome, endereço de email, número de telefone, tipo de obra pretendida e descrição do projeto.",
                    "Não recolhemos dados sensíveis nem dados de menores de forma intencional.",
                ],
            },
            {
                title: "Finalidades e fundamento legal",
                body: [
                    "Os dados são utilizados exclusivamente para responder a pedidos de orçamento e de informação, bem como para o eventual seguimento comercial daí decorrente.",
                    "O fundamento legal é o consentimento do titular (artigo 6.º, n.º 1, alínea a) do RGPD), prestado no envio do formulário, e o interesse legítimo na resposta a contactos comerciais.",
                ],
            },
            {
                title: "Conservação dos dados",
                body: [
                    "Os dados são conservados pelo período necessário ao cumprimento das finalidades descritas, sendo eliminados quando deixem de ser necessários ou logo que o titular solicite a sua eliminação.",
                ],
            },
            {
                title: "Subcontratantes e partilha de dados",
                body: [
                    "O envio do formulário é processado através do serviço Web3Forms, que atua como subcontratante e encaminha as mensagens para o nosso email. Os dados não são vendidos nem partilhados com terceiros para fins de marketing.",
                    "Utilizamos ainda o Google Analytics 4 para análise estatística da utilização do site, conforme descrito na Política de Cookies.",
                ],
            },
            {
                title: "Direitos do titular",
                body: [
                    "Nos termos do RGPD, pode exercer a qualquer momento os direitos de acesso, retificação, eliminação, limitação e oposição ao tratamento, bem como o direito à portabilidade dos dados.",
                    `Para exercer estes direitos, contacte-nos através de ${EMAIL}. Tem ainda o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).`,
                ],
            },
        ],
    },

    cookies: {
        sections: [
            {
                title: "O que são cookies",
                body: [
                    "Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um website, que permitem reconhecer o navegador e recolher informação sobre a utilização do site.",
                ],
            },
            {
                title: "Cookies que utilizamos",
                body: ["Este website utiliza os seguintes cookies:"],
                table: {
                    headers: ["Cookie", "Finalidade", "Duração"],
                    rows: [
                        ["_ga", "Google Analytics — distinguir utilizadores", "2 anos"],
                        ["_ga_1E29W5L68K", "Google Analytics — manter o estado da sessão", "2 anos"],
                        ["Sessão (técnicos)", "Funcionamento essencial do site", "Sessão"],
                    ],
                },
            },
            {
                title: "Gestão do consentimento",
                body: [
                    "Os cookies analíticos (Google Analytics) só são ativados após o seu consentimento explícito, dado através do banner apresentado na primeira visita.",
                    "Pode aceitar todos os cookies ou optar apenas pelos essenciais. Pode também, a qualquer momento, gerir ou eliminar os cookies nas definições do seu navegador.",
                ],
            },
            {
                title: "Alterações",
                body: [
                    "Esta Política de Cookies pode ser atualizada periodicamente. Recomendamos a sua consulta regular.",
                ],
            },
        ],
    },

    terms: {
        sections: [
            {
                title: "Identificação",
                body: [
                    `O presente website é propriedade da ${COMPANY}, com sede na ${ADDRESS}, NIPC ${NIPC}.`,
                ],
            },
            {
                title: "Objeto",
                body: [
                    "Os presentes Termos e Condições regem o acesso e a utilização do website eeengenharia.com. Ao navegar neste site, o utilizador aceita integralmente as presentes condições.",
                ],
            },
            {
                title: "Serviços",
                body: [
                    "A Eeengenharia dedica-se à construção civil, com especialização em construção em LSF (Light Steel Framing), remodelações e elaboração de projetos e licenciamentos. As informações apresentadas têm caráter meramente informativo.",
                ],
            },
            {
                title: "Orçamentos",
                body: [
                    "Os orçamentos solicitados através do site ou de outros meios de contacto não são vinculativos até à celebração de contrato escrito entre as partes. Valores, prazos e condições apenas se tornam definitivos após formalização contratual.",
                ],
            },
            {
                title: "Propriedade intelectual",
                body: [
                    "Todos os conteúdos do website (textos, imagens, logótipos e elementos gráficos) são propriedade da Eeengenharia ou utilizados sob licença, não sendo permitida a sua reprodução sem autorização prévia.",
                ],
            },
            {
                title: "Lei aplicável",
                body: [
                    "Os presentes Termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio será competente o foro da comarca da sede da empresa, com renúncia expressa a qualquer outro.",
                ],
            },
        ],
    },
};

export const LEGAL_CONTENT = { pt };
export const LEGAL_UPDATED = "06/2026";
