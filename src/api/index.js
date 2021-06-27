import axios from '../network/index'

export function wordcloud() {
    return axios ({
        url: '/parameter/query',
        method:'get',
        // params: {
        //     icode:'13926EAFCAA16CC3'
        //   }
    })
}