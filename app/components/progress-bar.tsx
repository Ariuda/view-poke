import { Progress } from "@radix-ui/themes";

interface ProgressBarProps {
    items: {
        label: string;
        value: number;
    }[];
}

export default function ProgressBar({ items }: ProgressBarProps) {
    const bars = items.map(item => {
        return (
            <li key={item.label} className="flex justify-between items-center my-2">
                <p className="mr-3 capitalize">{item.label}</p>
                <Progress value={item.value} variant="classic" size="3" color="cyan" />
            </li>
        )
    });

    return (
        <ul>
            {bars}
        </ul>
    )
}