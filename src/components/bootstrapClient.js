'use client';

import { useEffect } from "react";

function bootstrapClient() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    
    return null;
}

export default bootstrapClient;