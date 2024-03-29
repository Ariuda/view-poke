import { Spinner } from "@radix-ui/themes";

export default function LoadingSpinner() {
    return (
        <div className="flex justify-center p-4">
            <Spinner size="3" />
        </div>
    )
}