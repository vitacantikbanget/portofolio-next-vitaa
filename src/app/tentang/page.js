import Aboutcard from "@/components/Aboutcard";
import HobiCitaCard from "@/components/HobiCitaCard";
import JadwalBelajar from "@/components/JadwalBelajar";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi cita-cita, dan jadwal belajar Desvita Putri.",
};

const hobiList = [
  "Bernyanyi",
  "Membaca buku",
  "Mendengarkan lagu"
];

const citacitaList = [
  "Menjadi web Developer",
  "Menjadi tester",
  "Menjadi UI/UX Desain"
];

const jadwalList = [
  { hari: "Kamis", waktu: "07:00-16:00", kegiatan: "sekolah" },
  { hari: "Jum'at", waktu: "07:14:30", kegiatan: "Sekolah" },
  { hari: "Sabtu", waktu: "05:00-22:00", kegiatan: "Ngoding dan nyantai" }
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">Tentang Saya</h1>

      <section className="mt-4">
        <Aboutcard
          deskripsi="Saya adalah siswi SMK Negeri 1 Pasuruan, jurusan Rekayasa Perangkat Lunak 1 yang mengikuti kelas industri UBIG, saya juga tertarik dengan Web Development dan UI/UX Design."
        />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HobiCitaCard
          judul="Hobi"
          isi={hobiList}
        />
        <HobiCitaCard
          judul="Cita-Cita"
          isi={citacitaList}
        />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-utama mb-3">Jadwal Belajar</h2>
        <JadwalBelajar
          data={jadwalList}
        />
      </section>
    </main>
  );
}