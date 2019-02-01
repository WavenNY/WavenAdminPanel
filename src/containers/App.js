/*eslint no-useless-constructor: "off"*/
import React, {Component} from 'react'
import NavBar from './../ui/template/NavBar'
import firebase from '../FirebaseDB'

class App extends Component {
  constructor(props){
    super(props);
    super(props);
    this.sref = firebase.firestore().collection('testdump_strains');
    

    this.unsubscribe = null;
    this.state = {
      indica: 0,
      sativa: 0,
      hybrid: 0
    }
  }
  componentDidMount(){
    //Uncomment if you want to do a edirect
    //this.props.router.push('/fireadmin/clubs+skopje+items') //Path where you want user to be redirected initialy
   var hybrid = 0;
   var indica = 0;
   var sativa = 0;

    this.sref.onSnapshot( docSnap => { 
     
      docSnap.forEach(doc=>{
      if(doc.data().Type){
        if(doc.data().Type.indexOf("Hybrid") == 0)
        hybrid++;
        else if (doc.data().Type.indexOf("Indica") == 0)
          indica++;
        else if (doc.data().Type.indexOf("Sativa") == 0)
          sativa++;
        }
      })
      this.setState({
        hybrid,
        indica,
        sativa
      })
    });

    
    console.log("Componennt Mounted")
  }
  render() {
    return (
      <div className="content">
        <NavBar/>

       


            <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Strain Type Analytics
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Strain Type</th>
                  <th>Total Count</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>Hybrid</td>
                    <td>{this.state.hybrid}</td>
                   
                  </tr>
                  <tr>
                    <td>Indica</td>
                    <td>{this.state.indica}</td>
                   
                  </tr>
                  <tr>
                    <td>Sativa</td>
                    <td>{this.state.sativa}</td>
                   
                  </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default App;
