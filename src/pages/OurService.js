import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../components/layout/Skeleton";

const OurService = () => {
  let { slug } = useParams();
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);

  const serviceContent = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/service-content/" + slug,
        {
          headers: {
            "Content-Type": "Application/Json",
          },
        }
      );

      const resp = await response.json();

      if (resp.success === true) {
        setData(resp.data);
      } else {
        throw new Error(resp.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    serviceContent();
    setData(false);
  }, [slug]);

  let content = "";

  if (typeof data.content !== "undefined") {
    content = data.content;
  }

  return (
    <>
      <div
        className="bannerimg cover-image bg-background3"
        data-image-src="{{asset('assets/images/banners/banner2.jpg')}}"
        style={{
          backgroundImage: 'asset("assets/images/banners/banner1.jpg',
          backgroundPosition: "center center",
        }}
      >
        <div className="header-text mb-0">
          <div className="container">
            <div className="text-center text-white ">
              <h1>Accounting / Bookkeeping</h1>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  Accounting / Bookkeeping
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  {!data && !error && <Skeleton count={5} />}

                  {error && <p className="text-danger text-center">{error}</p>}
                  {data && data.length === 0 && (
                    <p className="text-danger text-center">Data Not Found</p>
                  )}

                  {!error && (
                    <div
                      className="mb-4 text-center"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
