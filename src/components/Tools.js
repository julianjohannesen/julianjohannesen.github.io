import React from 'react';
import ToolImage from './ToolImage';
import {v4} from 'uuid';
const toolChain = require('../../tools.json');


export default function Tools() {

    const toolImageArray = toolChain.map(tool => {
        console.log(toolChain, tool);
        return <ToolImage tool={tool} key={v4()}/>;
    });

    return (
        <section id="tools" className="section pt-6 pb-3">
            <h3 className="title is-size-5">Tools</h3>
            <p className="container">
                <span id="tool-chain">
                    {toolImageArray}
                </span>
            </p>
        </section>
    )
}
