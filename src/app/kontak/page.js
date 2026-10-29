export default function Kontak () {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 gap-2">
            <h1 className="text-3xl text-utama font-bold md:text-4xl ">
                Tentang Saya
                </h1>
                <p className="mt-3 text-lg text-gray-700">Halaman ini akan berisi kontak</p>
                <div className="grid grid-cols-1 md:grid grid-cols-3 gap-6 items-start ">
                    <div className="bg-white border border-gray-300 rounded-xl p-6">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="nama" classname="block font-semibold">
                                    Nama lengkap
                                </label>
                                <input type="text" id="nama" name="nama" placeholder="Contoh: Budi Santoso" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-semibold">
                                    Email
                                </label>
                                <input type="text" id="nama" name="nama" placeholder="Contoh: BudiSantoso@gmail.com" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                            </div>
                            <div>
                                <label htmlFor="nomorhp" className="block font-semibold">
                                    Nomor HP
                                </label>
                                <input type="number" id="nomorhp" name="nomorhp" placeholder="Contoh: 085783029387" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                            </div>
                            <div>
                                <label htmlFor="keperluan" className="block font-semibold">
                                      Keperluan
                                </label>
                             <select
                                id="keperluan"
                                name="keperluan"
                                required
                                defaultValue=""
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                               >
                                <option value="" disabled>
                                      -- Pilih keperluan --
                                </option>
                                <option value="kolaborasi">Kolaborasi / Kerjasama Proyek</option>
                                <option value="magang">Tawaran Magang / PKL</option>
                                <option value="pertanyaan">Pertanyaan / Diskusi</option>
                                <option value="lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pesan" classname="block font-semibold">
                                    pesan
                                </label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    rows="4"
                                    placeholder="Tulis pesanmu di sini"
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 min-h-[360px]">
                            <h1 className="text-2xl text-utama font-semibold">Temui saya di </h1>
                            <p className="text-red-800 mt-2 text-semibold"> Github</p>
                            <p className="text-red-800 taxt-semibold ">desvitaputri27122009@gmail.com</p>
                        </div>
                    </div>
                </div>
        </main>
    )
}