import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlainHeader from "../Components/PlainHeader";
import FooterComp from "../Components/Footer";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Box,
  Container,
  Divider,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Blogs.css";
import { getAllBlogs, baseURL } from "../api/index";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";

function BLogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImage = async (key) => {
    // console.log('me hu key ', key);
    try {
      let { data } = await axios.get(
        // `${BASE_URL}/common/view?key=${key}`,
        key,
        {
          responseType: "blob",
          headers: { application: "EMBIFI-WEBSITE" },
          withCredentials: true,
        }
      );

      return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getBlogs = async () => {
    setLoading(true);
    let response = await getAllBlogs();
    if (!response.status) {
      return toast.error(
        response?.response?.data?.message || "Something went wrong"
      );
    }
    let arr = blogs;
    console.log(arr);
    let arr1 = arr.concat(response?.data?.data);
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
      let key_temp = `${baseURL}/embifi-website/get-blog-image?key=${
        arr1[i]?.key ?? "no data"
      }`;
      let key_temp1 = `${baseURL}/embifi-website/get-blog-image?key=${
        arr1[i]?.userData?.key ?? "nothing"
      }`;
      let b64 = await getImage(key_temp);
      // console.log(b64)
      let bit64 = (await getImage(key_temp1)) ?? "hello";
      arr1[i].image = b64;
      if (arr1[i]?.userData?.image) {
        arr1[i].userData.image = bit64;
      }
    }
    console.log(arr1);
    setBlogs(arr1);
    return setLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleDetailBlog = (blog) => {
    // navigate("/view-blog")
    navigate(
      `/view-blog/${blog?.blog_title
        ?.replaceAll(" ", "-")
        ?.replaceAll(",", "")}`,
      { state: { blog: blog, blogs: blogs } }
    );
  };
  console.log(blogs);

  return (
    <div className="Blog__container">
      {/* Blog header */}
      <div>
        <PlainHeader />
      </div>

      {/* Blog Main Body  */}

      <div className="main-comp">
        <div>

        <Container>
          <CssBaseline />
    
          <Grid
            sx={{
              minHeight: "500px",
            }}
            className="mt-3"
            container
          >
            {  loading ? (
              <div className="loader-cont">
                <div class="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              blogs?.map((blog, index) => {
                if (index == 0) {
                  //main blog image
                  return (
                    <Grid
                      
                      onClick={() => {
                        handleDetailBlog(blog);
                      }}
                    >
                      <Card
                        key={index}
                       
                      >
                        {/* blog Image */}
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height={index === 0 ? "285" : "140"}
                            image={blog?.image}
                            alt="blog image..."
                          />
                      
                            <Typography
                              sx={{
                                fontsize: "2rem",
                                color: "white",
                              }}
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {blog?.blog_title?.slice(0, 25) + "..."}
                            </Typography>
                            <Typography
                              sx={{
                                color: "rgba(255, 255, 255, 0.711)",
                              }}
                              variant="body2"
                              color="text.secondary"
                            >
                              {blog?.blogs?.[0].body?.slice(0, 200) + "..."}
                            </Typography>
                            <div className="profile-details-cont">
                              <div>
                                <img
                                
                                  src={
                                    blog?.userData?.image
                                      ? blog.userData.image
                                      : "HumanImage"
                                  }
                                />
                              </div>
                              <span >{blog?.userData?.name}</span>
                              <span style={{ color: "rgb(208 214 224 / 68%)" }}>
                                {(blog?.createdAt || blog?.updatedAt) && "| "}
                                {moment(
                                  blog?.createdAt || blog?.updatedAt
                                ).format("Do MMMM, YYYY")}
                              </span>
                            </div>
                         
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                }
              })
            )}
          </Grid>
        </Container>


        </div> 

        <div className="sub__blog">
        <Container>
          <CssBaseline />
       

          <Grid
            sx={{
              minHeight: "500px",
            }}
            className="mt-3"
            container
          >
            {  loading ? (
              <div className="loader-cont">
                <div class="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              blogs?.map((blog, index) => {
                if (index !== 0) {
                  //main blog image
                  return (
                    <Grid
                
                      onClick={() => {
                        handleDetailBlog(blog);
                      }}
                    >
                      <Card className="blog-card"
                        key={index}
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: "#000000e8",
                          color: "white",
                          maxWidth: index === 0 ? 770 : 345,
                          height: index === 0 ? 450 : 345,
                        }}
                      >
                     <div className="blog_card-1">
                      <img src={blog?.image} />
                      {/* <h5 className="test">hello</h5> */}
                     </ div>
                     
                        
                      </Card>
                      <h5 className="test">{blog?.blog_title}</h5> 
                      <img src={blog?.userData?.image} alt="userImage"/>
                    </Grid>
                  );
                }
              })
            )}
          </Grid>
        </Container>
        </div>  


      </div>

      {/* Blog Footer */}
      <div>
        <FooterComp />
      </div>
    </div>
  );
}

export default BLogs;
