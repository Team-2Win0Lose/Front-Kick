export const teamnameConvertImg = (teamname: string) => {
  switch (teamname) {
    case '강원':
      return 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg';

    case '광주':
      return 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg';

    case '대구':
      return 'https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg';

    case '대전':
      return 'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg';

    case '수원':
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg';

    case '수원FC':
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg';

    case '울산':
      return 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg';

    case '인천':
      return 'https://kickstorage.blob.core.windows.net/logo/incheon_united.svg';

    case '전북':
      return 'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg';

    case '제주':
      return 'https://kickstorage.blob.core.windows.net/logo/jeju_united.svg';

    case '포항':
      return 'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg';

    case '서울':
      return 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg';
  }
};
