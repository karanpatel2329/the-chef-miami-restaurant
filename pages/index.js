import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Fade from 'react-reveal/Fade';
export default function Home() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #4",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #5",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #6",
      description: "Probably the most random thing you have ever seen!",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsiveTestinomial = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main>
      <div
        className={styles.top}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade bottom>
        <center>
        <h1 style={{ color: "white", fontSize: "4rem", margin: "0" }}>
        The Chef of Miami Resturant
        </h1>
        </center>
        </Fade>
        <Fade bottom>
        <p style={{ color: "white", fontSize: "1.5rem" }}>
          Best Place to eat in miami
        </p>
        </Fade>
        <Fade bottom>
        <Button
              variant="contained"
              style={{ backgroundColor: "orange", borderRadius: "50px" }}
              width="50px"
            >
              Order Now
            </Button>
            </Fade>
      </div>

      <Grid
        container
        style={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Grid item xs={12} md={6}>
          <div>
            <Fade left>
            <h1>
              We Are More Than<br></br>Multiple Service
            </h1>
            </Fade>
            <br></br>
            <br></br>
            <Fade left>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            </Fade>
            <br></br>
            <br></br>
            <Fade left>
            <Button
              variant="contained"
              style={{ backgroundColor: "black", borderRadius: "50px" }}
            >
              About Us
            </Button>
            </Fade>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{padding:'20px'}}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Grid container>
                <Fade bottom>
                <Grid item xs={12} md={6}>
                  <center>
                    <img
                      src="/images/online-order.png"
                      height={40}
                      width={40}
                    />
                    <h2>Online Order</h2>
                    <p>Laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </center>
                </Grid>
                </Fade>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container>
              <Fade bottom>
                <Grid item xs={12} md={6}>
                  <center>
                    <img
                      src="/images/delivery-man.png"
                      height={40}
                      width={40}
                    />
                    <h2>Fast Delivery</h2>
                    <p>Laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </center>
                </Grid>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
          <br></br>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Grid container>
              <Fade bottom>
                <Grid item xs={12} md={6}>
                  <center>
                    <img src="/images/add-to-cart.png" height={40} width={40} />
                    <h2>Easy to Order</h2>
                    <p>Laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </center>
                </Grid>
                </Fade>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container>
              <Fade bottom>
                <Grid item xs={12} md={6}>
                  <center>
                    <img src="/images/24-hours.png" height={40} width={40} />
                    <h2>24/7 Support</h2>
                    <p>Laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </center>
                </Grid>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <br></br>
      <br></br>
      <br></br>

      <center>
        <Fade bottom>
        <h2 style={{ fontSize: "3rem", margin: "0" }}>Our Menu</h2>
        </Fade>
      </center>

      <br></br>
      <Grid container>
        <Grid item xs={12}>
        <Fade bottom>
          <Carousel responsive={responsive} infinite={true}>
            {items.map((item, i) => (
              <div key={i}>
                <center>
                  <h2>{item.name}</h2>
                </center>
                <center>
                  <img
                    src={"/images/menu" + (i + 1) + ".jpg"}
                    height={350}
                    width={350}
                  />
                </center>
                <center>
                  {" "}
                  <p>{item.description}</p>
                </center>
              </div>
            ))}
          </Carousel>
          </Fade>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <Grid styles={{ height: "100vh", backgroundColor: "red" }}>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop>
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
          <div
            className={styles.caption}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Fade bottom>
                <Carousel
                  infinite={true}
                  showDots={true}
                  responsive={responsiveTestinomial}
                >
                  <div style={{ padding: "60px" }}>
                    <h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Laboris nisi ut aliquip ex ea commodo consequat.
                    </h1>
                    <p>-By Customer Name 1</p>
                  </div>

                  <div style={{ padding: "60px" }}>
                    <h1>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Laboris nisi ut aliquip ex ea commodo consequat.
                    </h1>
                    <p>-By Customer Name 2</p>
                  </div>

                  <div style={{ padding: "60px" }}>
                    <h1>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </h1>
                    <p>-By Customer Name 3</p>
                  </div>
                </Carousel>
                </Fade>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <Fade bottom>
        <h2 style={{ fontSize: "3rem", margin: "0" }}>Real Taste of Miami</h2>
        </Fade>
      </center>

      <br></br>
      <br></br>
      <br></br>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        ><Fade left>
          <h2 style={{ fontSize: "6rem", margin: "0" }}>21</h2>
          <p style={{ fontSize: "2rem", margin: "0" }}>Year of Experience</p>
          </Fade>
        </Grid>
       
        
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fade bottom>
          <h2 style={{ fontSize: "6rem", margin: "0" }}>19</h2>
          <p style={{ fontSize: "2rem", margin: "0" }}>
            Millions Happy Clients
          </p>
          </Fade>
        </Grid>
      
       
        <Grid
                  xs={12}
                  md={4}
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        > <Fade right>
          <h2 style={{ fontSize: "6rem", margin: "0" }}>3</h2>
          <p style={{ fontSize: "2rem", margin: "0" }}>Locations</p>
          </Fade>       
        </Grid>
       
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container>
       
        <Grid item xs={12} md={6}style={{padding:'40px'}}>
        <Fade left>
          <img src="/images/menu1.jpg" size="cover" width="400" height="350"/>
          </Fade>
        </Grid>
        
        
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding:'40px'
          }}
        >
          <Fade right>
          <h1>Try Before You Subscribe</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <br></br>
          <div>
            <Button
              variant="contained"
              style={{ backgroundColor: "black", borderRadius: "50px" }}
              width="50px"
            >
              Subscribe Now
            </Button>
          </div>
          </Fade>
        </Grid>
       
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container>
      
        <Grid item xs={12} md={6} style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
        <Fade left>
         <center>
         <center><h1>Follow Us on Around Web</h1></center>
          <Grid item xs={12} style={{justifyContent:'space-evenly',alignItems:'space-evenly',display:'flex'}}>
            <img src="/images/facebook.png" width={40} height={40}/>
            <img src="/images/twitter.png" width={40} height={40}/>
            <img src="/images/youtubeIcn.png" width={40} height={40}/>
            <img src="/images/instaIcn.png" width={40} height={40}/>
            <img src="/images/linkedin.png" width={40} height={40}/>
            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          </Grid>
         </center>
         </Fade>
        </Grid>
        
       
        <Grid item xs={12} md={6}>
        <Fade right>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14373.80382138094!2d-80.24094976259214!3d25.75566438328323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6545e9efae3%3A0xff12d5d8de4edb9d!2sShenandoah%20Park!5e0!3m2!1sen!2sin!4v1664247551212!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Fade>
        </Grid>
       
      </Grid>
    </main>
  );
}
