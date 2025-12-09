import { PulsatingButton } from "@/registry/magicui/pulsating-button"

export function PulsatingButtonDemo() {
    return (
        <div className="flex gap-4">
            <PulsatingButton>Login</PulsatingButton>
            <PulsatingButton>Register</PulsatingButton>
        </div>
    )
}