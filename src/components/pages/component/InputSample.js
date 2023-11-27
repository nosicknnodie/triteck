import React, { useState, useRef } from 'react';

function InputSample() {
    const [Text, setText] = useState('');
    const textInput = useRef();
   const onChange = (e) =>{
        setText(e.target.value);
        console.log(e.target.value);
   }
   const onReset = () => {
       setText('');
       textInput.current.focus();

   }
    return(

        <div> 
            <div>
                <h4>setText를 통해 input 상태를 업데이트 시키고 초기화 버튼을 클릭하여 포커스를 표시</h4>
            </div>
            <input onChange={onChange} 
            value={Text} 
            ref={textInput}/> 
              {/* 초기화 버튼 클릭시 input 값을 초기화 하기 위해 value={Text} 를 삽입 , 
              value={Text} 가 없으면 input 안에 내용이 초기화 되지 않음*/}
            <button onClick={onReset}>초기화</button>
            <div>
              <b>값:</b> {Text} 
             </div>
        </div>
    )
}

export default InputSample;