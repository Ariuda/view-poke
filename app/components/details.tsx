import { getSpeciesDetail } from "@/data/data";

interface ViewDetailProps {
    name: string;
    type: string;
}

export default async function ViewDetail({ name, type }: ViewDetailProps) {
    const details = await getSpeciesDetail(name);
    if(!details) {
        return null;
    }
    const { capture_rate, color, growth_rate, habitat } = details;

    return (
        <div className={`grid grid-cols-2 gap-4`}>
            <div>
                <h3 className="text-lg font-medium">Color</h3>
                <p className="capitalize">{color?.name}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Habitat</h3>
                <p className="capitalize">{habitat?.name}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Capture rate</h3>
                <p>{capture_rate}</p>
            </div>
            
            <div>
                <h3 className="text-lg font-medium">Growth rate</h3>
                <p className="capitalize">{growth_rate?.name}</p>
            </div>
            
            
        </div>
    )
}