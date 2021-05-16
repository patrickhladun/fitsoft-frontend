
import React from 'react';

class ListEvents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch( "http://localhost:4001/event", {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'}}
      )
        .then(data => data.json())
        .then(data => {
            this.setState({
              isLoaded: true,
              items: data
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item._id}>
                {item.eventName} {item.eventType}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default ListEvents;