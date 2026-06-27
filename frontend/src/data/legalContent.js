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

const en = {
    privacy: {
        sections: [
            {
                title: "Data Controller",
                body: [
                    "This Privacy Policy applies to the eeengenharia.com website and describes how the personal data of its users is processed.",
                    `The data controller is ${COMPANY}, headquartered at ${ADDRESS}, registered under NIPC ${NIPC} (hereinafter "Eeengenharia").`,
                    `For any questions regarding personal data, you may contact us at ${EMAIL}.`,
                ],
            },
            {
                title: "Data We Collect",
                body: [
                    "We only collect data that you voluntarily provide through the contact form, namely: name, email address, phone number, type of work requested and project description.",
                    "We do not intentionally collect sensitive data or data from minors.",
                ],
            },
            {
                title: "Purposes and Legal Basis",
                body: [
                    "Data is used exclusively to respond to quotation and information requests, as well as for any subsequent commercial follow-up.",
                    "The legal basis is the data subject's consent (Article 6(1)(a) GDPR), provided upon submission of the form, and the legitimate interest in responding to commercial contacts.",
                ],
            },
            {
                title: "Data Retention",
                body: [
                    "Data is retained for the period necessary to fulfil the purposes described, and deleted when no longer needed or upon the data subject's request.",
                ],
            },
            {
                title: "Subprocessors and Data Sharing",
                body: [
                    "Form submissions are processed through the Web3Forms service, which acts as a subprocessor and forwards messages to our email. Data is not sold or shared with third parties for marketing purposes.",
                    "We also use Google Analytics 4 for statistical analysis of website usage, as described in the Cookie Policy.",
                ],
            },
            {
                title: "Data Subject Rights",
                body: [
                    "Under the GDPR, you may at any time exercise your rights of access, rectification, erasure, restriction and objection to processing, as well as the right to data portability.",
                    `To exercise these rights, please contact us at ${EMAIL}. You also have the right to lodge a complaint with the relevant national data protection authority.`,
                ],
            },
        ],
    },

    cookies: {
        sections: [
            {
                title: "What Are Cookies",
                body: [
                    "Cookies are small text files stored on your device when you visit a website. They allow the browser to be recognised and information about site usage to be collected.",
                ],
            },
            {
                title: "Cookies We Use",
                body: ["This website uses the following cookies:"],
                table: {
                    headers: ["Cookie", "Purpose", "Duration"],
                    rows: [
                        ["_ga", "Google Analytics — distinguish users", "2 years"],
                        ["_ga_1E29W5L68K", "Google Analytics — maintain session state", "2 years"],
                        ["Session (technical)", "Essential site functionality", "Session"],
                    ],
                },
            },
            {
                title: "Consent Management",
                body: [
                    "Analytical cookies (Google Analytics) are only activated after your explicit consent, given through the banner displayed on your first visit.",
                    "You may accept all cookies or choose only essential ones. You may also manage or delete cookies at any time through your browser settings.",
                ],
            },
            {
                title: "Changes",
                body: [
                    "This Cookie Policy may be updated periodically. We recommend checking it regularly.",
                ],
            },
        ],
    },

    terms: {
        sections: [
            {
                title: "Identification",
                body: [
                    `This website is owned by ${COMPANY}, headquartered at ${ADDRESS}, NIPC ${NIPC}.`,
                ],
            },
            {
                title: "Subject Matter",
                body: [
                    "These Terms and Conditions govern access to and use of the eeengenharia.com website. By browsing this site, the user fully accepts these terms.",
                ],
            },
            {
                title: "Services",
                body: [
                    "Eeengenharia is dedicated to civil construction, specialising in LSF (Light Steel Framing) construction, renovations and the preparation of architectural and engineering projects and licences. The information presented is for informational purposes only.",
                ],
            },
            {
                title: "Quotations",
                body: [
                    "Quotations requested through the website or other contact channels are not binding until a written contract is concluded between the parties. Prices, timelines and conditions only become final upon contractual formalisation.",
                ],
            },
            {
                title: "Intellectual Property",
                body: [
                    "All website content (texts, images, logos and graphic elements) is the property of Eeengenharia or used under licence, and may not be reproduced without prior authorisation.",
                ],
            },
            {
                title: "Applicable Law",
                body: [
                    "These Terms are governed by Portuguese law. For the resolution of any dispute, the courts of the district of the company's registered office shall have jurisdiction, with express waiver of any other.",
                ],
            },
        ],
    },
};

const es = {
    privacy: {
        sections: [
            {
                title: "Responsable del tratamiento",
                body: [
                    "La presente Política de Privacidad se aplica al sitio web eeengenharia.com y describe cómo se tratan los datos personales de sus usuarios.",
                    `El responsable del tratamiento es ${COMPANY}, con domicilio social en ${ADDRESS}, titular del NIPC ${NIPC} (en adelante «Eeengenharia»).`,
                    `Para cualquier consulta relativa a datos personales, puede contactarnos en ${EMAIL}.`,
                ],
            },
            {
                title: "Datos que recopilamos",
                body: [
                    "Solo recopilamos los datos que usted nos facilita voluntariamente a través del formulario de contacto, en concreto: nombre, dirección de correo electrónico, número de teléfono, tipo de obra deseada y descripción del proyecto.",
                    "No recopilamos datos sensibles ni datos de menores de forma intencionada.",
                ],
            },
            {
                title: "Finalidades y base jurídica",
                body: [
                    "Los datos se utilizan exclusivamente para responder a solicitudes de presupuesto e información, así como para el eventual seguimiento comercial derivado de las mismas.",
                    "La base jurídica es el consentimiento del interesado (artículo 6, apartado 1, letra a) del RGPD), otorgado al enviar el formulario, y el interés legítimo en responder a contactos comerciales.",
                ],
            },
            {
                title: "Conservación de los datos",
                body: [
                    "Los datos se conservan durante el tiempo necesario para cumplir con las finalidades descritas, y se eliminan cuando dejen de ser necesarios o cuando el interesado lo solicite.",
                ],
            },
            {
                title: "Subencargados y transferencia de datos",
                body: [
                    "El envío del formulario es procesado a través del servicio Web3Forms, que actúa como subencargado del tratamiento y reenvía los mensajes a nuestro correo electrónico. Los datos no se venden ni se comparten con terceros con fines de marketing.",
                    "También utilizamos Google Analytics 4 para el análisis estadístico del uso del sitio, tal como se describe en la Política de Cookies.",
                ],
            },
            {
                title: "Derechos del interesado",
                body: [
                    "De conformidad con el RGPD, puede ejercer en cualquier momento los derechos de acceso, rectificación, supresión, limitación y oposición al tratamiento, así como el derecho a la portabilidad de los datos.",
                    `Para ejercer estos derechos, contáctenos en ${EMAIL}. También tiene derecho a presentar una reclamación ante la autoridad nacional de protección de datos competente.`,
                ],
            },
        ],
    },

    cookies: {
        sections: [
            {
                title: "Qué son las cookies",
                body: [
                    "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo al visitar un sitio web y permiten reconocer el navegador y recopilar información sobre el uso del sitio.",
                ],
            },
            {
                title: "Cookies que utilizamos",
                body: ["Este sitio web utiliza las siguientes cookies:"],
                table: {
                    headers: ["Cookie", "Finalidad", "Duración"],
                    rows: [
                        ["_ga", "Google Analytics — distinguir usuarios", "2 años"],
                        ["_ga_1E29W5L68K", "Google Analytics — mantener el estado de la sesión", "2 años"],
                        ["Sesión (técnicas)", "Funcionamiento esencial del sitio", "Sesión"],
                    ],
                },
            },
            {
                title: "Gestión del consentimiento",
                body: [
                    "Las cookies analíticas (Google Analytics) solo se activan tras su consentimiento explícito, otorgado a través del banner que aparece en la primera visita.",
                    "Puede aceptar todas las cookies o elegir solo las esenciales. También puede gestionar o eliminar las cookies en cualquier momento desde la configuración de su navegador.",
                ],
            },
            {
                title: "Cambios",
                body: [
                    "Esta Política de Cookies puede actualizarse periódicamente. Le recomendamos consultarla con regularidad.",
                ],
            },
        ],
    },

    terms: {
        sections: [
            {
                title: "Identificación",
                body: [
                    `El presente sitio web es propiedad de ${COMPANY}, con domicilio social en ${ADDRESS}, NIPC ${NIPC}.`,
                ],
            },
            {
                title: "Objeto",
                body: [
                    "Los presentes Términos y Condiciones regulan el acceso y la utilización del sitio web eeengenharia.com. Al navegar por este sitio, el usuario acepta íntegramente las presentes condiciones.",
                ],
            },
            {
                title: "Servicios",
                body: [
                    "Eeengenharia se dedica a la construcción civil, con especialización en construcción LSF (Light Steel Framing), reformas y elaboración de proyectos y licencias. La información presentada tiene carácter meramente informativo.",
                ],
            },
            {
                title: "Presupuestos",
                body: [
                    "Los presupuestos solicitados a través del sitio web u otros canales de contacto no son vinculantes hasta la celebración de un contrato escrito entre las partes. Los importes, plazos y condiciones solo adquieren carácter definitivo tras la formalización contractual.",
                ],
            },
            {
                title: "Propiedad intelectual",
                body: [
                    "Todos los contenidos del sitio web (textos, imágenes, logotipos y elementos gráficos) son propiedad de Eeengenharia o están utilizados bajo licencia, y no se permite su reproducción sin autorización previa.",
                ],
            },
            {
                title: "Ley aplicable",
                body: [
                    "Los presentes Términos se rigen por la legislación portuguesa. Para la resolución de cualquier litigio, los tribunales del domicilio social de la empresa serán competentes, con renuncia expresa a cualquier otro fuero.",
                ],
            },
        ],
    },
};

const fr = {
    privacy: {
        sections: [
            {
                title: "Responsable du traitement",
                body: [
                    "La présente Politique de confidentialité s'applique au site web eeengenharia.com et décrit comment les données personnelles de ses utilisateurs sont traitées.",
                    `Le responsable du traitement est ${COMPANY}, dont le siège social est situé au ${ADDRESS}, immatriculée sous le numéro NIPC ${NIPC} (ci-après « Eeengenharia »).`,
                    `Pour toute question relative aux données personnelles, vous pouvez nous contacter à l'adresse ${EMAIL}.`,
                ],
            },
            {
                title: "Données que nous collectons",
                body: [
                    "Nous collectons uniquement les données que vous nous fournissez volontairement via le formulaire de contact, à savoir : nom, adresse e-mail, numéro de téléphone, type de travaux souhaités et description du projet.",
                    "Nous ne collectons pas intentionnellement de données sensibles ni de données concernant des mineurs.",
                ],
            },
            {
                title: "Finalités et base légale",
                body: [
                    "Les données sont utilisées exclusivement pour répondre aux demandes de devis et d'information, ainsi que pour le suivi commercial éventuel qui en découle.",
                    "La base légale est le consentement de la personne concernée (article 6, paragraphe 1, point a) du RGPD), donné lors de l'envoi du formulaire, et l'intérêt légitime à répondre aux contacts commerciaux.",
                ],
            },
            {
                title: "Conservation des données",
                body: [
                    "Les données sont conservées pendant la durée nécessaire à l'accomplissement des finalités décrites, et supprimées lorsqu'elles ne sont plus nécessaires ou dès que la personne concernée en fait la demande.",
                ],
            },
            {
                title: "Sous-traitants et partage des données",
                body: [
                    "L'envoi du formulaire est traité par le service Web3Forms, qui agit en qualité de sous-traitant et transfère les messages vers notre adresse e-mail. Les données ne sont ni vendues ni partagées avec des tiers à des fins de marketing.",
                    "Nous utilisons également Google Analytics 4 à des fins d'analyse statistique de l'utilisation du site, tel que décrit dans la Politique de cookies.",
                ],
            },
            {
                title: "Droits de la personne concernée",
                body: [
                    "Conformément au RGPD, vous pouvez à tout moment exercer vos droits d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement, ainsi que le droit à la portabilité des données.",
                    `Pour exercer ces droits, contactez-nous à ${EMAIL}. Vous avez également le droit d'introduire une réclamation auprès de l'autorité nationale de protection des données compétente.`,
                ],
            },
        ],
    },

    cookies: {
        sections: [
            {
                title: "Que sont les cookies",
                body: [
                    "Les cookies sont de petits fichiers texte stockés sur votre appareil lors de la visite d'un site web. Ils permettent de reconnaître le navigateur et de collecter des informations sur l'utilisation du site.",
                ],
            },
            {
                title: "Cookies que nous utilisons",
                body: ["Ce site web utilise les cookies suivants :"],
                table: {
                    headers: ["Cookie", "Finalité", "Durée"],
                    rows: [
                        ["_ga", "Google Analytics — distinguer les utilisateurs", "2 ans"],
                        ["_ga_1E29W5L68K", "Google Analytics — maintenir l'état de la session", "2 ans"],
                        ["Session (techniques)", "Fonctionnement essentiel du site", "Session"],
                    ],
                },
            },
            {
                title: "Gestion du consentement",
                body: [
                    "Les cookies analytiques (Google Analytics) ne sont activés qu'après votre consentement explicite, donné via la bannière affichée lors de votre première visite.",
                    "Vous pouvez accepter tous les cookies ou choisir uniquement les essentiels. Vous pouvez également, à tout moment, gérer ou supprimer les cookies depuis les paramètres de votre navigateur.",
                ],
            },
            {
                title: "Modifications",
                body: [
                    "Cette Politique de cookies peut être mise à jour périodiquement. Nous vous recommandons de la consulter régulièrement.",
                ],
            },
        ],
    },

    terms: {
        sections: [
            {
                title: "Identification",
                body: [
                    `Le présent site web est la propriété de ${COMPANY}, dont le siège social est situé au ${ADDRESS}, NIPC ${NIPC}.`,
                ],
            },
            {
                title: "Objet",
                body: [
                    "Les présents Termes et Conditions régissent l'accès et l'utilisation du site web eeengenharia.com. En naviguant sur ce site, l'utilisateur accepte intégralement les présentes conditions.",
                ],
            },
            {
                title: "Services",
                body: [
                    "Eeengenharia se consacre à la construction civile, avec une spécialisation dans la construction LSF (Light Steel Framing), la rénovation et l'élaboration de projets et de permis de construire. Les informations présentées ont un caractère purement informatif.",
                ],
            },
            {
                title: "Devis",
                body: [
                    "Les devis demandés via le site web ou tout autre moyen de contact ne sont pas contraignants jusqu'à la conclusion d'un contrat écrit entre les parties. Les montants, délais et conditions ne deviennent définitifs qu'après formalisation contractuelle.",
                ],
            },
            {
                title: "Propriété intellectuelle",
                body: [
                    "L'ensemble des contenus du site (textes, images, logos et éléments graphiques) sont la propriété d'Eeengenharia ou utilisés sous licence, et leur reproduction sans autorisation préalable est interdite.",
                ],
            },
            {
                title: "Loi applicable",
                body: [
                    "Les présents Termes sont régis par le droit portugais. Pour la résolution de tout litige, les tribunaux du siège social de la société seront compétents, avec renonciation expresse à tout autre for.",
                ],
            },
        ],
    },
};

export const LEGAL_CONTENT = { pt, en, es, fr };
export const LEGAL_UPDATED = "06/2026";
