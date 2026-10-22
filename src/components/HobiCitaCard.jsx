export default function HobiCitaCard ({ judul, isi}) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 my-4 w-full">
            <h3 className="text-xl font-semibold text-utama">{judul}</h3>
            <ul className="mt-3 list-disc pl-5 text-base text-gray-700 space-y-2">
                {isi.map((hobiCita) => (
                    <li key={hobiCita}>{hobiCita}</li>
                ))}
            </ul>
        </div>
    )
}