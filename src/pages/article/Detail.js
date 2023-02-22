import React, { useEffect, useState, useContext } from "react";
import PageHeader from "../../components/layout/PageHeader";
import Category from "../../components/article/Category";
import { useNavigate, useParams } from "react-router-dom";
import SkeletonUi from "../../components/layout/Skeleton";
import SearchArticle from "../../components/article/SearchArticle";
import useHttp from "../../hooks/useHttp";
import { getArticleDetail } from "../../lib/article";

const Detail = () => {
  const params = useParams();
  const slug = params.slug;
  const {
    sendRequest,
    status,
    data: articleData,
    error,
  } = useHttp(getArticleDetail, true);

  const navigation = useNavigate();

  let data, content;
  const onKeywordSearch = (keyword) => {
    if (keyword.length > 0) {
      navigation("/articles?k=" + keyword);
    }
  };

  useEffect(() => {
    sendRequest(slug);
  }, [sendRequest, params.slug]);

  if (status === "error") {
    content = (
      <h2 className="text-danger text-center">
        {process.env.REACT_APP_DATA_NOT_FOUND}
      </h2>
    );
  }
  if (status === "pending") {
    content = <SkeletonUi height={90} count={5} />;
  }

  if (status === "completed") {
    data = articleData.data;

    if (!data) {
      content = (
        <h2 className="text-danger text-center">
          {process.env.REACT_APP_DATA_NOT_FOUND}
        </h2>
      );
    }
  }

  return (
    <>
      <PageHeader title="Article Details" breadcrumb={["Article Detail"]} />

      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              {content}

              {data && (
                <div className="card">
                  <div className="card-body">
                    <div className="item7-card-img">
                      <img src={`${data.image}`} alt="img" className="w-100" />
                      <div className="item7-card-text">
                        <span className="badge bg-pink">{data.categories}</span>
                      </div>
                    </div>
                    <div className="item7-card-desc d-flex mb-2 mt-3">
                      <a href="#!">
                        <i className="fa fa-calendar-o text-muted me-2" />
                        {data.release_date}
                      </a>
                      <a href="#!">
                        <i className="fa fa-user text-muted me-2" />
                        {data?.created_by?.name ? data.created_by.name : "--"}
                      </a>
                    </div>
                    <a href="#!" className="text-dark">
                      <h2 className="font-weight-semibold">{data.title}</h2>
                    </a>
                    <p dangerouslySetInnerHTML={{ __html: data.description }} />
                  </div>
                </div>
              )}
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              <SearchArticle keyword="" onKeywordSearch={onKeywordSearch} />
              <Category />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
