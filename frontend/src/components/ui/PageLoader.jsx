// Fallback mostrado enquanto o chunk de uma página (lazy) carrega.
const PageLoader = () => (
    <div className="flex justify-center items-center min-h-[60vh]" role="status" aria-live="polite">
        <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-black dark:border-neutral-700 dark:border-t-white animate-spin" />
        <span className="sr-only">A carregar…</span>
    </div>
);

export default PageLoader;
