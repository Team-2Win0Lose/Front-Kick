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
export const teamidConvertImg = (teamId: number) => {
  switch (teamId) {
    case 1:
      return 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg';

    case 2:
      return 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg';

    case 3:
      return 'https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg';

    case 4:
      return 'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg';

    case 5:
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg';
    case 6:
      return 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg';
    case 7:
      return 'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg';

    case 8:
      return 'https://kickstorage.blob.core.windows.net/logo/jeju_united.svg';
    case 9:
      return 'https://kickstorage.blob.core.windows.net/logo/incheon_united.svg';
    case 10:
      return 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg';
    case 11:
      return 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg';

    case 12:
      return 'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg';
  }
};
export const teamnameConvertteamId = (teamname: string) => {
  switch (teamname) {
    case '강원':
      return 1;

    case '광주':
      return 2;

    case '대구':
      return 3;

    case '대전':
      return 4;

    case '수원':
      return 5;

    case '수원FC':
      return 11;

    case '울산':
      return 10;

    case '인천':
      return 9;

    case '전북':
      return 12;

    case '제주':
      return 8;

    case '포항':
      return 7;

    case '서울':
      return 6;
  }
};
