import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function DonateCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src="/pic/banner.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ร่วมพิทักษ์เด็กกับพวกเรา</h3>
          <p>ร่วมกันดูแล ปกป้อง คุ้มครองเด็กให้เติบโตขึ้นอยู่ในสังคมอย่างปลอดภัยและมีความสุข ช่วยเหลือและคุ้มครองเด็ก ส่งเสริมสิทธิเด็ก สร้างสังคมที่ดีสำหรับเด็ก</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src="/pic/banner1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>โรงพยาบาล</h3>
          <p>หนึ่งหัวใจ สู่ชีวิตใหม่" รวมสมทบทุนให้กับโรงพยาบาล</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src="/pic/banner2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>ร่วมช่วยเหลือสัตว์</h3>
          <p>ผู้มีจิตเมตตาที่มองเห็นว่า ชีวิตสัตว์นั้น มีคุณค่าแก่ความช่วยเหลือ</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DonateCarousel;