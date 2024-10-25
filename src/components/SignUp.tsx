import { Input } from "@/components/ui/input"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { setegid } from "process"

export default function SignUp() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("oiee", email)
    }
    return (
        <>
            <div className="lg:w-1/2 text-center">
                <div className="flex flex-col lg:flex-row lg:items-end justify-center">
                    <div>
                        <h1 className="font-bold text-5xl lg:mr-3">Steel Stacker's</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold lg:text-end">Newsletter</h1>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 my-10">
                <form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="w-full mt-3" type="submit">
                        <EnvelopeOpenIcon /> Login with Email
                    </Button>
                </form>
            </div>
            <div>
                <h2 className="text-gray-400">Never be the last one to know about new events, details, and fun stuff.</h2>
            </div>
        </>
    )
}
