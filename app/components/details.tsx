import { getSpeciesDetail } from "@/data/data";

interface ViewDetailProps {
    name: string;
    type: string;
}

export default async function ViewDetail({ name, type }: ViewDetailProps) {
    const { base_happiness, capture_rate, color, growth_rate, habitat, has_gender_differences, is_legendary, is_mythical } = await getSpeciesDetail(name);

    return (
        <div className={`grid grid-cols-2 gap-4`}>
            <div>
                <h3 className="text-lg font-medium">Base happiness</h3>
                <p>{base_happiness}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Capture rate</h3>
                <p>{capture_rate}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Color</h3>
                <p className="capitalize">{color?.name}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Growth rate</h3>
                <p className="capitalize">{growth_rate?.name}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Habitat</h3>
                <p className="capitalize">{habitat?.name}</p>
            </div>
            
        </div>
    )
}

/**
 * <div>
                <h3 className="text-lg font-medium">Has gender differences?</h3>
                <p className="capitalize">{has_gender_differences}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Is legendary?</h3>
                <p className="capitalize">{is_legendary}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Is mythical?</h3>
                <p className="capitalize">{is_mythical}</p>
            </div>
 */