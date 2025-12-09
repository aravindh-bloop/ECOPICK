// ... (imports)
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MachinesPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
    // ... (machines data)
    const machines = [
        { id: 1, field: 'Field A', battery: 85, temp: 42, trash: 2.3, bags: 12, status: 'online' },
        { id: 2, field: 'Field B', battery: 72, temp: 45, trash: 1.8, bags: 10, status: 'online' },
        { id: 3, field: 'Field A', battery: 45, temp: 38, trash: 3.1, bags: 8, status: 'online' },
        { id: 4, field: 'Field C', battery: 0, temp: 0, trash: 0, bags: 0, status: 'offline' }
    ];

    const [selectedMachineId, setSelectedMachineId] = useState<number | null>(null);
    const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

    const handleReportIssue = (machineId: number) => {
        setSelectedMachineId(machineId);
        setIsTicketModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsTicketModalOpen(false);
        setSelectedMachineId(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto relative"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-5xl font-bold text-white mb-2 font-['Orbitron']">Machine Monitoring</h1>
                    <p className="text-zinc-400 text-lg">Real-time status of cotton picking machines</p>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all"
                >
                    ← Back to Dashboard
                </button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl text-center">
                    <div className="text-zinc-400 text-sm mb-1">Total Machines</div>
                    <div className="text-3xl font-bold text-white">4</div>
                </div>
                <div className="p-4 bg-black/30 backdrop-blur-xl border border-green-500/20 rounded-xl text-center">
                    <div className="text-zinc-400 text-sm mb-1">Online</div>
                    <div className="text-3xl font-bold text-green-400">3</div>
                </div>
                <div className="p-4 bg-black/30 backdrop-blur-xl border border-red-500/20 rounded-xl text-center">
                    <div className="text-zinc-400 text-sm mb-1">Offline</div>
                    <div className="text-3xl font-bold text-red-400">1</div>
                </div>
                <div className="p-4 bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl text-center">
                    <div className="text-zinc-400 text-sm mb-1">Total Bags Today</div>
                    <div className="text-3xl font-bold text-white">45</div>
                </div>
            </div>

            {/* Machine Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {machines.map((machine) => (
                    <MachineCard
                        key={machine.id}
                        machine={machine}
                        onReportIssue={() => handleReportIssue(machine.id)}
                    />
                ))}
            </div>

            {/* Ticket Modal */}
            <AnimatePresence>
                {isTicketModalOpen && (
                    <TicketModal
                        machineId={selectedMachineId}
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const MachineCard = ({ machine, onReportIssue }: { machine: any, onReportIssue: () => void }) => (
    <div className="p-6 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />

        <div className="flex justify-between items-start mb-6 mt-2 relative z-10">
            <div>
                <h3 className="text-2xl font-bold text-white">Machine #{machine.id}</h3>
                <p className="text-zinc-400">{machine.field}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${machine.status === 'online'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                    }`}>
                    {machine.status === 'online' ? '● Online' : '● Offline'}
                </span>
                <button
                    onClick={onReportIssue}
                    className="text-xs text-orange-400 hover:text-orange-300 underline decoration-dotted underline-offset-4"
                >
                    Report Issue
                </button>
            </div>
        </div>

        {machine.status === 'online' ? (
            <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-zinc-400 text-sm mb-1">Battery</div>
                    <div className="text-2xl font-bold text-white">{machine.battery}%</div>
                    <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${machine.battery}%` }} />
                    </div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-zinc-400 text-sm mb-1">Temperature</div>
                    <div className="text-2xl font-bold text-white">{machine.temp}°C</div>
                    <div className="text-zinc-500 text-xs mt-1">Normal Range</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-zinc-400 text-sm mb-1">Trash Content</div>
                    <div className="text-2xl font-bold text-green-400">{machine.trash}%</div>
                    <div className="text-green-500 text-xs mt-1">Excellent Quality</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-zinc-400 text-sm mb-1">Bags Sealed</div>
                    <div className="text-2xl font-bold text-white">{machine.bags}</div>
                    <div className="text-zinc-500 text-xs mt-1">today</div>
                </div>
            </div>
        ) : (
            <div className="text-center py-8 text-zinc-500 relative z-10">
                Machine is currently offline
            </div>
        )}
    </div>
);

const TicketModal = ({ machineId, onClose }: { machineId: number | null, onClose: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert(`Ticket raised successfully for Machine #${machineId}! Support team has been notified.`);
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
            >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />

                <h2 className="text-2xl font-bold text-white mb-1">Raise Repair Ticket</h2>
                <p className="text-zinc-400 text-sm mb-6">Submit a maintenance request for Machine #{machineId}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">Issue Type</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50">
                            <option>Mechanical Failure</option>
                            <option>Electrical Issue</option>
                            <option>Software/Sensor Error</option>
                            <option>General Maintenance</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">Priority</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50">
                            <option>Low (Routine)</option>
                            <option>Medium (Needs Attention)</option>
                            <option>High (Urgent)</option>
                            <option>Critical (Machine Down)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">Description</label>
                        <textarea
                            rows={4}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                            placeholder="Describe the issue in detail..."
                            required
                        />
                    </div>

                    <div className="flex gap-3 mt-6 pt-4 border-t border-white/5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium border border-white/5"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-lg transition-all font-medium shadow-lg shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                'Submit Ticket'
                            )}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

