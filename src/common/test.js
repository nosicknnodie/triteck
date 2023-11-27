import React from 'react';
import { useTranslation } from "react-i18next";

const Test = () => {
	// 여기서 사용, 리액트의 서스펜스를 사용하지 않을 때는 useTranslation의 두번째 매개변수로 useSuspense:false를 넣어줌
    // 서스펜스 사용 시 const {t} = useTranslation('lang');
    const { t } = useTranslation('ko', {useSuspense: false});

    return(
        <div>
            {t('test')}
        </div>
    )
}

export default Test;