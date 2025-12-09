import { motion } from "framer-motion";
import { Phone, Users, FileText, ExternalLink, Leaf, ShieldAlert } from "lucide-react";

export const EcoConnectPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto pb-20"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-5xl font-bold text-white mb-2 font-['Orbitron']">EcoConnect Support</h1>
                    <p className="text-zinc-400 text-lg">Direct access to expert help, subsidies, and community support.</p>
                </div>
                <button
                    onClick={() => onNavigate('dashboard')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all"
                >
                    ← Back to Dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Helplines (2/3 width on large screens) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Emergency Support */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <ShieldAlert className="text-red-500" /> Emergency Response
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ContactCard
                                title="Pesticide Control Center"
                                desc="For urgent pest outbreaks and chemical safety"
                                phone="1800-425-1234"
                                color="red"
                            />
                            <ContactCard
                                title="Machine Breakdown (24/7)"
                                desc="Urgent repair support for EcoPick machines"
                                phone="1800-555-0199"
                                color="orange"
                            />
                        </div>
                    </section>

                    {/* Expert Consultation */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Users className="text-blue-500" /> Expert Consultation
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ContactCard
                                title="Agronomy Expert"
                                desc="Soil health & crop planning advice"
                                phone="+91 98765 43210"
                                color="blue"
                            />
                            <ContactCard
                                title="Market Advisor"
                                desc="Real-time pricing & selling strategy"
                                phone="+91 98765 12345"
                                color="blue"
                            />
                            <ContactCard
                                title="Weather Analyst"
                                desc="Detailed local forecasts & risks"
                                phone="+91 98765 67890"
                                color="blue"
                            />
                            <ContactCard
                                title="Supply Chain Mgr"
                                desc="Logistics & storage solutions"
                                phone="+91 98765 11223"
                                color="blue"
                            />
                        </div>
                    </section>
                </div>

                {/* Right Column: News & Subsidies */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <FileText className="text-green-500" /> Latest Subsidies
                        </h2>
                        <div className="space-y-4">
                            <NewsCard
                                category="Government Scheme"
                                title="PM-KISAN Update"
                                date="2 days ago"
                                preview="New installment released for eligible farmers. Check status now."
                            />
                            <NewsCard
                                category="Subsidy"
                                title="50% Off on Solar Pumps"
                                date="1 week ago"
                                preview="Apply for the refined solar water pump subsidy scheme before Dec 31st."
                            />
                            <NewsCard
                                category="Grant"
                                title="Organic Farming Grant"
                                date="2 weeks ago"
                                preview="Support for simplified organic certification processes available."
                            />
                        </div>
                        <button className="w-full py-3 mt-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-zinc-300 hover:text-white transition-colors text-sm">
                            View All Schemes
                        </button>
                    </section>

                    <div className="p-6 bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/30 rounded-2xl">
                        <Leaf className="w-8 h-8 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Sustainable Farming</h3>
                        <p className="text-zinc-300 text-sm mb-4">
                            Join our community workshop on sustainable cotton farming practices next Tuesday.
                        </p>
                        <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-semibold transition-colors">
                            Register Free
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ContactCard = ({ title, desc, phone, color }: { title: string, desc: string, phone: string, color: 'red' | 'blue' | 'orange' }) => {
    const colorStyles = {
        red: "bg-red-500/10 border-red-500/20 hover:border-red-500/40 text-red-500",
        blue: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40 text-blue-500",
        orange: "bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40 text-orange-500"
    };

    return (
        <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all group cursor-pointer ${colorStyles[color].replace('text-', '')} bg-opacity-10 bg-zinc-900`}>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <Phone className={`w-5 h-5 ${colorStyles[color].split(' ').pop()}`} />
            </div>
            <p className="text-zinc-400 text-sm mb-4 min-h-[40px]">{desc}</p>
            <div className="flex items-center gap-3">
                <a href={`tel:${phone}`} className={`flex-1 py-2 rounded-lg font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white text-center`}>
                    Call Now
                </a>
                <button className={`px-3 py-2 rounded-lg font-semibold text-sm bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-colors`}>
                    WhatsApp
                </button>
            </div>
        </div>
    );
};

const NewsCard = ({ category, title, date, preview }: { category: string, title: string, date: string, preview: string }) => (
    <div className="p-5 bg-black/40 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group">
        <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-green-400 uppercase tracking-wider bg-green-500/10 px-2 py-0.5 rounded">{category}</span>
            <span className="text-zinc-500 text-xs">{date}</span>
        </div>
        <h4 className="text-white font-bold mb-1 group-hover:text-green-400 transition-colors">{title}</h4>
        <p className="text-zinc-400 text-sm line-clamp-2">{preview}</p>
        <div className="mt-3 flex items-center text-blue-400 text-xs font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Read More <ExternalLink className="w-3 h-3" />
        </div>
    </div>
);
