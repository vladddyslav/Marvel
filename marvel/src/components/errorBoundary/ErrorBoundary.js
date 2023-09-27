import { Component } from "react";
import ErrMsg from "../errMsg/errMsg";

class ErrorBoundary extends Component {
   state = {
      error: false
   }

   componentDidCatch(error, errorInfo) {
      console.log(errorInfo);
      this.setState({
         error: true
      })
   }

   render() {
      if (this.state.error) {
         return <ErrMsg />
      }
      return this.props.children;
   }
}

export default ErrorBoundary;