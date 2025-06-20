// import MovieList from './components/NonRedux/MovieList'
// import MovieUpcoming from './components/NonRedux/MovieUpcoming'
import { Route, Routes } from 'react-router-dom'
import MovieList from './components/UseRedux/MovieList'
import MovieDetail from './components/UseRedux/MovieDetail'
import NotFound from './components/UseRedux/NotFound'
// import 시켜주기

function App() {
   // return <MovieList />
   //  return <MovieUpcoming />
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         {/* http://localhost:5173/를 의미함 */}
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         {/* http://localhost:5173/detail/1234를 의미함 */}
         <Route path="/*" element={<NotFound />} />
         {/* 위의 둘을 제외한 나머지 경로를 의미함 */}
      </Routes>
   )
}

export default App

// 경로 뒤에 detail/111, detail/?를 넣어 제대로 연결이 되었는지 확인하거라
