import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Octokit } from "@octokit/core";
import RepoCardComponent from "../Cards/repo-card/repo-card.component";
import './repo.component.css'

//
function RepoComponent(props) {
    // Lifecycle hook: useState, useParams, useEffect
  const [repos, setRepos] = useState([]);
    const { org } = useParams();
  // Like a combination of ComponentDidMount and ComponentDidUpdate
  // takes a callback function and an array of dependencies so when
  // the deps change it will trigger an update, if its empty then it 
  // will run once
  useEffect(() => {
    const fetchOrganizationsRepos = async () => {
    const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });
      try {
        const _results = await octokit.request(`GET /orgs/${org}/repos`, {
            org: 'org'
          })
          if(_results.status >= 200){
            setRepos(_results.data);
          }
      } catch {
        // silently fail
      }
    };
    fetchOrganizationsRepos();
  }, [org]);
  return (
    <>
    <Link to="/">Go Back</Link>
    {repos.length === 0 
    ? <p>Loading...</p>
    :(<div className="repo-card-list">
      {repos.map(repo => (
        <RepoCardComponent 
            key={repo.id} 
            owner={repo.owner.login}
            name={repo.name}
            desc={repo.description}
            ownerUrl={repo.owner.html_url}
            repoUrl={`http://github.com/${repo.full_name}`}
            repoClassName="repo-card-container" />
        
      ))}
      </div>)}
    </>
  );
}

export default RepoComponent;
