import React from 'react';
import { connect } from 'react-redux';
//import { fetchUser } from '../actions';

class UserHeader extends React.Component{

    // componentDidMount()
    // {
        
    //     this.props.fetchUser(this.props.userId);  // aCTION CREATOR IS BEING CALLED
    // }
render()
{
    console.log(this.props.user);
const {user}=this.props; 
    //const user=this.props.user.find(user=>user.id === this.props.userId);
    if(!user){
        return null;
    }
  return <div>{user.name}</div>;
}
    
}

const mapStatetoProps  = (state,ownProps) =>
{
  return {user : state.user.find(user=>user.id === ownProps.userId)
};
}

export default connect(mapStatetoProps)(UserHeader);

