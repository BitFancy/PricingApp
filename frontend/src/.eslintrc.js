module.exports = {
    'extends': [
        //...
    ],
    'plugins': [
        'lodash-template',
    ],
    'overrides': [
        {
            'files': ['*.html'],
            'parser': 'lodash-template/html',
        }
    ],
    'rules': {
        //...
    },
};