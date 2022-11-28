import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import data from "../utils/data.json";

function DonationDetail() {
    let { donationId } = useParams();
    const [dataDetail, setDatadetail] = useState({});

    useEffect(() => {
        // console.log(data.filter(items => items.id === donationId));
        setDatadetail(data.filter(items => items.id === donationId));
    }, [])

    return (
        <>
            {/* <img src="" alt="donate" /> */}
            <p>
                {dataDetail[0].name}
            </p>
            <p>
                {dataDetail[0].description}
            </p>
            <p>
                {dataDetail[0].total}
            </p>
        </>
    );
}

export default DonationDetail;