import React from "react";
import Image from "next/image";
import { technology } from "@/data/services";
import Link from "next/link";
export default function Services() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Our Technology</h2>
          <p>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer. */}
          </p>
        </div>
        <div className="row">
          {technology.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 m-b30 wow ${item.animation}`}
              data-wow-duration="2s"
              data-wow-delay={item.delay}
            >
              <div className="dlab-box service-box-5">
                <div className="dlab-info">
                  <div className="icon-bx-sm icon-bx-xs bg-primary icon-up">
                    {/* <Link
                      href={`/services-details/${item.title}`}
                      className="icon-cell"
                    > */}
                      <i className={item.iconClass} />
                    {/* </Link> */}
                  </div>
                  <div className="section-head style2">
                    <h2 className="title">
                     {item.title}
                    </h2>
                    {/* <h4 className="title">
                      <Link href={`/services-details/${item.title}`}>
                        {item.title}
                      </Link>
                    </h4> */}
                    <p className="text-black">{item.description}</p>
                      <div className="section-content box-sort-in m-b10 p-b0 button-example">
                        <div className="row">
                          <div className="">
                            <ul className="list-hand-point green">
                              {item.list.map((listItem, index) => (
                                <li key={index}><b className="text-black">{listItem.title}</b>{listItem.description}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
