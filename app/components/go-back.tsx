'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GoBack() {
    const [renderLink, setRenderLink] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const router = useRouter();
    
    useEffect(() => {
        const splitPathname = pathname.split('/');
        if(splitPathname.length > 1 && splitPathname[1].length === 0) {
            setRenderLink(false);
        } else {
            setRenderLink(true);
        }
        
        
    }, [pathname]);

    return renderLink && <div className="m-2 hover:underline" onClick={() => router.back()}><span>&lt; Go back</span></div>
}