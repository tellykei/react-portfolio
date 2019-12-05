import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

class WithAuth extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        
        idarray:[]
      };
      this.loaduserid = this.loaduserid.bind(this);
      this.handleDelete=this.handleDelete.bind(this);
    }

    async componentDidMount() {
      await this.loaduserid()
    }
    async loaduserid() {
      try {
          const response = await Axios.get('/api/messages/:id');
          const { data } = response;
          this.setState({ idarray: data });

      } catch (error) {

          console.error(error.message);
      }
  }
    async handleDelete(e){
      const{id} =this.state;
      try{
          const data= {_id: id};
          await Axios.delete('/api/messages/:id',data);

      }
      catch(error){
          console.error(error.message);
      }
      await this.loaduserid();
  }
  
    render() {
      return <div> 
        <Button 
        onClick={this.handleDelete} 
        variant={'contained'}
        style = {{color:'red'}}>
        Delete
        </Button>
        </div>
      

      
    }
  }
export default WithAuth;