import React from 'react'
import Layout from '../components/Layout'
import Exp1 from '../experiments/exp1'
import StaticExp from '../experiments/StaticExp'

function experiment() {
    return (
        <Layout>
            <h1>This is Experiment Page</h1> 
            <code>
                <StaticExp/>
            </code>
        </Layout>
    )
}

export default experiment
