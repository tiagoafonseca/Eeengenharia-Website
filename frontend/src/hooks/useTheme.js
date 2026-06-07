import { useEffect, useState } from "react";

/**
 * Gere o tema claro/escuro.
 * O estado inicial vem da classe `.dark` aplicada pelo script anti-FOUC no index.html.
 * Persiste a escolha em localStorage e alterna a classe no <html>.
 *
 * @returns {{ theme: "light"|"dark", toggleTheme: () => void }}
 */
export function useTheme() {
    const [theme, setTheme] = useState(() =>
        typeof document !== "undefined" && document.documentElement.classList.contains("dark")
            ? "dark"
            : "light"
    );

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        try {
            localStorage.setItem("theme", theme);
        } catch { /* ignore */ }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return { theme, toggleTheme };
}
