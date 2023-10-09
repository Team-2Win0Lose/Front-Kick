export const teamnameConvertImg = (teamname:string) => {
    switch(teamname){
        case '강원':
            return 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png'
        
        case '광주':
            return 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png'
        
        case '대구':
            return 'https://kickstorage.blob.core.windows.net/logo/대구FC.png'

        case '대전':
            return 'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png'

        case '수원':
            return 'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png'
        
        case '수원FC':
            return 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.png'
        
        case '울산':
            return 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png'

        case '인천':
            return 'https://kickstorage.blob.core.windows.net/logo/incheon_united.png'
        
        case '전북':
            return 'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png'
        
        case '제주':
            return 'https://kickstorage.blob.core.windows.net/logo/jeju_united.png'
        
        case '포항':
            return 'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png'
        
        case '서울':
            return 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.png'
        
    }
}