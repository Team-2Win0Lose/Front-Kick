import React, { useEffect } from 'react';
import styled from 'styled-components';
import { propsType } from './PlaceSearch';
import { useDispatch, useSelector } from 'react-redux';
import { setPlace } from '@/feature/SummarySlice';
import { RootState } from '@/app/store';

interface placeType {
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url: string;
}

const { kakao } = window as any;

const MapContainer = (props: propsType) => {
  // 마커를 담는 배열
  let markers: any[] = [];
  const dispatch = useDispatch();
  const { detailMeetingPlace, meetingPlace } = useSelector(
    (state: RootState) => state.summary,
  );

  // 검색어가 바뀔 때마다 재렌더링되도록 useEffect 사용
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    // 지도를 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성
    const ps = new kakao.maps.services.Places();

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 키워드로 장소를 검색합니다
    searchPlaces();

    // 키워드 검색을 요청하는 함수
    function searchPlaces() {
      let keyword = props.searchKeyword;

      if (!keyword.replace(/^\s+|\s+$/g, '')) {
        console.log('키워드를 입력해주세요!');
        return false;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청
      ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출
        displayPlaces(data);

        // 페이지 번호를 표출
        displayPagination(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수
    function displayPlaces(places: string | any[]) {
      const listEl = document.getElementById('places-list'),
        resultEl = document.getElementById('search-result'),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds();

      // 검색 결과 목록에 추가된 항목들을 제거
      listEl && removeAllChildNods(listEl);

      // 지도에 표시되고 있는 마커를 제거
      removeMarker();

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시
        let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
          marker = addMarker(placePosition, i, undefined),
          itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시
        // mouseout 했을 때는 인포윈도우를 닫기
        (function (marker, title) {
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            displayInfowindow(marker, title);
          });

          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });

          itemEl.onmouseover = function () {
            displayInfowindow(marker, title);
          };

          itemEl.onmouseout = function () {
            infowindow.close();
          };
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
      }

      // 검색결과 항목들을 검색결과 목록 Element에 추가
      listEl && listEl.appendChild(fragment);
      if (resultEl) {
        resultEl.scrollTop = 0;
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정
      map.setBounds(bounds);
    }

    // 검색결과 항목을 Element로 반환하는 함수
    // 기존 함수에 체크박스 관련 로직을 추가한 버전
    function getListItem(index: number, places: placeType) {
      const el = document.createElement('li');
      let itemStr = `
    <div class="info" style="display: flex; justify-content: flex-start; align-items: center;gap:10px; border: 1px solid black; border-radius: 12px; padding: 3px;">
      <div>
        <label class="checkbox-container" style="display: flex; justify-content: center; align-items: center; gap: 10px;">
          <input type="radio" name="place" class="checkbox-input">
          <div class="checkbox-custom"></div>
          <div>        
            <h5 class="info-item place-name" style="font-size: 16px;">${
              places.place_name
            }</h5>
            ${
              places.road_address_name
                ? `<p class="info-item road-address-name" style="font-size:12px; font-weight: 400;">
                    ${places.road_address_name}
                  </p>
                  <p class="info-item address-name" style="font-size:12px; font-weight: 400;">
                    ${places.address_name}
                    </p>`
                : `<p class="info-item address-name" style="font-size:12px; font-weight: 400;">
                    ${places.address_name}
                  </p>`
            }
          </div>
        </label>
      </div>
    </div>
    `;

      el.innerHTML = itemStr;
      el.className = 'item';
      el.onclick = function () {
        props.handleSearchLocation?.(places.place_name, places.address_name); // 장소명을 handleSearchLocation에 전달
      };
      // 클릭 시 체크박스 상태 변경
      const checkbox = el.querySelector('.checkbox-input');
      checkbox?.addEventListener('click', () => {
        dispatch(
          setPlace({
            meetingPlace: places.place_name,
            detailMeetingPlace: detailMeetingPlace,
            meetingPlaceAddress: places.address_name
          }),
        );
        el.classList.toggle('checked');
      });

      return el;
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    function addMarker(position: any, idx: number, title: undefined) {
      var imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions,
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출
      markers.push(marker); // 배열에 생성된 마커를 추가

      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 검색결과 목록 하단에 페이지번호를 표시하는 함수
    function displayPagination(pagination: {
      last: number;
      current: number;
      gotoPage: (arg0: number) => void;
    }) {
      const paginationEl = document.getElementById('pagination') as HTMLElement;
      let fragment = document.createDocumentFragment();
      let i;

      // 기존에 추가된 페이지번호를 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.lastChild &&
          paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        const el = document.createElement(
          'div',
        ) as unknown as HTMLAnchorElement;
        el.href = '#';
        el.innerHTML = i.toString();

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수
    // 인포윈도우에 장소명을 표시
    function displayInfowindow(marker: any, title: string) {
      const content =
        '<div style="padding:10px; z-index:1;" class="marker-title">' +
        title +
        '</div>';
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    // 검색결과 목록의 자식 Element를 제거하는 함수
    function removeAllChildNods(el: HTMLElement) {
      while (el.hasChildNodes()) {
        el.lastChild && el.removeChild(el.lastChild);
      }
    }
  }, [props.searchKeyword, detailMeetingPlace]);

  return (
    <MapWrapper>
    <MapContainer_>
      <MapDiv id='map' className='map' />
      <SearchResult id='search-result'>
        <ResultText>
          <ResultKeyword>{props.searchKeyword} 관련 검색결과</ResultKeyword>
        </ResultText>
        <ScrollWrapper>
          <PlacesList id='places-list'>
            {/* 여기에 동적으로 리스트 아이템을 추가하면 됩니다 */}
          </PlacesList>
        </ScrollWrapper>
        <Pagination id='pagination' />
      </SearchResult>
    </MapContainer_>
    </MapWrapper>
  );
};

export default MapContainer;

const MapWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

const MapContainer_ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MapDiv = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const SearchResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultText = styled.p`
  font-size: 1px;
  font-weight: bold;
`;

const ResultKeyword = styled.span`
  color: #1f1f45;
  font-size: 15px;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 3px 0;
  color: #1f1f45;
  & > li {
    padding: 8px 0;
  }
`;

const Pagination = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
