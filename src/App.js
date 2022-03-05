import './App.css';
import { BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import OrganizationComponent from './Organization/organization.component'
import RepoComponent from './Repo/repo.component';

function App() {
  return (
      <div className="App">
      <BrowserRouter>
    <Routes>
      {/* http://localhost:3001/ */}
      <Route path="/" element={<OrganizationComponent />} />
      {/* http://localhost:3001/org/repo/ministrycentered */}
      <Route path="org/repo/:org" element={<RepoComponent />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
