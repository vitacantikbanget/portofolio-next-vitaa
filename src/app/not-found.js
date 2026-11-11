import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-7xl font-extrabold text-aksen">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
        Halaman Tidak Ditemukan
      </h2>
      <p className="mt-2 text-muted-foreground">
        Maaf, halaman atau proyek yang kamu cari tidak ada atau alamat URL-nya salah.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className={buttonVariants({ size: "lg" })}
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/proyek"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Lihat Daftar Proyek
        </Link>
      </div>
    </main>
  );
}
