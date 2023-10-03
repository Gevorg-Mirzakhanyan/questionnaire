import { Route, Routes } from 'react-router-dom';
import './App.css';
import Answer from './components/Answer/Answer';
import Header from './components/Header/Header';
import Question from './components/Question/Question';



function App() {
  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path={'/'} element={<Question />} />
        <Route path={'/Answer'} element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
