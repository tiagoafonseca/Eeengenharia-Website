// Categorias do portfólio. labelKey aponta para uma chave de tradução.
// "all" é tratada como filtro especial (mostra todos os projetos).
export const PROJECT_CATEGORIES = [
    { id: "all",          labelKey: "allProjects" },
    { id: "moradias",     labelKey: "houseConstruction" },
    { id: "remodelacoes", labelKey: "renovations" },
    { id: "projetos",     labelKey: "projectElaboration" },
];

// Mapa categoria -> chave de tradução, para mostrar o nome da categoria num projeto.
export const CATEGORY_LABELS = {
    moradias: "houseConstruction",
    remodelacoes: "renovations",
    projetos: "projectElaboration",
};

// Projetos do portfólio. Substituir as imagens por fotos reais das obras.
export const PROJECTS = [
    { id: 1, category: "moradias",     image: "/orcamento-img1.webp" },
    { id: 2, category: "moradias",     image: "/splide-img1.webp" },
    { id: 3, category: "moradias",     image: "/quem-somos.webp" },
    { id: 4, category: "remodelacoes", image: "/orcamento-img2.webp" },
    { id: 5, category: "remodelacoes", image: "/splide-img2.webp" },
    { id: 6, category: "remodelacoes", image: "/aboutUs-img1.webp" },
    { id: 7, category: "projetos",     image: "/orcamento-img3.webp" },
    { id: 8, category: "projetos",     image: "/splide-img3.webp" },
    { id: 9, category: "projetos",     image: "/img1.webp" },
];
