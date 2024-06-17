import React from "react";

import WebHead from "../components/webhead.component";
import { Description, Keywords } from "../components/constants.component";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Home",
                keywords: Keywords,
                description: Description
            },

        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                

            </>
        );
    }
}

export default HomePage;


