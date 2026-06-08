import React from 'react'
import { Helmet } from 'react-helmet'

export default function TitlePage({ title }) {
    return (
        <Helmet>
            <title> {title} - Golden Coffee </title>
        </Helmet>
    )
}
