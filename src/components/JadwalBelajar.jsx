export default function JadwalBelajar({ data }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden my-4">
            <table className="w-full text-left border-collapse">
                <thead className="bg-utama dark:bg-sky-950 text-white dark:text-sky-200 text-sm">
                    <tr>
                        <th className="w-4 p-4 font-semibold">Hari</th>
                        <th className="w-4 p-4 font-semibold">Waktu</th>
                        <th className="w-4 p-4 font-semibold">Kegiatan</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-700 dark:text-gray-300">
                    {data?.map((item) => (
                        <tr key={item.hari} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="p-4 font-medium">{item.hari}</td>
                            <td className="p-4">{item.waktu}</td>
                            <td className="p-4">{item.kegiatan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
