import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* your routes */}
    </Router>
  );
}