import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function DonationForm() {
    let { donationId } = useParams();

    useEffect(() => {
        
    }, [])

    return (
        <>
            {/* <img src="" alt="donate" /> */}
            {donationId}
        </>
    );
}

export default DonationForm;