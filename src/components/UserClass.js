import React from "react";
class UserClass extends React.Component{
  constructor(props) {
    super(props);
    //console.log(props);
  

   this.state = {
    userInfo:{
      name : "dummy",
      location : "defadult",
    }
   };
  }
async componentDidMount(){
  const data = await fetch("https://api.github.com/users/akshaymarch7");
  const json =  await data.json();


this.setState({
  userInfo:json,
});

}
render () { 
  const { name, location } = this.state.userInfo;
  

  return(
    <div className="user-info">
    
     
     
      <h3>Name:{name}</h3>
      <h3>location:{location}</h3>
      <h3>Email:Manav43@gmail.com</h3>
    </div>
  );
}
}

export default UserClass;