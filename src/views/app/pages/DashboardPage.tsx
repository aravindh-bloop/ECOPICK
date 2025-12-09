import { motion } from 'framer-motion';
import { Package, Truck, Calendar, Plus, ChevronRight } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="min-h-screen w-full flex justify-center p-4 md:p-8">
            {/* Main Glassy Card Container - Increased Length */}
            <motion.div
                className="w-full max-w-[95vw] min-h-[150vh] bg-zinc-800/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Content Inside Card */}
                <div className="w-full p-8 space-y-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="text-4xl font-bold text-white mb-2">Dashboard Overview</h1>
                        <p className="text-zinc-400">Real-time farm metrics and performance</p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Total Workers */}
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-zinc-400 text-sm font-medium">Total Workers</div>

                            </div>
                            <div className="text-4xl font-bold text-white mb-2">24</div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 text-sm font-semibold">+12%</span>
                                <span className="text-zinc-500 text-sm">from last week</span>
                            </div>
                        </div>

                        {/* Active Machines */}
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-zinc-400 text-sm font-medium">Active Machines</div>

                            </div>
                            <div className="text-4xl font-bold text-white mb-2">8</div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 text-sm font-semibold">+61.2%</span>
                                <span className="text-zinc-500 text-sm">efficiency</span>
                            </div>
                        </div>

                        {/* Today's Yield */}
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-zinc-400 text-sm font-medium">Today's Yield</div>

                            </div>
                            <div className="text-4xl font-bold text-white mb-2">1,234 kg</div>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-500 text-sm">Total today</span>
                            </div>
                        </div>

                        {/* Cotton Bags */}
                        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-zinc-400 text-sm font-medium">Cotton Bags</div>

                            </div>
                            <div className="text-4xl font-bold text-white mb-2">45</div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 text-sm font-semibold">+8%</span>
                                <span className="text-zinc-500 text-sm">sealed today</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Inventory & Logistics Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Inventory Overview */}
                        <motion.div
                            className="lg:col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Package className="w-5 h-5 text-cyan-400" />
                                    Inventory
                                </h2>
                                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                                    <Plus className="w-4 h-4 text-white" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-zinc-400">Current Stock</span>
                                        <span className="text-white font-bold">850q / 1000q</span>
                                    </div>
                                    <div className="w-full bg-zinc-700/50 h-3 rounded-full overflow-hidden">
                                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: '85%' }} />
                                    </div>
                                    <div className="mt-2 text-xs text-zinc-500 text-right">85% Full</div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-zinc-400 text-xs mb-1">Total Harvested</div>
                                        <div className="text-xl font-bold text-white">2,450q</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-zinc-400 text-xs mb-1">Pending Delivery</div>
                                        <div className="text-xl font-bold text-orange-400">150q</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Logistics & Deliveries */}
                        <motion.div
                            className="lg:col-span-2 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-green-400" />
                                    Logistics & Deliveries
                                </h2>
                                <button className="px-3 py-1.5 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg text-sm font-medium transition-colors">
                                    Schedule Delivery
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left border-b border-white/10">
                                            <th className="pb-3 text-zinc-400 text-sm font-medium">Mediator/Buyer</th>
                                            <th className="pb-3 text-zinc-400 text-sm font-medium">Quantity</th>
                                            <th className="pb-3 text-zinc-400 text-sm font-medium">Date</th>
                                            <th className="pb-3 text-zinc-400 text-sm font-medium">Status</th>
                                            <th className="pb-3 text-zinc-400 text-sm font-medium">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {[
                                            { name: 'Ramesh Traders', qty: '200q', date: 'Tomorrow, 10 AM', status: 'Scheduled', color: 'text-blue-400 bg-blue-400/10' },
                                            { name: 'Global Cottons', qty: '450q', date: 'Dec 02, 2024', status: 'Completed', color: 'text-green-400 bg-green-400/10' },
                                            { name: 'Local Mandi Agent', qty: '150q', date: 'Dec 05, 2024', status: 'In-Transit', color: 'text-orange-400 bg-orange-400/10' },
                                        ].map((item, idx) => (
                                            <tr key={idx} className="group">
                                                <td className="py-3 text-white font-medium">{item.name}</td>
                                                <td className="py-3 text-zinc-300">{item.qty}</td>
                                                <td className="py-3 text-zinc-300 flex items-center gap-2">
                                                    <Calendar className="w-3 h-3 text-zinc-500" />
                                                    {item.date}
                                                </td>
                                                <td className="py-3">
                                                    <span className={`px-2 py-1 rounded text-xs font-medium ${item.color}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="py-3">
                                                    <button className="p-1 hover:bg-white/10 rounded transition-colors text-zinc-400 hover:text-white">
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>

                    {/* Recent Activity */}
                    <motion.div
                        className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
                        <div className="space-y-3">
                            {[
                                { time: '10:30 AM', activity: 'Machine #3 completed Field B', status: 'success' },
                                { time: '09:45 AM', activity: 'Worker shift started - 12 workers', status: 'info' },
                                { time: '08:20 AM', activity: 'Quality check passed - Batch #45', status: 'success' },
                                { time: '07:15 AM', activity: 'Machine #1 maintenance scheduled', status: 'warning' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-all">
                                    <div className={`w-2 h-2 rounded-full ${item.status === 'success' ? 'bg-green-400' :
                                        item.status === 'warning' ? 'bg-yellow-400' :
                                            'bg-blue-400'
                                        }`} />
                                    <div className="flex-1">
                                        <div className="text-white font-medium">{item.activity}</div>
                                        <div className="text-zinc-500 text-sm">{item.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <button className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-bold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50">
                            View Full Report
                        </button>
                        <button className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-bold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-green-500/50">
                            Add New Worker
                        </button>
                        <button className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-orange-500/50">
                            Schedule Maintenance
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
