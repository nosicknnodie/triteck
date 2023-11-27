import React from "react";
// import {
//   // MDBRow,
//   // MDBCol,
//   // MDBCard,
//   // MDBCardBody,
//   // MDBMask,
//   // MDBIcon,
//   // MDBView,
//   // MDBBtn,
//   // MDBLink,
// } from "mdbreact";
import { useQuery } from "@apollo/react-hooks";
import { GET_TOPIMGPAGES } from "../../../common/GraphQL";
import TopImgCompPageItem from "./TopImgCompPageItem";
import "./TopImgCompPageItem.css";

const TopImgCompPage = (uuid) => {
  const { loading, error, data } = useQuery(GET_TOPIMGPAGES, {
    variables: { uuid: uuid },
  });
  if (loading) return <p>로딩...</p>;
  if (error) {
    return <div>{error.message}</div>;
  }

  const { topImgPages } = data;

  return (
    <section id="kstarCard">
      {topImgPages.map((ticp) => {
        return (
          <>
            <TopImgCompPageItem ticp={ticp} />
          </>
        );
      })}
    </section>
  );
};

export default TopImgCompPage;
