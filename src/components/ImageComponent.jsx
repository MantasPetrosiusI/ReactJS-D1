
import React from 'react'
class ImageComponent extends React.Component{
    render(){
        const {source} = this.props;
        const alter = this.props;
        return (<img src={source} alt={alter}></img>)
    }
}

export default ImageComponent;
