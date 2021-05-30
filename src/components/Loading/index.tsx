import React from "react";

export default function Loading({children,isLoading}:any) {
    return (
        <React.Fragment>
            {isLoading ? <div className="loading-wrapper"><div className="loading"></div></div> : children}        
        </React.Fragment>
    );
}