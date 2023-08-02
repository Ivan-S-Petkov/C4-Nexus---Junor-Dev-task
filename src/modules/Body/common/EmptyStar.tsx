import React from 'react'
import { styled } from 'styled-components'

type Props = {}

function EmptyStar({ }: Props) {
    return (
        <Wrapper>
            <img src="data:image/png;base64,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" alt="empty star" />
        </Wrapper>
    )
}

const Wrapper = styled.span`
    width: 20%;
    height: auto;

    img{
        width: 100%;
        height: auto;
    }
`

export default EmptyStar