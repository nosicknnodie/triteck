import { MDBContainer } from "mdbreact";
// import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { useState } from "react";
import "./CounterComponent.css";

function CounterComponent() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1); // 리엑트 최적화시 필요한 함수형 업데이트
    //    setNumber(number + 5);
    //    console.log('+1');
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1); // 리엑트 최적화시 필요한 함수형 업데이트
    //    setNumber(number - 5);
    //    console.log('-1');
  };

  return (
    <MDBContainer>
      <div class="row">
        <div class="col-4">.col-4</div>
        <div class="col-4">.col-4</div>
        <div class="col-4">.col-4</div>
      </div>

      <div class="row">
        <div class="col-sm-4">.col-sm-4</div>
        <div class="col-sm-4">.col-sm-4</div>
        <div class="col-sm-4">.col-sm-4</div>
      </div>

      <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
      </div>

      <div class="row">
        <div class="col-lg-4">.col-lg-4</div>
        <div class="col-lg-4">.col-lg-4</div>
        <div class="col-lg-4">.col-lg-4</div>
      </div>

      <div class="row">
        <div class="col-xl-4">.col-xl-4</div>
        <div class="col-xl-4">.col-xl-4</div>
        <div class="col-xl-4">.col-xl-4</div>
      </div>
    </MDBContainer>
  );
}

export default CounterComponent;
