import React from 'react';

export default function ToolImage({tool: {toolName, buttonColor}}) {
    console.log(arguments);
    return (
        <img src={`https://img.shields.io/badge/-${toolName}-${buttonColor}?style=flat-square&logo=${toolName}&logoColor=white`} alt={toolName} />
    )
}
