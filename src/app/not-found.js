import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-7xl font-extrabold text-aksen dark:text-red-300">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-utama dark:text-sky-200 md:text-3xl">
        Halaman Tidak Ditemukan
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Maaf, halaman atau proyek yang kamu cari tidak ada atau alamat URL-nya salah.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-utama dark:bg-sky-200 px-5 py-2.5 font-semibold text-white dark:text-gray-900 transition hover:opacity-90"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/proyek"
          className="rounded-lg border border-utama dark:border-sky-200 px-5 py-2.5 font-semibold text-utama dark:text-sky-200 transition hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Lihat Daftar Proyek
        </Link>
      </div>
    </main>
  );
}
