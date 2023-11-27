import React from "react";
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import { useQuery } from "@apollo/react-hooks";
import { GET_CARDICTS } from "../../../../common/GraphQL";
import FeaturesPagePromotionItem from "./FeaturesPagePromotionItem";
import "./FeaturesPage_promotion.css";
// import CommunityPage from "./CommunityPage";

const FeaturesPage = (uuid) => {
  const { loading, error, data } = useQuery(GET_CARDICTS, {
    variables: { uuid: uuid },
  });
  if (loading) return <p>로딩...</p>;
  if (error) {
    return <div>{error.message}</div>;
  }

  const { cardIcts } = data;

  return (
    <>
      <section id="secPromotionId">
        <MDBCard
          className="my-5 px-5 mx-auto "
          style={{ fontWeight: 300, maxWidth: "90%" }}
        >
          <MDBCardBody style={{ paddingTop: 0 }}>
            <h2 className="h1-responsive font-weight-bold my-5 text-center">
              Community
            </h2>
            <p className="dark-grey-text font-weight-bold mx-auto mb-5 text-center">
              TriTech
            </p>

            <MDBRow>
              {cardIcts.map((commu) => {
                return (
                  <>
                    <FeaturesPagePromotionItem commu={commu} />
                  </>
                );
              })}
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </section>
    </>
  );
};

export default FeaturesPage;
