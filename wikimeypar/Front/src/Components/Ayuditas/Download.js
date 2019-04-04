import React, {Component} from 'react'
import axios from 'axios';

class Download extends Component{
    state = {
        ref: React.createRef()
    }

    exportDocument = () => {
        axios({
            url: 'http://www.gustavozuppa.com/descargar/CVGusZuppa.docx',
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.txt');
            document.body.appendChild(link);
            link.click();
          });
    }

    render(){
        return(
            <div>
                <a href={this.state.ref}>ref</a>
                <button onClick={this.exportDocument}>Download</button>
            </div>
        )
    }
}

export default Download