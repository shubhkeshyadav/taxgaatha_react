import React, { useEffect, useCallback } from "react";
import PageHeader from "../../components/layout/PageHeader";
import Pagination from "../../components/layout/Pagination";
import Article from "../../components/article/Article";
import Category from "../../components/article/Category";
import SkeletonUi from "../../components/layout/Skeleton";
import useHttp from "../../hooks/useHttp";
import { getAllArticle } from "../../lib/article";
import SearchArticle from "../../components/article/SearchArticle";

import { useLocation, useSearchParams } from "react-router-dom";

function Articles() {
  const { sendRequest, status, data, error } = useHttp(getAllArticle, true);
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const keyword = searchParams.get("k") ? searchParams.get("k") : "";
  const pageNo = searchParams.get("page") ? searchParams.get("page") : 1;

  useEffect(() => {
    const url =
      process.env.REACT_APP_API_URL + location.pathname + "/" + location.search;
    sendRequest(url);
  }, [location, sendRequest]);

  const onPageChange = (pageNo) => {
    let allParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...allParams, page: pageNo });
  };

  const onKeywordSearch = (keyword) => {
    let allParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...allParams, page: 1, k: keyword });
  };

  let content;
  let paginationData;
  if (status === "completed") {
    if (typeof data.data.result != "undefined" && data.data.result.length > 0) {
      content = data.data.result.map((dt) => {
        return <Article key={dt.id} dt={dt} />;
      });
      paginationData = (
        <Pagination
          currentPage={pageNo}
          totalItems={data.data.total_records}
          onPageChange={onPageChange}
        />
      );
    }

    if (typeof data.data.result == "undefined") {
      content = (
        <h2 className="text-danger text-center">
          {process.env.REACT_APP_DATA_NOT_FOUND}
        </h2>
      );
    } else if (data.data.result.length < 1) {
      content = (
        <h2 className="text-danger text-center">
          {process.env.REACT_APP_DATA_NOT_FOUND}
        </h2>
      );
    }
  }

  if (status === "error") {
    content = (
      <h2 className="text-danger text-center">
        {process.env.REACT_APP_DATA_NOT_FOUND}
      </h2>
    );
  }

  return (
    <>
      <PageHeader title="Articles" breadcrumb={["Articles"]} />
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              {status === "pending" && <SkeletonUi height={90} count={5} />}
              {content}
              {paginationData}
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <SearchArticle
                keyword={keyword}
                onKeywordSearch={onKeywordSearch}
              />
              <Category />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
