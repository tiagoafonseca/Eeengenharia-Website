// Fallback mostrado enquanto o chunk de uma página (lazy) carrega.
const PageLoader = () => (
    <div className="flex justify-center items-center min-h-[60vh]" role="status" aria-live="polite">
        <div className="h-10 w-10 rounded-full border-2 border-line border-t-ink animate-spin" />
        <span className="sr-only">A carregar…</span>
    </div>
);

export default PageLoader;
