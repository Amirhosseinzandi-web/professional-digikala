"use client"

import { QueryClient, QueryClientProvider } from "react-query";




const ReactQuery: React.FC<React.PropsWithChildren> = ({ children }) => {
    const client = new QueryClient()
    return (
        <>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </>
    );
}

export default ReactQuery;



