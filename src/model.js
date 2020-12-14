import image from './assets/img/example.jpg'
import {Block} from './classes/blocks'

export const model = [
    new Block('title', 'Constructor sites on pure JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new Block('text', 'Lorem ipsum custom words!!!', {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to right, blue, green)',
            color: '#fff',
            'font-size': '16px',
            'text-align': 'center',
            padding: '10px 0 0 0'
        }
    }),
    new Block('columns', [
        '1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quidem corrupti, dolore harum ad autem iure fugiat facere, aut officia ex molestias excepturi inventore similique dignissimos nulla tempore vitae dolorum.',
        '2.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quidem corrupti, dolore harum ad autem iure fugiat facere, aut officia ex molestias excepturi inventore similique dignissimos nulla tempore vitae dolorum.',
        '3.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quidem corrupti, dolore harum ad autem iure fugiat facere, aut officia ex molestias excepturi inventore similique dignissimos nulla tempore vitae dolorum.'
    ], {
        styles: {
            background: 'linear-gradient(to right, red, purple)',
            color: '#fff',
            'font-size': '12px',
            'text-align': 'center',
            padding: '10px'
        }
    }),
    new Block('image', image, {
        styles: {
            '--bs-gutter-x': '0'
        },
        imageStyles: {
            width: '100%',
            height: 'auto'
        },
        alt: 'Main image site'
    })
]