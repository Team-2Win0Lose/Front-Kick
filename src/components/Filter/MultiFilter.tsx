// import React, { useCallback, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// type Props = {};

// const MultiFilter = (props: Props) => {
//   const navigate = useNavigate();
//   const [clickedCheckList, setclickedCheckList] = useState([]);
//   const handleCheckList = (e, content, idx, sort_type) => {
//     e.target.checked
//       ? setclickedCheckList([
//           ...clickedCheckList,
//           { id: idx, content, sortType: sort_type },
//         ])
//       : setclickedCheckList(
//           clickedCheckList.filter((list) => list.content !== content),
//         );
//   };
//   const makeQueryString = () => {
//     const queryString = clickedCheckList
//       .map(({ id, content, sortType }) => {
//         return sortType === 'category' || sortType === 'types'
//           ? `${sortType}_id=${parseInt(id) + 1}`
//           : `${sortType}=${content}`;
//       })
//       .map((item, idx) => {
//         return idx === 0 ? item : '&' + item;
//       })
//       .join('');

//     navigate(`?${queryString}`);
//   };
//   const getCardListData = useCallback(async () => {
//     const res = await API();

//     const data = await res.json();
//     setCardList(data.result);
//   }, [search]);

//   useEffect(() => {
//     getCardListData();
//   }, [getCardListData]);

//   return <div>MultiFilter</div>;
// };

// export default MultiFilter;
