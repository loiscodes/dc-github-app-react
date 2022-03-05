import './App.css';
import { BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import OrganizationComponent from './Organization/organization.component'
import RepoComponent from './Repo/repo.component';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<OrganizationComponent />} />
      <Route path="org/repo/:org" element={<RepoComponent />} />
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}
}

export default App;
