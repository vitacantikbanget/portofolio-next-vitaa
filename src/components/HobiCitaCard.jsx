export default function HobiCitaCard({ judul, isi }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 my-4 w-full">
            <h3 className="text-xl font-semibold text-utama dark:text-sky-200">{judul}</h3>
            <ul className="mt-3 list-disc pl-5 text-base text-gray-700 dark:text-gray-300 space-y-2">
                {isi.map((hobiCita) => (
                    <li key={hobiCita}>{hobiCita}</li>
                ))}
            </ul>
        </div>
    );
}
