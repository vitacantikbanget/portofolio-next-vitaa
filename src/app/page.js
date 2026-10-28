import Aboutcard from "@/components/Aboutcard";
import Hero from "../components/Hero";
import SkillCard from "@/components/SkillCard";
import HobiCitaCard from "@/components/HobiCitaCard";
import JadwalBelajar from "@/components/JadwalBelajar";
import Footer from "@/components/Footer";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan canva", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
];

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

export default function home() {
  return (
    <div>
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Hero
          nama="Desvita Putri"
          tagline="Siswa kelas XI SMK Negeri 1 Pasuruan, calon Junior Web Developer di Kelas industri UBIG"
        />

        <section className="mt-7">
          <h2 className="text-2xl font-bold text-utama mb-3">Tentang Saya</h2>
        </section>
        <Aboutcard
          deskripsi="Saya adalah siswi SMK Negeri 1 Pasuruan, jurusan Rekayasa Perangkat Lunak 1 yang mengikuti kelas industri UBIG, sya juga tertarik dengan Web Development dan UI/UX Design"
        />

        <div className="grid deid-cols-1 md:grid-cols-2 gap-4">
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
          <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-utama mb-3">Jadwal Belajar</h2>
          <JadwalBelajar
            data={jadwalList}
          />
        </section>
      </main>
      <Footer/>
    </div>
  );
}