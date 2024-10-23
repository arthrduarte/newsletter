import { Input } from "@/components/ui/input"

export default function SignUp() {
    return (
        <>
            <div className="w-1/2 text-center">
                <div>
                    <h1>Steel Stacker's</h1>
                </div>
                <div>
                    <h1>Newsletter</h1>
                </div>
                <div>
                    <h2>Never be the last one to know about new events, details, and fun stuff.</h2>
                </div>
            </div>
            <div className="w-1/2">
                <Input type="email" placeholder="Email" />
            </div>
        </>
    )
}
