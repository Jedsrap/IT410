import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import data from "../utils/data.json";

function DonationDetail() {
    let { donationId } = useParams();
    const [dataDetail] = useState(data.filter(items => items.id === donationId));


    return (
        <>
            {/* <img src="" alt="donate" /> */}
            <p>
                {dataDetail[0].name}
            </p>
            <p>
                {dataDetail[0].description}
            </p>
        </>
    );
}

export default DonationDetail;