import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import data from "../utils/data.json";

function DonationForm() {
    let { donationId } = useParams();
    const [dataDetail, setDatadetail] = useState(data.filter(items => items.id === donationId));
    const [tempVal, setTempVal] = useState(0);
    const [test, setTest] = useState(dataDetail[0].total);

    const handleChangeValue = (e) => {
        setTempVal(parseInt(e.target.value));
    }

    const calculate = () => {
        const tempTotal = parseInt(test);
        setTest(tempVal + tempTotal);
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ชื่อ - นามสกุล</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={(e) => handleChangeValue(e)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>จำนวน</Form.Label>
                    <Form.Control type="text" placeholder="ขั้นตํ่า 200 บาท" onChange={(e) => handleChangeValue(e)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ธนาคาร</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={(e) => handleChangeValue(e)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>เลขบัญชี</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={(e) => handleChangeValue(e)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ยอดบริจาคทั้งหมด</Form.Label>
                    <Form.Control type="text" value={test}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" onClick={calculate}>
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default DonationForm;