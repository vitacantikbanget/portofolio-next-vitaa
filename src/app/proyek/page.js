import { proyek } from "@/data/proyek";
import ProyekCard from "@/components/ProyekCard";

export default function Proyek () {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl text-utama font-bold">
                Proyek Saya
                </h1>
                <p className="mt-3 text-lg text-gray-700">Kumpulan hasil belajar saya di kelas industri UBIG. Klik kartu untuk melihat detailnya.</p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {proyek.map((item) => (
                        <ProyekCard key={item.slug} proyek={item} />
                    ))}
                </div>
        </main>
    )
}