import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { SERPAPI_KEY } from '../../config';
interface SearchResult {
  title: string;
  // 다른 필요한 결과 속성들을 추가할 수 있습니다.
}

const SearchResults: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const apiKey = SERPAPI_KEY;
    const searchEngine = 'google';
    const searchQuery = 'K리그';
    const tbm = 'nws';
    const location = 'Seoul';
    const apiUrl = `https://serpapi.com/search.json?engine=${searchEngine}&tbm=${tbm}&location=${location}&q=${searchQuery}&api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response: AxiosResponse<{ results: SearchResult[] }>) => {
        // SerpApi 응답 처리
        setResults(response.data.results);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
