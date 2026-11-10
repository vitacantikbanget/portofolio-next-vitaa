export default function Aboutcard({ deskripsi }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 my-4 w-full">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{deskripsi}</p>
        </div>
    );
}
