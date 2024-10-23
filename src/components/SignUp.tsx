import { Input } from "@/components/ui/input"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export default function SignUp() {
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
                <form action="">
                    <Input type="email" placeholder="Email" />
                    <Button className="w-full mt-3">
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
