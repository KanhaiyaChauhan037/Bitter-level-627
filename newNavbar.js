function newNavbar() {

 return   `
 <div id="navbar">
 <div id="first">
   <img id="img1" src="https://1000logos.net/wp-content/uploads/2021/05/Indeed-logo.png" alt="error">
   <img id="img2" src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png"
     alt="">
     <p1><a href="findjob.html">Find jobs</a></p1>
 
   <p1><a href="companyReview.html">Company reviews</a></p1>

   <p1><a href="salary.html">Salary Guide</a></p1>
 
 </div>
 <div id="second">

   <img class="dropbtn" src="https://cdn-icons-png.flaticon.com/512/589/589708.png" alt="">

   <img src="https://cdn-icons-png.flaticon.com/512/3602/3602123.png" alt="">

   <!-- dropdown option -->

   <div class="dropdown">
     <img class="dropbtn" src="https://cdn-icons-png.flaticon.com/512/3059/3059520.png" alt="">
     <div class="dropdown-content">
       <p id="email"></p>
       <a href="#">Profile</a>
       <a href="findjob.html">My jobs</a>
       <a href="#">My revies</a>
       <a href="#">Email settings</a>
       <a href="#">settings</a>
       <a href="#">Help Center</a>
      <a href="findjob.html" id="sigb">Sign out</a>
     </div>
   </div>

   <p1>Employers / Post Job</p1>
 </div>
</div>
 `


}

export default newNavbar; 