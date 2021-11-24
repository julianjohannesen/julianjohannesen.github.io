import React from 'react'

export default function Octocat() {
    return (
        <aside className="column p-6">
            <figure id="octocat" className="image" style={{maxWidth: '500px'}}>
                <img id="ocoto-img"  alt="Julian Johannesen's custom Octocat"
                src="https://user-images.githubusercontent.com/252081/140809036-202933e0-6dc7-4cec-9e0a-3a5f63a20813.png" />
                <figcaption id="ocoto-caption" className="very-small">
                    <small>Seen here in his native habitat, the elusive Julian enjoys his morning coffee.</small>
                </figcaption>
            </figure>
        </aside>
    )
}
