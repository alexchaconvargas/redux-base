import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

import layout from './header.css'


export default class Header extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  render() {
    return (
    	<Toolbar>
    	<ToolbarGroup>
    	<FontIcon className="muidocs-icon-custom-sort" />
    		<a href="/" className={layout.avatar}><RaisedButton label="Home" primary={true} /></a>
    	</ToolbarGroup>
    	<ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="HOME" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          
          <IconMenu
            iconButtonElement={
              <Avatar  className={layout.avatar} src="img/fotoperfil.jpg" />
            }
          >
            <MenuItem primaryText="Mi perfil" />
            <MenuItem primaryText="Salir" />
          </IconMenu>
        </ToolbarGroup>
    	</Toolbar>
    	);
  }
}