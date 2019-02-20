/*eslint no-useless-constructor: "off"*/
import React, { Component } from "react";
import NavBar from "./../ui/template/NavBar";
import firebase from "../FirebaseDB";

class App extends Component {
  constructor(props) {
    super(props);

    this.sref = firebase.firestore().collection("strains2");
    this.pref = firebase.firestore().collection("latestprods");

    this.unsubscribe = null;
    this.state = {
      indica: 0,
      sativa: 0,
      hybrid: 0,
      vapes: 0,
      cannabis: 0,
      topicals: 0,
      concentrates: 0,
      hempcbd: 0,
      edibles: 0
    };
  }
  componentDidMount() {
    //Uncomment if you want to do a edirect
    //this.props.router.push('/fireadmin/clubs+skopje+items') //Path where you want user to be redirected initialy
    var hybrid = 0;
    var indica = 0;
    var sativa = 0;
    var vapes = 0;
    var cannabis = 0;
    var topicals = 0;
    var concentrates = 0;
    var hempcbd = 0;
    var edibles = 0;

    this.sref.onSnapshot(docSnap => {
      docSnap.forEach(doc => {
        if (doc.data().Type) {
          if (doc.data().Type.indexOf("Hybrid") == 0) hybrid++;
          else if (doc.data().Type.indexOf("Indica") == 0) indica++;
          else if (doc.data().Type.indexOf("Sativa") == 0) sativa++;
        }
      });
      this.setState({
        hybrid,
        indica,
        sativa
      });
    });

    this.pref.onSnapshot(docSnap => {
      docSnap.forEach(doc => {
        var docData = doc.data();
        if (docData.category_name != undefined) {
          switch (docData.category_name) {
            case "Vapes":
              vapes++;
              break;

            case "Cannabis":
              cannabis++;
              break;

            case "Topicals":
              topicals++;
              break;

            case "Concentrates":
              concentrates++;
              break;

            case "Hemp CBD":
              hempcbd++;
              break;

            case "Edibles":
              edibles++;
              break;
          }
        }
      });
      this.setState({
        vapes,
        cannabis,
        topicals,
        concentrates,
        hempcbd,
        edibles
      });
    });

    console.log("Componennt Mounted");
  }

  handleProductDataDownload = () => {
    return alert("PD CSV Download");
  };

  handleStrainsDataDownload = () => {
    return alert("Strains CSV Download");
  };

  render() {
    return (
      <div className="content">
        <NavBar />

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Strain Type Analytics</h3>
            </div>
            <div className="panel-body">
              <table className="table table-stripe">
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
              <div>
                <button onClick={() => this.handleStrainsDataDownload()}>
                  Download Strains Data - CSV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Product Type Analytics</h3>
            </div>
            <div className="panel-body">
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Product Type</th>
                    <th>Total Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vapes</td>
                    <td>{this.state.vapes}</td>
                  </tr>
                  <tr>
                    <td>Cannabis</td>
                    <td>{this.state.cannabis}</td>
                  </tr>
                  <tr>
                    <td>Topicals</td>
                    <td>{this.state.topicals}</td>
                  </tr>
                  <tr>
                    <td>Concentrates</td>
                    <td>{this.state.concentrates}</td>
                  </tr>
                  <tr>
                    <td>Hemp CBD</td>
                    <td>{this.state.hempcbd}</td>
                  </tr>
                  <tr>
                    <td>Edibles</td>
                    <td>{this.state.edibles}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button onClick={() => this.handleProductDataDownload()}>
                  Download Products Data - CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
