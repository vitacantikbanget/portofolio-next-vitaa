import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Desvita Putri untuk kolaborasi atau pertanyaan.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
        Hubungi Saya
      </h1>
      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        <div>
          <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm min-h-[360px]">
            <h2 className="text-2xl font-semibold text-utama dark:text-sky-200">
              Temukan Saya di
            </h2>
            <div className="mt-4 space-y-3">
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-400">GitHub</span>
                <a
                  href="https://github.com/vitacantikbanget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-aksen dark:text-red-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-400">Email</span>
                <a
                  href="mailto:desvitaputri2712@gmail.com"
                  className="font-semibold text-aksen dark:text-red-300 hover:underline"
                >
                  desvitaputri2712@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
