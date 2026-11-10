export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <footer className="mt-auto bg-utama dark:bg-gray-950 p-6 text-center text-latar">
            <p>&copy;{tahun} Desvita Putri. Dibuat dengan Next.js di kelas industri UBIG.</p>
        </footer>
    );
}
