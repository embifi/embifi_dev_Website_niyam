import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  detailedBlog: {

    blog_title: "",
    image :"",
    blog: [{para_title:"", body:""}]
  }
}


const usersBlog = createSlice({
  name: 'detailedBlog',
  initialState,
  reducers: {
    bloger: (state, action)=>{

      state.detailedBlog= state.detailedBlog;
    },
  },
}
)


export const{bloger} =usersBlog.actions;
export default usersBlog.reducer;
// const [detailedBlog, setDetailedBlog] = useState({
//   blog_title: "",
//   image: "",
//   blogs: [  {para_title: "",
//   body: ""}]
// })