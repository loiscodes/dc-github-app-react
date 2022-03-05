import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import OrgCardComponent from "../Cards/org-card/org-card.component";
import "./organization.component.css";
function OrganizationComponent() {
  // Lifecycle hook: useState, useEffect
  const [orgs, setOrgs] = useState([]);

  // Like a combination of ComponentDidMount and ComponentDidUpdate
  // takes a callback function and an array of dependencies so when
  // the deps change it will trigger an update, if its empty then it
  // will run once
  useEffect(() => {
    const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });
    const fetchOrganizations = async () => {
      try {
        const _results = await octokit.request("GET /organizations");
        if (_results.status >= 200) {
          setOrgs(_results.data);
        }
      } catch {
        // silently fail
      }
    };
    fetchOrganizations();
  }, []);
  return (
    <div className="org-card-list">
      {orgs.map((org) => (
        <OrgCardComponent
          key={org.id}
          name={org.login}
          imgSrc={org.avatar_url}
          desc={org.description}
          orgClassName="org-card-container"
        />
      ))}
    </div>
  );
}

export default OrganizationComponent;
