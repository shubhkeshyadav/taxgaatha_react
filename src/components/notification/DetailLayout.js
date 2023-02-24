const DetailLayout = (props) => {
  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default DetailLayout;
