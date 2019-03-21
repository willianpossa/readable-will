import { css } from 'styled-components'

const sizes = {
    desktop: 1280,
    notebook: 1024,
    tablet: 768
}
  
const Media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)}
        }
    `

    return acc
}, {})

const Setup = {
    colors: {
        main: '#6B44BA',
        second: '#EBB419'
    }
}

export { Setup, Media }