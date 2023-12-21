import {useEffect, useState} from "react";

function BannerGrid() {

    return(
        <>
            <div className="banner-grid grid grid-cols-2 gap-4">
                <div className="col">
                    <img src="https://picsum.photos/548/664?random=1" alt=""/>
                </div>
                <div className="col grid grid-cols-1 gap-4">
                    <div className="container">
                        <img src="https://picsum.photos/548/319?random=1" alt=""/>
                    </div>
                    <div className="container">
                        <img src="https://picsum.photos/548/319?random=1&blur=2" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerGrid;