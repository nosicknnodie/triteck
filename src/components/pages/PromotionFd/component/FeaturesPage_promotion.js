import { MDBCard, MDBCardBody, MDBRow } from "mdbreact";
import FeaturesPagePromotionItem from "./FeaturesPagePromotionItem";
import "./FeaturesPage_promotion.css";
// import CommunityPage from "./CommunityPage";
import cardIcts from "@/common/data/_cardIct";
const FeaturesPage = (uuid) => {
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
