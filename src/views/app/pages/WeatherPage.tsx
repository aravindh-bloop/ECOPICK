import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain, Haze, Droplets, Wind, Sprout, ArrowLeft } from "lucide-react";

export const WeatherPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
    const forecast = [
        { day: 'Fri', temp: 16, condition: 'sunny', icon: <Sun className="w-8 h-8 text-yellow-500" /> },
        { day: 'Sat', temp: 23, condition: 'sunny', icon: <Sun className="w-8 h-8 text-yellow-500" /> },
        { day: 'Sun', temp: 24, condition: 'haze', icon: <Haze className="w-8 h-8 text-orange-300" /> },
        { day: 'Mon', temp: 25, condition: 'cloudy', icon: <Cloud className="w-8 h-8 text-gray-400" /> },
        { day: 'Tue', temp: 25, condition: 'cloudy', icon: <Cloud className="w-8 h-8 text-gray-400" /> },
        { day: 'Wed', temp: 26, condition: 'rainy', icon: <CloudRain className="w-8 h-8 text-blue-400" /> },
        { day: 'Thu', temp: 26, condition: 'rainy', icon: <CloudRain className="w-8 h-8 text-blue-400" /> }
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
                    <h1 className="text-5xl font-bold text-white mb-2 font-['Orbitron']">Weather Station</h1>
                    <p className="text-zinc-400 text-lg">Real-time weather monitoring for precision farming</p>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all"
                >
                    <ArrowLeft className="w-5 h-5" /> Back to Dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Current Conditions */}
                <div className="md:col-span-2 p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-4">Current Conditions</h2>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-7xl font-bold text-white mb-2">17°C</div>
                            <div className="text-2xl text-zinc-400">Haze</div>
                        </div>
                        <div className="p-4 rounded-3xl bg-white/5">
                            <Haze className="w-32 h-32 text-zinc-400" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 bg-white/5 rounded-xl flex items-center gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg">
                                <Droplets className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <div className="text-zinc-400 text-sm mb-1">Humidity</div>
                                <div className="text-3xl font-bold text-white">63%</div>
                            </div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl flex items-center gap-4">
                            <div className="p-3 bg-zinc-500/20 rounded-lg">
                                <Wind className="w-6 h-6 text-zinc-400" />
                            </div>
                            <div>
                                <div className="text-zinc-400 text-sm mb-1">Wind Speed</div>
                                <div className="text-3xl font-bold text-white">4 km/h</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Farming Insights */}
                <div className="p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-4">Farming Insight</h2>

                    <div className="space-y-4">
                        <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                                <Droplets className="w-5 h-5" />
                                Irrigation
                            </div>
                            <p className="text-zinc-300 text-sm">Moisture levels are adequate. No irrigation needed.</p>
                        </div>
                        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                            <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                                <Sprout className="w-5 h-5" />
                                Spraying
                            </div>
                            <p className="text-zinc-300 text-sm">Conditions are favorable for spraying if needed.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />
                <h2 className="text-2xl font-bold text-white mb-6 mt-4">7-Day Forecast</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {forecast.map((day, idx) => (
                        <div key={idx} className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-all flex flex-col items-center justify-center">
                            <div className="text-zinc-400 font-semibold mb-2">{day.day}</div>
                            <div className="mb-2 p-2 bg-white/5 rounded-full">{day.icon}</div>
                            <div className="text-2xl font-bold text-white mb-1">{day.temp}°C</div>
                            <div className="text-zinc-500 text-sm capitalize">{day.condition}</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

