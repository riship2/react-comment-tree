export const testComments = {
    comments: [
        {
            text: 'parent 1',
            childComments: [{
                text: 'child 11'
            }, {
                text: 'child 12',
                childComments: [{
                    text: 'child 121'
                }]
            }]
        }, {
            text: 'parent 2',
            childComments: []
        }, {
            text: 'parent 3',
            childComments: [{
                text: 'child 31'
            }, {
                text: 'child 32'
            }, {
                text: 'child 33'
            }]
        }
    ]
}
