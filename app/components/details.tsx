import { getSpeciesDetail } from "@/data/data";
import { Suspense } from "react";

import EvolutionDetails from "../components/evolution-details";
import LoadingSpinner from "./loading-spinner";

interface ViewDetailProps {
    name: string;
}

export default async function ViewDetail({ name }: ViewDetailProps) {
    const details = await getSpeciesDetail(name);
    if(!details) {
        return null;
    }
    const { capture_rate, color, growth_rate, habitat, evolution_chain } = details;

    return (
        <div>
            <div className="flex justify-between mt-8">
                {color?.name && <div>
                    <h2 className="text-lg my-2 font-medium">Color</h2>
                    <p className="capitalize">{color?.name}</p>
                </div>}
                {habitat?.name && <div>
                    <h2 className="text-lg my-2 font-medium">Habitat</h2>
                    <p className="capitalize">{habitat?.name}</p>
                </div>}
            </div>
            <div className="flex justify-between mt-8">
                {capture_rate && <div>
                    <h2 className="text-lg my-2 font-medium">Capture rate</h2>
                    <p>{capture_rate}</p>
                </div>}
                
                {growth_rate && <div>
                    <h2 className="text-lg my-2 font-medium">Growth rate</h2>
                    <p className="capitalize">{growth_rate?.name}</p>
                </div>}
            </div>
            {evolution_chain.url && <Suspense fallback={<LoadingSpinner />}>
                <EvolutionDetails url={evolution_chain.url} name={name} />
            </Suspense>}
            
        </div>
        
    )
}