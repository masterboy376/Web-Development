// console.log('hello world');
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const http = require('http');

const hostname = '127.0.0.2';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!doctype html>
  <html lang="en">
  
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  
    <title>www.PetAdopt.com/Home</title>
    <style>
      #c1,
      #c2,
      #c3,
      #c4 {
        /* background-color: rgb(255, 219, 185); */
        border-radius: 5px;
      }
  
      .div {
        font-size: 20px;
      }
  
      .icon {
        width: 40px;
        height: 40px;
      }
    </style>
  </head>
  
  <body>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">PetAdopt</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="AdoptAPet.html">Adopt a pet</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                More here
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Pet Products</a></li>
                <li><a class="dropdown-item" href="#">Pet food</a></li>
                <li><a class="dropdown-item" href="#">Pet accesories</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="aboutus.html">About us</a></li>
                <li><a class="dropdown-item" href="supportus.html">Support us</a></li>
                <li><a class="dropdown-item" href="contactus.html">Contact us</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-info" type="button">Search</button>
            <div class="container ">
              <button class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#Signup">Sign up</button>
              <button class="btn btn-danger" type="button" data-bs-target="#Login" data-bs-toggle="modal">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  
    <!-- Modal 1 -->
    <div class="modal fade" id="Signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title " id="exampleModalLabel">Sign up</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="#">
              <input type="text" class="form-control my-3" placeholder="Username" aria-label="Username" required>
              <input type="password" class="form-control my-3" placeholder="Password" aria-label="password" required>
              <input type="password" class="form-control my-3" placeholder="Confirm password"
                aria-label="confirm password" required>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" type="button" data-bs-target="#Login" data-bs-toggle="modal">Already have an
              account?</button>
            <button type="submit" class="btn btn-warning">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Modal 2 -->
    <div class="modal fade" id="Login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Log in</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control my-3" placeholder="Username" aria-label="Username" required>
            <input type="password" class="form-control my-3" placeholder="Password" aria-label="password" required>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Signup">Don't have an
              account?</button>
            <button type="button" class="btn btn-warning">Log in</button>
          </div>
        </div>
      </div>
    </div>
  
    <!-- slider -->
    <div id="carouselExampleDark" class="div carousel carousel-dark slide carousel-fade bg-light mb-4"
      data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="img/img3.jfif" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h2>Welcome to PetAdopt</h2>
            <p>Find your best buddies</p>
            <a href="AdoptAPet.html" type="button" class="btn btn-danger btn-lg">Adopt a pet</a>
            <button type="button" class="btn btn-success btn-lg">Pet food</button>
            <button type="button" class="btn btn-warning btn-lg">Pet accesories</button>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="img/img1.jfif" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h2>Welcome to PetAdopt</h2>
            <p>Find your best buddies</p>
            <a href="AdoptAPet.html" type="button" class="btn btn-danger btn-lg">Adopt a pet</a>
            <button type="button" class="btn btn-success btn-lg">Pet food</button>
            <button type="button" class="btn btn-warning btn-lg">Pet accesories</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="img/img4.jfif" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h2>Welcome to PetAdopt</h2>
            <p>Find your best buddies</p>
            <a href="AdoptAPet.html" type="button" class="btn btn-danger btn-lg">Adopt a pet</a>
            <button type="button" class="btn btn-success btn-lg">Pet food</button>
            <button type="button" class="btn btn-warning btn-lg">Pet accesories</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  
    <!-- cards -->
    <div class="div">
      <div class="card mb-3 shadow container">
        <img src="card/card1.jfif" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title text-dark">Need a friend?</h2>
          <p class="card-text text-dark">Adopt a pet of your choice, for free of all charges!</p>
          <a href="AdoptAPet.html" class="btn btn-outline-danger">Adopt a pet</a>
        </div>
      </div>
      <div class="card mb-3 shadow container my-4">
        <img src="card/card2.jfif" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">Feed your buddy!</h2>
          <p class="card-text">Find all kind of pet food right here!</p>
          <a href="#" class="btn btn-outline-success">Pet food</a>
        </div>
      </div>
      <div class="card mb-3 shadow container">
        <img src="card/card3.jfif" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">Everyone should have a better life, and so, your pet!</h2>
          <p class="card-text">give your loved one all the facilities</p>
          <a href="#" class="btn btn-outline-warning">Pet accesories</a>
        </div>
      </div>
      <div class="card mb-3 shadow container my-4">
        <img src="card/card4.jfif" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">Want to help us?</h2>
          <p class="card-text ">Help us to grow our free platform with your kind donations.</p>
          <a href="supportus.html" class="btn btn-outline-primary">Suport us</a>
        </div>
      </div>
    </div>
  
  
    <!-- comment
    <div class="form-floating container-fluid mb-4">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
        style="height: 100px"></textarea>
      <label for="floatingTextarea2">Comments</label>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto mb-5">
      <button class="btn btn-outline-primary" type="button">Post</button>
    </div> -->
  
    <!-- footer   -->
    <div class="container">
      <footer class="container py-4">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>© 2020–till now PetAdopt, Inc. pvt. ltd. · <a href="#">Privacy</a> · <a href="#">Terms</a> · <a
            href="contactus.html">Contact us</a> · <a href="aboutus.html">About us</a></p>
        <p><a href="#"><img class="icon" src="icon/facebook.png" alt="Facebook"></a> . <a href="#"><img class="icon"
              src="icon/linkedin.png" alt="Linkedin"></a> . <a href="#"><img class="icon" src="icon/instagram.png"
              alt="Instagram"></a> . <a href="#"><img class="icon" src="icon/twitter.png" alt="Twitter"></a> . <a
            href="#"><img class="icon" src="icon/youtube.png" alt="Youtube"></a></p>
      </footer>
    </div>
  
  
    <!-- Optional JavaScript; choose one of the two! -->
  
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
      crossorigin="anonymous"></script>
  
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
      -->
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//REPL: read evaluate print loop
//_ means awnser


