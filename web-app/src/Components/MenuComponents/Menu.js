import React from 'react';
import MenuItem from './MenuItem';

import './Menu.css'


export default class Menu extends React.Component {
    
    render(){
        return this.props.menuItems.map((e) => <MenuItem key={e.id} menuItem={e}/>)
    }
}