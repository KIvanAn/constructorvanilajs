import image from './assets/img/example.jpg'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Constructor sites on pure JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('Lorem ipsum custom words!!!', {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to right, blue, green)',
            color: '#fff',
            'font-size': '16px',
            'text-align': 'center',
            padding: '10px 0 0 0'
        }
    }),
    new ColumnsBlock([
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
    new ImageBlock(image, {
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