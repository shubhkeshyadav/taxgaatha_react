const SingleListItem = () => {
  return (
    <tr>
      <td>1-</td>
      <td>
        <p>
          <a href="#" className="me-4 text-dark  ">
            <b>$obj-&gt;title</b>
          </a>
          <br />
          <a href="{undefined}" className="me-4">
            <span>
              <b>Court</b>:$obj-&gt;court-&gt;name
            </span>
          </a>
          <a href="{undefined}" className="me-4">
            <span>
              <b>State</b>:{" "}
            </span>{" "}
            $obj-&gt;state-&gt;name??"--"{" "}
          </a>
          <a href="{undefined}" className="me-4">
            <span>
              <b>Release Year</b>:{" "}
            </span>{" "}
            $obj-&gt;year{" "}
          </a>
        </p>
        <p className="mb-0 leading-tight">
          {"{"}!!substr($obj-&gt;short_description, 0, 200).'..'??"--"!!{"}"}
          <a
            href="route('gst.law_detail',[$obj->slug])"
            className="btn btn-outline-success btn-sm employers-btn"
          >
            <i className="fa fa-book" />
            Read More
          </a>
        </p>
      </td>
    </tr>
  );
};

export default SingleListItem;
