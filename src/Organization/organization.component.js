import React from 'react';
import { Octokit } from "@octokit/core";
import OrgCardComponent from '../Cards/org-card/org-card.component'
import './organization.component.css'

class OrganizationComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { orgs: [] }
    }

    fetchOrganization = async () => {
        const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });
        try{
            const _results = await octokit.request('GET /organizations');
            if(_results.status >= 200){
                this.setState(originalState => ({...originalState, orgs: _results.data }));
            }
        }catch{
            //fail silently
        }
    }

    componentDidMount(){
        this.fetchOrganization();
    }

    render() {

        return (
            <div className="org-card-list">
            {this.state.orgs.map(org => (
                <OrgCardComponent 
                key={org.id} 
                name={org.login} 
                imgSrc={org.avatar_url}
                desc={org.description}
                orgClassName="org-card-container"
                />
            ))

            }
            </div>
        )
    }
    
}

export default OrganizationComponent