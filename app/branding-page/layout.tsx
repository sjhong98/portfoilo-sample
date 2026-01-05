import React from "react";
import ContextStore from "@/context/contextStore";

export default function BrandingPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden sm:w-auto w-full">
            <ContextStore>
            {children}
            </ContextStore>
        </div>
    )
}