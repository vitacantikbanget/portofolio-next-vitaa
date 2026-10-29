export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <footer className="mt-auto bg-utama p-6 text-center text-latar">
            <p>&copy;{tahun} Desvita Putri. Dibuat dengan Next.Js di kelas industri UBIG.</p>
        </footer>
    )
}