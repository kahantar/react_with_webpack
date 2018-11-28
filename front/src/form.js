import React from 'react';
import axios from 'axios';

const key = '88ade0072d96b24255fb689720c20449';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
}
handleSublit(e){
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.state.search}`)
    .then((response) => console.log(response))
    .catch(()=>{})
}
    render(){
        return (
                <form onSubmit={(e) => this.handleSublit(e)}>
                    <div className="form-group">
                        <label>Search Movie</label>
                        <input className="form-control" placeholder="Movie" value={this.state.search} onChange={(e) => this.setState({search: e.target.value.trim()})}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
        )
    }
}

export default Form;