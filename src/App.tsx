import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TopicDetailPage from './pages/TopicDetailPage';
import QuestionThreadPage from './pages/QuestionThreadPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:slug" element={<TopicDetailPage />} />
          <Route path="/question/:id" element={<QuestionThreadPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
