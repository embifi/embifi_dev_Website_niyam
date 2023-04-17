import {configureStore} from '@reduxjs/toolkit'
import usersBlog from '../features/app'

const store = configureStore({
    reducer:{
        custom:usersBlog
    }
})

export default store