import React from 'react';

export default function ToolImage({theName, buttonColor}) {
    return (
        <img src={`https://img.shields.io/badge/-${theName}-${buttonColor}?style=flat-square&logo=${theName}&logoColor=white`} alt="theName" />
    )
}
