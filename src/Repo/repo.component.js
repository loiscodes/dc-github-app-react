import React from "react";
import { Link } from "react-router-dom";
import { Octokit } from "@octokit/core";
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RepoCardComponent from "../Cards/repo-card/repo-card.component";
import './repo.component.css'
//
class RepoComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = { repos: [] };
    this.octokit = new Octokit({
      auth: process.env.GITHUB_AUTH_TOKEN
    });
  }

  componentDidMount() {
    this.fetchOrganizationsRepo();
  }

  fetchOrganizationsRepo = async () => {
    try {
      const _results = await this.octokit.request(`GET /orgs/${this.props.params.org}/repos`, {
        org: "org",
      });
      if (_results.status >= 200) {
        this.setState((originalState) => ({
          ...originalState,
          repos: _results.data,
        }));
      }
    } catch {
      // fail quietly
    }
  };


  render() {
    return (
      <>
      
    <Link to="/">Go Back</Link>
    {this.state.repos.length === 0 
    ? <p>Loading</p>
    : <div className="repo-card-list">
      {this.state.repos.map(repo => (
        <RepoCardComponent 
            key={repo.id} 
            owner={repo.owner.login}
            name={repo.name}
            desc={repo.description}
            ownerUrl={repo.owner.html_url}
            repoUrl={`http://github.com/${repo.full_name}`}
            repoClassName="repo-card-container" />
        
      ))} 
      </div>
  }
    </>
    );
  }
}

const withRouter = (Component) => (props) => {
    const history = useNavigate();
    const location = useLocation();
    const params = useParams(); 
    return <Component params = {params} history={history} location={location} {...props} />;
};

export default withRouter(RepoComponent);
