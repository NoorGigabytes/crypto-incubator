import React from "react";
import p1 from "../../static/img/partners/p1.png";
import p2 from "../../static/img/partners/p2.png";
import p3 from "../../static/img/partners/p3.png";
import p4 from "../../static/img/partners/p4.png";
import p5 from "../../static/img/partners/p5.png";
import p6 from "../../static/img/partners/p6.png";
import p7 from "../../static/img/partners/p7.png";
import p8 from "../../static/img/partners/p8.png";
import p9 from "../../static/img/partners/p9.png";
import p10 from "../../static/img/partners/p10.png";
import p11 from "../../static/img/partners/p11.png";
import p12 from "../../static/img/partners/p12.png";
import p13 from "../../static/img/partners/p13.png";
import p14 from "../../static/img/partners/p14.png";
import p15 from "../../static/img/partners/p15.png";
import p16 from "../../static/img/partners/p16.png";

export default function Partners() {
  const partners = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
  ];
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {partners.map((partner, index) => (
        <img
          key={index}
          src={partner}
          alt="partner"
          className="sm:w-44 w-32 h-full"
        />
      ))}
    </div>
  );
}
