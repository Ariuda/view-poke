import { getSpeciesDetail } from "@/data/data";

interface ViewDetailProps {
    name: string;
}

export default async function ViewDetail({ name }: ViewDetailProps) {
    const { base_happiness, capture_rate, color, growth_rate, habitat, has_gender_differences, is_legendary, is_mythical } = await getSpeciesDetail(name);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h3>Base happiness</h3>
                <p>{base_happiness}</p>
            </div>
            <div>
                <h3>Capture rate</h3>
                <p>{capture_rate}</p>
            </div>
            <div>
                <h3>Color</h3>
                <p className="capitalize">{color.name}</p>
            </div>
            <div>
                <h3>Growth rate</h3>
                <p className="capitalize">{growth_rate.name}</p>
            </div>
            <div>
                <h3>Habitat</h3>
                <p className="capitalize">{habitat.name}</p>
            </div>
            <div>
                <h3>Has gender differences?</h3>
                <p className="capitalize">{has_gender_differences}</p>
            </div>
            <div>
                <h3>Is legendary?</h3>
                <p className="capitalize">{is_legendary}</p>
            </div>
            <div>
                <h3>Is mythical?</h3>
                <p className="capitalize">{is_mythical}</p>
            </div>
        </div>
    )
}