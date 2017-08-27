import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import UserTable from './UserTable';

// "https://fcctop100.herokuapp.com/api/fccusers/top/recent"
// "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
        .then((response) => {
            this.setState({users:response.data})
        }).catch((response) => {
            console.log(response);
        });
    }

    showRecent = () => {
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
        .then((response) => {
            this.setState({users:response.data})
        }).catch((response) => {
            console.log(response);
        });
    }

    showAlltime = () => {
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
        .then((response) => {
            this.setState({users:response.data})
        }).catch((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className="App">
                <h1>FCC Leaderboard</h1>
                <p>Listing Top 100 FreeCodeCamp users</p>
                <UserTable 
                    users={this.state.users} 
                    showRecent={this.showRecent} 
                    showAlltime={this.showAlltime} />
            </div>
        );
    }
}

export default App;
