import image from './assets/img/example.jpg'

export const model = [
    {type: 'title', value: 'Constructor sites on pure JS', options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }},
    {type: 'text', value: 'Lorem ipsum custom words!!!', options: {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to right, blue, green)',
            color: '#fff',
            'font-size': '16px',
            'text-align': 'center',
            padding: '10px 0 0 0'
        }
    }},
    {type: 'columns', value: [
        '1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quidem corrupti, dolore harum ad autem iure fugiat facere, aut officia ex molestias excepturi inventore similique dignissimos nulla tempore vitae dolorum.',
        '2.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quidem corrupti, dolore harum ad autem iure fugiat facere, aut officia ex molestias excepturi inventore similique dignissimos nulla tempore vitae dolorum.',
        '3.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quidem corrupti, dolore harum ad autem iure fugiat facere, aut officia ex molestias excepturi inventore similique dignissimos nulla tempore vitae dolorum.'
    ], options: {
        styles: {
            background: 'linear-gradient(to right, red, purple)',
            color: '#fff',
            'font-size': '12px',
            'text-align': 'center',
            padding: '10px'
        }
    }},
    {type: 'image', value: image, options: {
        styles: {
            '--bs-gutter-x': '0'
        },
        imageStyles: {
            width: '100%',
            height: 'auto'
        },
        alt: 'Main image site'
    }}
]