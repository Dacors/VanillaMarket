import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class MenuItem extends React.Component{
    render(){
        const{menuItem} = this.props;
        return(
            <Nav.Item>
                <Link to={menuItem.url} className="btn font-weight-bold border-top-0 btn-outline-dark btn-block rounded-0" type="button">{menuItem.name}</Link>
            </Nav.Item>
        )
    }
}