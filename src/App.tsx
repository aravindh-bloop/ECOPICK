
import Auth from "@/views/auth/Auth";
import { LanguageProvider } from "@/i18n/LanguageContext";

function App() {
    return (
        <LanguageProvider>
            <Auth />
        </LanguageProvider>
    );
}

export default App
