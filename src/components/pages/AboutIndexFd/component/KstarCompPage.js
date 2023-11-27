import React from "react";
// import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBLink } from "mdbreact";
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import { useQuery } from "@apollo/react-hooks";
import { GET_RESARCHS } from "../../../../common/GraphQL";
import KstarCompPageItem from "./KstarCompPageItem";
import "./KstarCompPage.css";

const KstarCompPage = (uuid) => {
  const { loading, error, data } = useQuery(GET_RESARCHS, {
    variables: { uuid: uuid },
  });
  if (loading) return <p>로딩...</p>;
  if (error) {
    return <div>{error.message}</div>;
  }

  const { resarchs } = data;

  return (
    <section id="kstarCard">
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="kstarCardBody">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            연구실적
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Research achievements
          </p>
          <MDBRow>
            {resarchs.map((kcpi) => {
              return (
                <>
                  <MDBRow className="mt-5 mb-5">
                    <KstarCompPageItem kcpi={kcpi} />
                  </MDBRow>
                </>
              );
            })}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </section>
  );
};

export default KstarCompPage;
