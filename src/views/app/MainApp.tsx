import { useState, useRef } from 'react';
import { AuroraBackground } from '@/components/AuroraBackground';
import { Header } from '@/components/Header';
import { FeatureScroll, features } from '@/components/FeatureScroll';
import FeatureDetail from './FeatureDetail';

interface MainAppProps {
    onLogout?: () => void;
}

export default function MainApp({ onLogout }: MainAppProps) {
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <AuroraBackground>
            <div ref={containerRef} className="relative w-full h-full overflow-y-auto">
                {/* Header */}
                <Header onSelectFeature={setSelectedFeature} onLogout={onLogout} />

                {/* Scrollable Content */}
                <div className="relative z-20 pt-32 pb-20">
                    <FeatureScroll onSelectFeature={setSelectedFeature} containerRef={containerRef} />
                </div>

                {/* Feature Detail Modal */}
                {selectedFeature && (
                    <FeatureDetail
                        feature={selectedFeature}
                        onClose={() => setSelectedFeature(null)}
                    />
                )}
            </div>
        </AuroraBackground>
    );
}
