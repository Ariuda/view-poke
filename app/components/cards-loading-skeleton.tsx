import { Skeleton } from "@radix-ui/themes";

interface CardsLoadingSkeletonProps {
    cardsNumber: number;
}

export default function CardsLoadingSkeleton({ cardsNumber }: CardsLoadingSkeletonProps) {
    const cardsSekeleton = Array(cardsNumber).fill(1).map((item, i) => {
            return (
                <li key={i}>
                    <Skeleton minHeight="234px"></Skeleton>
                </li>
            )
        });

    return (
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 animate-pulse">
            {cardsSekeleton}
        </ul>
    )
}