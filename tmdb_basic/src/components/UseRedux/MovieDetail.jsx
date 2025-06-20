import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMovieDetails } from '../../features/movieSlice'

function MovieDetail() {
   const { movieId } = useParams() // path에 있는 movieId를 가져온다.
   const dispatch = useDispatch()
   // ↓ state에 저장된 json형태의 값을 모두 가지고옴
   // {}안에는 가져온 값들 중 사용할 요소들을 작성
   // 만약 state.movies.movies <- 이렇게 사용한다면 json형태의 movies값만 가져오는것임!
   const { movieDetails, loading, error } = useSelector((state) => state.movies)

   // useEffect안에서 dispatch사용시 [] <- 여기에 dispatch 꼭 넣어주기
   // 맨 처음에 컴포넌트 렌더링후 1번 실행
   // 이후에는 movieId값이 바뀔때마다 실행
   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      // 맨처음 렌더링 발생시 movieDetails의 값은 null
      // -> 렌더링 이후 useEffect가 실행되면서 movieDetails 값이 들어옴
      // -> && 렌더링 연산자를 이용해 movieDetails값이 있을때만 렌더링 하도록 함
      <div style={{ padding: '20px' }}>
         {/* A && B null -> false이기 때문에 뒤에 값을 출력 ↓ */}
         {/* 초기값이 null이기 때문에 &&연산을 이용해 값을 뽑는다 */}
         {movieDetails && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} width="270" />
               </div>
               <div>
                  <h2>{movieDetails.title}</h2>

                  <h3>줄거리</h3>
                  <p>{movieDetails.overview}</p>

                  {/* 장르에서는 json객체가  저장되어 오류 발생 */}
                  {/* json을 map을 이용해 배열로 바꿔주고 join으로 사이사이 , 출력 */}
                  <h3>장르</h3>
                  <p>{movieDetails.genres.map((genres) => `${genres.name}`).join(', ')}</p>

                  <h3>개봉일</h3>
                  <p>{movieDetails.release_date}</p>

                  <h3>평점</h3>
                  <p>{movieDetails.vote_average}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail
