import React from 'react';
import {Link} from 'react-router-dom';

export default class CompanyName extends React.Component {
    render(){
        return (
            <div>
                <Link to="/" style={{  color: 'inherit' }} className="navbar-brand text-center border-bottom border-dark pb-2 w-100 mb-0">{this.props.companyName}</Link>
            </div>
        )
    }
}