
// Dom 에 직접 접근 하고 싶을때는 = useRef
import React, { useState, useRef } from 'react';

function InputSample2() {
    //   useSteate 여러개의 객체 형태의 문자열을 관리 
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const nameInput = useRef();

      // name 과 nickname 값을 쉽게 사용하기 위해 비구조 할당을 통해 추출
    const { name, nickname } = inputs;

   const onChange = (e) =>{
       //onChange 에서 name 값과 value 값을 미리 추출 한다
       const { name, value } = e.target;
       
       // 상태를 업데이트
       setInputs({
           ...inputs,
           [name]:value,
          
           

       });
    //    console.log(e.target.name);
    //    console.log(e.target.value);
   };
   const onReset = () => {
       setInputs({
           name:'',
           nickname:'',
       });
       // 초기화시 포커스를 nameInput으로 가져오기
       nameInput.current.focus();
     
   };
    return(
        
        <div> 
            <div>
            <h4>setInput를 통해 name, nickname input 상태를 업데이트 시키고 초기화 버튼을 클릭하여 포커스를 표시</h4>
            </div>
            <input name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value={name}
            ref={nameInput}/> 
             {/* useRef 를 nameInput으로 정의 하고 onReset 안에서 nameInput.current.focus(); 를 설정해 준뒤
            ref={nameInput}를 추가 해 두면 초기화 버튼 클릭시 nameInput 에 포커스가 돌아간다 */}

            <input name="nickname" 
            placeholder="닉네임" 
            onChange={onChange} 
            value={nickname}/>

            <button onClick={onReset}>초기화</button>
            <div>
              <b>값:</b> {name} ({nickname})
             </div>
        </div>
    )
}

export default InputSample2;