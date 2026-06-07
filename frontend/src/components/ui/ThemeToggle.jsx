import { useTranslation } from "react-i18next";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? t("lightMode") : t("darkMode")}
            title={isDark ? t("lightMode") : t("darkMode")}
            className="flex items-center justify-center text-2xl hover:text-gray-500 transition-colors"
        >
            {isDark ? <IoSunny /> : <IoMoon />}
        </button>
    );
};

export default ThemeToggle;
