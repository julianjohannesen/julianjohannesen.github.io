import React from 'react';

export default function Footer() {
    return (
        <footer className="footer has-text-centered">
            <p><small>&copy; Copyright 2021, Julian Johannesen</small></p>
            <p><small>Please report any <a
                        href="https://github.com/julianjohannesen/julianjohannesen.github.io/issues"
                        title="Report issues on Github">issues</a>.</small></p>
            <p className="mt-2">
                <a href="https://bulma.io">
                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128"
                        height="24" />
                </a>
            </p>
        </footer>
    )
}
