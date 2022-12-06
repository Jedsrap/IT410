import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import data from "../utils/data.json";

function DonationForm() {
    let { donationId } = useParams();
    const [dataDetail, setDatadetail] = useState(data.filter(items => items.id === donationId));
    const [tempVal, setTempVal] = useState(0);
    const [amount, setAmount] = useState(dataDetail[0].total);
    const [currentAmount, setCurrentAmount] = useState(((dataDetail[0].total / dataDetail[0].max_donate) * 100).toFixed(2));
    const [maxAmount, setMaxAmount] = useState(((dataDetail[0].total / dataDetail[0].max_donate) * 100).toFixed(2));

    const handleChangeValue = (e) => {
        setTempVal(parseInt(e.target.value));
    }

    const calculate = () => {
        const tempTotal = parseInt(amount);
        setAmount(tempVal + tempTotal);
        calculateRange(tempVal + tempTotal);
        calculateMaxRange(tempVal + tempTotal);
        console.log("currentAmount, maxAmount", currentAmount, " ", maxAmount)
    }

    const calculateRange = (curAmount) => {
        let tempVar = (curAmount / dataDetail[0].max_donate) * 100;
        setCurrentAmount(tempVar.toFixed(2));
    }

    const calculateMaxRange = (curAmount) => {
        let tempVar = ((curAmount / dataDetail[0].max_donate) * 100);
        setMaxAmount(tempVar.toFixed(2));
    }
    
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        สำหรับไว้ติดต่อหากพบปัญหากับยอดบริจาคของท่าน
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>ชื่อ - นามสกุล</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDonate">
                    <Form.Label>จำนวน</Form.Label>
                    <Form.Control type="text" placeholder="ขั้นตํ่า 10 บาท" onChange={(e) => handleChangeValue(e)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEBank">
                    <Form.Label>ธนาคาร</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAccountNo">
                    <Form.Label>เลขบัญชี</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTotal">
                    <Form.Label>ยอดบริจาคทั้งหมด</Form.Label>
                    <Form.Control type="text" value={amount + " / " + dataDetail[0].max_donate} style={{ background: `linear-gradient(90deg, #006ECC ${currentAmount}%, white ${maxAmount}%)` }} disabled />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" onClick={calculate}>
                    ร่วมบริจาค
                </Button>
            </Form>
        </>
    );
}

export default DonationForm;