"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function ProjectDetail({ data }) {
  const [thumbUrl, setThumbUrl] = useState("");

  useEffect(() => {
    if (!data?.thumbnail) return;
    const supabase = createClient();
    const { data: pub } = supabase.storage.from("portfolio").getPublicUrl(data.thumbnail);
    setThumbUrl(pub.publicUrl);
  }, [data?.thumbnail]);
  
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-8 decription">
          <div className="contents shadow">           
            <Image className="img-fluid" src={getPublicURL(data.rep1_img)} width={762} height={504} alt={data.title} />
            <p>{data.rep1_desc}</p>
          </div>
          <div className="contents shadow">
            <Image className="img-fluid" src={getPublicURL(data.rep2_img)} width={762} height={504} alt={data.title} />
            <p>{data.rep2_desc}</p>
          </div>
        </div>
        <div className="col-md-4 portfolio_info">
          <div className="contents shadow">
            <h2>{data.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. </p>
            <p className="link">
              <a href="">Visit site &rarr;</a>
            </p>
            <hr className="double"/>
            <blockquote>
              <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.” </p>
              <small>- JOHN DOE, ACME INC. -</small>
            </blockquote>
            <p className="nav">
              <a href="" className="secondary-btn">&larr; Previous Project</a>
              <a href="" className="secondary-btn">Next Project &rarr;</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}