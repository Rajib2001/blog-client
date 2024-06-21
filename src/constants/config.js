// API_NOTIFICATION_MESSAGE


export const API_NOTIFICATION_MESSAGE={
    loading:{
        title:'Loading...',
        message:'Data is being loaded. Please wait.'
    },
    success:{
        title:'Success',
        message:'Data Successfully loaded'
    },
    responseFailure:{
        title:'ERROR',
        message:'An ERROR Occured while fethching response from the server.Please try again"',
    },
    requestFailure:{
        title:'ERROR',
        message:'An ERROR Occured while parsing request data',
    },
    networkError:{
        title:'ERROR',
        message:'Unable to connect with the server.Please check internet connectivity and try again later',
    }
}


// SERVICE CALL
 

export const SERVICE_URLS={
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },
    createPost:{url:'/create',method:'POST'},
    getAllPosts:{url:'/posts',method:'GET',params:true},
    getPostById:{url:"post",method:'GET',query:true},
    updatePost:{url:"/update",method:'PUT',query:true},
    deletePost:{url:"/delete",method:'DELETE',query:true},
    newComment:{url:"/comment/new",method:'POST'},
    getAllComments:{url:'/comments',method:'GET',query:true},
    deleteComment:{url:'/comment/delete',method:'DELETE',query:true}
}