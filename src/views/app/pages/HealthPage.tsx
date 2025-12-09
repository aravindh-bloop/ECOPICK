import { motion } from "framer-motion";
import { useState, useRef, ChangeEvent } from "react";

export const HealthPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
    const [analyzing, setAnalyzing] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            setAnalyzing(false); // Reset analysis when new file is selected
        }
    };

    const handleAnalyze = () => {
        if (!selectedFile) {
            handleUploadClick();
            return;
        }
        setAnalyzing(true);
        // Simulation logic is handled in render
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-5xl font-bold text-white mb-2 font-['Orbitron']">Plant Health Analyzer</h1>
                    <p className="text-zinc-400 text-lg">Upload a photo of a cotton leaf or boll to detect diseases using AI</p>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all"
                >
                    ← Back to Dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Upload Area */}
                <div className="p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />

                    <div
                        onClick={handleUploadClick}
                        className={`border-2 border-dashed ${selectedFile ? 'border-green-500/50 bg-green-500/5' : 'border-white/20 hover:border-white/40'} rounded-xl p-12 text-center transition-all cursor-pointer mt-4 relative overflow-hidden group`}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />

                        {previewUrl ? (
                            <div className="relative z-10">
                                <img src={previewUrl} alt="Preview" className="mx-auto max-h-64 rounded-lg shadow-lg mb-4" />
                                <p className="text-green-400 font-medium text-sm flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Image Selected
                                </p>
                                <p className="text-zinc-500 text-xs mt-1">{selectedFile?.name}</p>
                            </div>
                        ) : (
                            <>
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Click to upload or drag and drop</h3>
                                <p className="text-zinc-400 text-sm mb-4">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </>
                        )}
                    </div>

                    <button
                        onClick={handleAnalyze}
                        disabled={analyzing && !!selectedFile}
                        className={`w-full mt-6 py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${selectedFile
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/20'
                            : 'bg-white/10 text-zinc-400 hover:bg-white/20'
                            }`}
                    >
                        {analyzing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Analyzing Request...
                            </>
                        ) : (
                            <>
                                🔬 {selectedFile ? 'Analyze Plant Health' : 'Select Image to Analyze'}
                            </>
                        )}
                    </button>
                </div>

                {/* Analysis Results */}
                <div className="p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-t-2xl" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-4">Analysis Results</h2>

                    {!analyzing ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4 grayscale opacity-50">📖</div>
                            <p className="text-zinc-400">
                                {selectedFile ? "Ready to analyze. Click the button." : "Upload an image and click analyze to see results"}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                                <div className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                                    <span className="text-xl">✓</span> Healthy Plant
                                </div>
                                <p className="text-zinc-300 text-sm">No significant diseases detected. The plant appears to be in good health with optimal leaf color and texture.</p>
                            </div>

                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="flex justify-between items-end mb-2">
                                    <div className="text-zinc-400 text-sm">AI Confidence Score</div>
                                    <div className="text-2xl font-bold text-white">98.5%</div>
                                </div>
                                <div className="w-full bg-zinc-700 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '98.5%' }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="bg-green-500 h-2 rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                                    <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Pest Risk</div>
                                    <div className="text-white font-bold">Low</div>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                                    <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Nutrient Status</div>
                                    <div className="text-white font-bold">Optimal</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
