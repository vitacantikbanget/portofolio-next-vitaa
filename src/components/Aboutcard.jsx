export default function Aboutcard ({deskripsi}) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 my-4 w-full">
            <p className="text-lg text-gray-700 leading-relaxed">{deskripsi}</p>
        </div>
    )
}