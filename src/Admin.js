import React, { Component } from 'react';

import Master from './containers/Master'
import App from './containers/App'
import Fireadmin from './containers/Fireadmin'
import Firestoreadmin from './containers/Firestoreadmin'
import Push from './containers/Push'
import User from './containers/User'


import { Router, Route,hashHistory} from 'react-router'

class Admin extends Component {

  //Prints the dynamic routes that we need for menu of type fireadmin
  getFireAdminRoutes(item){
    if(item.link==="fireadmin"){
      return (<Route path={"/fireadmin/"+item.path} component={Fireadmin}/>)
    }else{

    }
  }

  //Prints the dynamic routes that we need for menu of type fireadmin
  getFireAdminSubRoutes(item){
    if(item.link==="fireadmin"){
      return (<Route path={"/fireadmin/"+item.path+"/:sub"} component={Fireadmin}/>)
    }else{

    }
  }

  //Prints the Routes
  /*
  {Config.adminConfig.menu.map(this.getFireAdminRoutes)}
  {Config.adminConfig.menu.map(this.getFireAdminSubRoutes)}
  */
  render() {


    return (
      <Router history={hashHistory}>
        <Route path="/account" component={User}></Route>
        <Route component={Master} >
            {/* make them children of `Master` */}
            <Route path={"/"} component={App}></Route>
            <Route path="/app" component={App}/>
            <Route path="/push" component={Push}/>
            <Route path="/fireadmin" component={Fireadmin}/>
            <Route path="/fireadmin/:sub" component={Fireadmin}/>
      
            <Route path="/firestoreadmin" component={Firestoreadmin}/>
            <Route path="/firestoreadmin/:sub" component={Firestoreadmin}/>
      
        </Route>
      </Router>
    );

   }

    
  }


export default Admin;
