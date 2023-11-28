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
import "./NewsPageWm.css";

const NewsPageWm = () => {
  return (
    <>
      <div id="newsPageWm">
        <div className="newsPageWmWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="newsPageWmMobile">
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
                        src="/img/promotionFd/subPageFd/newsPages/wm.png"
                        className="imgTitle"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="hrCenter" />
                  <MDBRow>
                    <p className="title text-center mx-auto mb-5 font-weight-bold">
                      과학으로 미래를 점친다
                    </p>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="text-center">
                      <p> 발행일 : 2020.10.12</p>
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
                src="/img/promotionFd/subPageFd/newsPages/wm_gjs_1.png"
                alt="상명대 스포츠ICT융합학과 기재석 교수 한국의 미래를 앞당기고 있다. ⓒ우먼스토리"
                style={{ width: "500px" }}
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
                미래예측을 먼저 할 수 있다면 우리에게 어떤 일이 일어날까. 아이가
                어떻게 자랄지 노인성 질환이 언제 올지 알 수 있는 기술이 한국에서
                개발 중이다.
                <br />
                <p></p>
                상명대 스포츠 ICT 융합학과 기재석 교수는 우리나라
                시뮬레이션쪽에서도 최고라고 해도 과언이 아니다. 그런 그가 센서를
                통해서 어린이 성장 및 노인성 질환을 넘어 스포츠 접목도 가능한
                센서를 만들어내고 있다.
                <br />
                <p></p>
                기재석 교수와 만나 그가 개발한 제품들과 앞으로 현실에 어떤
                영향을 미칠지 들어봤다.
                <p></p>
                -. 미래예측을 하는 센서라는 것이 무엇인가?
                <p></p>
                기재석 교수(이하 기) : 쉽게 얘기하면 신발밑창에 다는 센서를 통해
                걸음걸이를 확인하고 척추에 어떤 영향이 있는가 확인하는 그런
                제품을 개발 중이다. 성장시기에 걸음걸이를 보면 척추를 확인할 수
                있고 노인들도 질환이 생기면 걸음걸이의 밸런스가 깨진다. 이 뿐이
                아니라 거의 모든 스포츠에 적용이 가능해 부상을 미리 예방할 수도
                있다. 보드 시물레이터를 개발하기도 했었다. 워터, 스노우, 랜드
                모두 가능하게 만든 것이다. 긴장하고 힘주는 것과 긴장하지 않고
                힘주는 것은 많이 다르다. 그래서 더 좋은 방법을 찾아낼 수 있도록
                돕는 제품도 있다.
                <br />
                <p></p>
                -. 국방부 소방청 원자력 등 시물레이션쪽도 유명하다 들었다.
                <p></p>
                기 : 국방쪽 시물레이터를 개발했었다. 무기 조종이나 훈련,
                미사일의 가상 발사 등을 개발했다. 남대문 화재 이후 대형 문화재에
                불이 붙었을 때 어떻게 하는 것이 제일 좋은가 소방 지휘 방법을
                시물레이션으로 만들어 보기도 했었다. 핵발전소를 짓는 방법들은
                알지만 해체하는 방법을 아는 나라는 아직 제대로 없다. 후쿠시마
                원전 사태 이후 전 세계가 해체를 고민하고 있다. 이탈리아의 경우
                7기 모두 가동중단을 결정했다. 그러나 핵반응로를 해체하는 순서는
                아무도 모른다. 시물레이션을 돌려 가장 좋은 방법을 찾고 있는
                중이다. 이 시물레이션이 완료되면 한국 뿐 아니라 원자력 발전소가
                있는 모든 나라에 한국의 기술을 수출할 수 있게 된다.
                <br />
                <p></p>
                -. 원자력 발전소 이후의 계획이 있는가?
                <br />
                <p></p>
                기 : 핵융합연구소에서 연구 중인 프로젝트가 있다. 한국 뿐 아니라
                7개 국가(EU, 미, 러, 한, 일, 중, 인도)가 연합해 공동 연구중이다.
                2050년도를 목표로 원자력 발전소를 대체할 다른 발전소를 게획하고
                있다. 이 발전소는 클린에너지가 될 것이다.
                <br />
                <p></p>
                -. 개인들을 위한 것도 있는가?
                <p></p>기 : 자전거로 전 세계를 여행하는 VR(가상현실)을 만들고
                있다. 국가나 난이도를 선택해 본인 자전거로 집에서 여행이
                가능하게끔 만드는 것이다. 또 장애인 조정연맹 이사로 있으면서
                그들의 불편한 점을 살폈다. 집에서 노젓는 운동기구인 로잉머신을
                탈 때 축이 하나여서 문제가 있었고 가격조차 1000만원 이상의
                고가였다. 그래서 축을 두 개로 만들고 어느 한쪽에 힘이 더 갔을
                경우 방향이 어떻게 바뀌는지까지 측정가능하도록 만들었다.
                국산화에 성공해 200~300만원 정도로 가격도 낮췄다.
                <p></p>
                -. 장르가 무척 다양하다. 또 다른 것이 있는가?
                <p></p>기 : VR과 AI(인공지능)을 연결해 문화적 차이를 미리
                연습하는 것도 가능하다. 아랍의 문화를 모른 상태에서 갔다가
                실수를 하게 될 수도 있는데 그런 것을 외우는 것이 아니라 실상처럼
                겪고 이해할 수 있는 프로그램같은 것이다. 물론 언어교육은
                기본적으로 가능하다. 이것은 원격 수업이 가능하기 때문에
                코로나19같은 판데믹이 또 일어났을 경우 큰 도움이 될 것이다.
                발레의 경우 학생들은 각자 집에서 동작을 하지만 선생님은 학생들을
                군무로 맞춰 볼 수 있게도 가능하다.
                <p></p>
                출처 : 우먼스토리뉴스(http://www.woman-story.co.kr)
              </p>

              <MDBBtn
                className="mb-5"
                color="primary"
                size="sm"
                href="http://www.woman-story.co.kr/news/articleView.html?idxno=90"
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

export default NewsPageWm;
