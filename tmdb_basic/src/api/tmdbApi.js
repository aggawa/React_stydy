import axios from 'axios'

// 공통되는 URL을 BASE_URL로 지정
const BASE_URL = 'https://api.themoviedb.org/3'
// 나의 계정의 키 (Authorization)
// 보안이 중요한 키값이라 .env에 저장한 값을 불러옴
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

// axios 객체 생성
// create() 함수 실행 -> axios 객체 생성 -> axios를 통해 API를 call
const tmdbApi = axios.create({
   baseURL: BASE_URL, // 똑같이 반복되는 URL
   headers: {
      accept: 'application/json', // JSON 객체로 결과값을 받음
      Authorization: `Bearer ${AUTH_KEY}`, // 인증키
   },
})

// 인기영화 목록 가져오기
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/popular', {
      // 쿼리스트링
      // url의 'language=ko-KR&page=1&region=KR' 이 부분을 지정해준것임
      params: {
         language: 'ko-KR',
         page, // page: page, <- 이것과 같은 의미 page는 getMovies의 매개변수
         region: 'KR',
      },
   })
   return response // 결과데이터 반환
}

// 개봉예정 영화 목록 가져오기
export const getUpcomingMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/upcoming', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

// 영화 상세 정보 가져오기
export const getMovieDetails = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response // 결과데이터 반환
}

// tmdbApi는 외부에서 가져와 쓰므로 export 필수
export default tmdbApi
