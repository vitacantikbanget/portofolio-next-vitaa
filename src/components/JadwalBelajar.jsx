export default function JadwalBelajar ({data}) {

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden my-4">
            <table className="w-full text-left border-collapse">
                <thead className="bg-utama text-white text-sm">
                    <tr>
                        <th className="w-4 p-4 font-semibold">Hari</th>
                        <th className="w-4 p-4 font-semibold">Waktu</th>
                        <th className="w-4 p-4 font-semibold">Kegiatan</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                    {data?.map((data) => (
                        <tr key={data.hari} className="hover:bg-gray-50">
                            <td className="p-4 font-medium">{data.hari}</td>
                            <td className="p-4">{data.waktu}</td>
                            <td className="p-4">{data.kegiatan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}