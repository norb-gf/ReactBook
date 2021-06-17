import React, { Component } from 'react'
import '../css/styles.css'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span>Mensagem de rodapé</span>
                </footer>
            </div>
        )
    }
}

export default Footer;