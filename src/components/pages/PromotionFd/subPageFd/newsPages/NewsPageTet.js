/* eslint-disable jsx-a11y/alt-text */
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import TopImgCompanyMobile from "../../../TopImgFd/TopImgCompanyMobile";
import TopImgCompanyWeb from "../../../TopImgFd/TopImgCompanyWeb";
import "./NewsPageTet.css";

const NewsPageTet = () => {
  return (
    <>
      <div id="newsPageTet">
        <div className="newsPageTetWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="newsPageTetMobile">
          <TopImgCompanyMobile />
        </div>

        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard className="my-5 px-5">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol className="text-center mb-5">
                      <img
                        src="/img/promotionFd/subPageFd/newsPages/tet.png"
                        className="imgTitle"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="hrCenter" />
                  <MDBRow>
                    <p className="title text-center mx-auto mb-5 font-weight-bold">
                      [ ET단상] 가상훈련시스템 전문인력 양성 필요하다
                    </p>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="text-center">
                      <p> 발행일 : 2016.11.07</p>
                    </MDBCol>
                  </MDBRow>
                  <hr className="hrCenter" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol className="text-center">
              <img
                className="img-fluid pb-5"
                src="/img/promotionFd/subPageFd/newsPages/tet_gjs.png"
                alt="상명대 스포츠ICT융합학과 기재석 교수 한국의 미래를 앞당기고 있다. ⓒ우먼스토리"
                style={{ width: "200px" }}
              />
            </MDBCol>
          </MDBRow>

          {/* <a href="#!">
              <MDBMask overlay="white-slight" />
            </a> */}
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p className="dark-grey-text font-weight-bold">
                정부는 4차산업 전략으로 가상현실(VR),증강현실(AR)이 포함된 9대
                국가 전략 프로젝트를 발표했다. 그러나
                헤드마은티드디스플레이(HMD)와 같은 디바이스에만 의존하는
                VR산업은 한계가 있어 현실 가능한 유망분야가 필요하다. 그 가운데
                하나가 정부가 13대 미래 성장동력 산업으로 지목한 ‘VRT(Virtual
                Reality Training)’로 지핑되는 가상훈련시스템이다.
                <br />
                <p></p>
                가상훈련시스템은 컴퓨터 공학, 전자, 기계,광학,제어,통신,뇌과학
                등 다양한 분야의 융합 기술을 통해 개발되는 시스템이기 때문에
                고가 장비와 다양한 부야 전문가각 필요하지만 국방이나
                미국항공우주국(NASA)과 같은 특정한 분야에 국한해서 발전해 왔다.
                <br />
                <p></p>
                엑슨모빌과 보잉은 직원 교육에 VR를 도입해 각각 석유 굴착과
                비행기 설계에 이를 활용하고, 미국 미식축구팀 또한 VR를 이용해
                전략훈련을 하고있다.
                <br />
                <p></p>
                인도,아프리카,남미,동남아시아 등과 같이 제조업이 취약한 국가가가
                많은 기술자를 배출하려면 다양한 분야에서 직업 훈련용
                가상훈련시스템이 필요한 상황이어서 수출 시장 전망도 밝다.
                <br />
                <p></p>
                국방을 포함해 산업, 스포츠, 엔터테인먼트, 교육 등 응용수요는
                급속도로 확대되는 반면에 전문가 공급은 절대 부족한 현실이다.
                현재는 대부분 컴퓨터 그래픽(CG)분야 경험자 일부가 VR를 이끌어
                가고 있지만 교육 환경이 열악해 VR기술을 이해하고 응용하기에는
                역부족인 상태다. 현재 군에서 VR를 이용한 시뮬레이터 개발 사업이
                수천억원에 이르는데다 종합전장훈련 등으로 군에서만 10배 이상
                수요가 있을 것으로 예상된다. 사업이 상업화되면 수요는 폭발할
                것으로 보인다. 그러나 전문 교육과 연구기관 부족으로 수요를
                소화해 내기가 어려운 실정이다. <br />
                <p></p>
                해외에서는 페이스북으로 인공지능(AI)과 VR를 통해 사람들이
                소통하도록 하겠다며 앞으로 10년동안 해당분야 사업을 최우선
                목표로 삼겠다고 발표했다.<p></p>
                이는 VR분야가 10년 동안은 발전할 수 있고, 나아가 세계를 이끄는
                산업분야가 될 수 있음을 의미한다. <p></p>
                국내 가상훈련 시스템 교육도 시스템 교육이라기보다는 주로 CG와
                응용소프트웨어(SW)교육에 집중돼 있다. 대학 관련 분야
                전문학과로는 KAIST의 문화기술대학원, 명지대
                소프트웨어콘텐츠학과, 남서울대 대학원 가상.증강현실학과.영상대
                가상현실 콘텐츠학과 등이 있지만 대부분의 대학에서는 컴퓨터
                학과에서 VR교육을 하고있다.<p></p>
                산업 인력 양성 기관에서도 VR교육하는 곳이 있다. 한국전파진흥협회
                전파방송통신인재개발교육원에서는 VR콘텐츠 제작 4개월 교육 과정,
                한국콘텐츠아카데미는 VR게임 개발 과정 문화 창조아카데미는 디지털
                융합과정을 각각 운영하고있다.<p></p>
                하지만 VR관련 교육내용이 대부분 디지털콘텐츠 개발 기술에 치중돼
                있어 전체 시스템을 설계하고 통합할 수 있는 기술을 교육하는
                기관은 매우 부족하다. 미국의 경우 기본이론은 각 분야에거
                다루지만 VR관련 연구소를 중심으로 국가과 기업으로 부터 자금을
                받아 CG 분야와 인터렉션 분야, 센서 및 디바이스 분야 등으로
                특화된 기술을 연구하면서 기술 개발과 함께 인력을 양성하고 있다.
                <p></p>
                이에 비해 국내 교육기관에서의 특화된 교육이나 연구 기관도
                부족하며, 특히 고가의 교육장비를 구비하기 쉽지 않은 환경이어서
                제대로 된 교육을 실시하기 어려운 실정이다.<p></p>
                이를 위해서 각 대학에 교육환경 개선을 위한 장비를 지원하는 것도
                한 방안이 될 수 있다. 그러나 현실성 있는 교육이 실제로
                이뤄지기는 어려울 것으로 보인다. 좀 더 나은 방안은 정부
                프로젝트를 통해 연구장비를 보유하고있는 전자 부품연구원이나
                한국전자통신연구원 같은 국책연구원,대학이 산업체와 연계해 개발과
                교육을 병행하는 것이다.<p></p>
                국책연구기관, 대학 같은 교육기관이 개발과 교육을 연계하기
                위해서는 대학 내에 가상훈련시스템 연구센터를 설립해서
                국책연구기관과 연구 과제를 공동 수행해야 한다. 참여학생을 위한
                현장감있는 교육이 될 수 있도록 대학에서 교육 과정을 개발해
                운영한다면 가상훈련시스템 개발 기술에 집중화된 고급 인력을 효과
                높게 양성할 수 있다.<p></p>
              </p>

              <MDBBtn
                className="mb-5"
                color="primary"
                size="sm"
                href="https://www.etnews.com/20161107000349"
                target="blank"
              >
                Read More
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default NewsPageTet;
