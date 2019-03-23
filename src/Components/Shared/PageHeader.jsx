import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from './PageHeaderStyle'

const PageHeader = ({
    title,
    button
}) => (
    <Wrapper>
        <h2 className="title title-page">{ title }</h2>
        { button && 
            <Link className="button" to="/post/new">Novo Post</Link>
        }
    </Wrapper>
)

export default PageHeader