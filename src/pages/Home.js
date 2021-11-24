import React from 'react';
import Layout from '../components/Layout';
import Tools from '../components/Tools'
import Projects from '../components/Projects';
import FindMe from '../components/FindMe';
import Octocat from '../components/Octocat';

export default function Home() {
    return (
        <Layout>
                <Tools />
                <Projects />
                <FindMe />
                <Octocat />
        </Layout>
    )
}
