import { motion } from "framer-motion";

export const WorkersPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
    const workers = [
        { name: 'John Doe', role: 'picker', status: 'active', picked: 520 },
        { name: 'Jane Smith', role: 'picker', status: 'active', picked: 480 },
        { name: 'Alice Brown', role: 'picker', status: 'active', picked: 450 },
        { name: 'Bob Johnson', role: 'picker', status: 'active', picked: 350 },
        { name: 'Charlie Wilson', role: 'picker', status: 'active', picked: 300 }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-5xl font-bold text-white mb-2 font-['Orbitron']">Worker Management</h1>
                    <p className="text-zinc-400 text-lg">Performance tracking and labor allocation</p>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all"
                >
                    ← Back to Dashboard
                </button>
            </div>

            {/* Top Performers Chart */}
            <div className="p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl mb-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />
                <h2 className="text-2xl font-bold text-white mb-6 mt-2">Top Performers (Total Picked kg)</h2>
                <div className="space-y-4">
                    {workers.map((worker, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-12 text-zinc-400 font-semibold">#{idx + 1}</div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-semibold">{worker.name}</span>
                                    <span className="text-white font-bold">{worker.picked} kg</span>
                                </div>
                                <div className="w-full bg-zinc-800 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-orange-500 to-green-500 h-3 rounded-full transition-all"
                                        style={{ width: `${(worker.picked / 600) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Worker Table */}
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="text-left p-4 text-zinc-400 font-semibold">Name</th>
                            <th className="text-left p-4 text-zinc-400 font-semibold">Role</th>
                            <th className="text-left p-4 text-zinc-400 font-semibold">Status</th>
                            <th className="text-left p-4 text-zinc-400 font-semibold">Total Picked</th>
                            <th className="text-left p-4 text-zinc-400 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workers.map((worker, idx) => (
                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">{worker.name}</td>
                                <td className="p-4 text-zinc-400">{worker.role}</td>
                                <td className="p-4">
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                                        {worker.status}
                                    </span>
                                </td>
                                <td className="p-4 text-white font-semibold">{worker.picked} kg</td>
                                <td className="p-4">
                                    <button className="text-red-400 hover:text-red-300 transition-colors">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};
