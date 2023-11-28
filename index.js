const express = require('express')
const { dirname } = require('path'); 
const fileURLToPath = require('url');
const bodyParser = require("body-parser");
//blog
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//my selected port
const port = 3000;

const _ = require("lodash");


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const recipeJSON = '[{"title": "Title 1", "date": "2023-08-20", "text": "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero." ,"type": "night" },{"title": "Title 1", "date": "2023-08-20", "text": "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero." ,"type": "night" },{"title": "Title 1", "date": "2023-08-20", "text": "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero." ,"type": "night" } ]';


let file;
let navs;
let data;


var post1 = {
  title:"title 1",
  text:"ndependent since 1994, we design, manufacture and distribute exclusive typefaces. Each of our meticulously built typefaces is the result of years of teamwork at Typofonderie.",
  date:"2023-08-20",
}
var post2 = {
  title:"title 2",
  text:"ndependent since 1994, we design, manufacture and distribute exclusive typefaces. Each of our meticulously built typefaces is the result of years of teamwork at Typofonderie.",
  date:"2023-08-20",
}
var post3 = {
  title:"title 3",
  text:"ndependent since 1994, we design, manufacture and distribute exclusive typefaces. Each of our meticulously built typefaces is the result of years of teamwork at Typofonderie.",
  date:"2023-08-20",
}

var posts = [post1,post2,post3];

data = JSON.parse(recipeJSON)

navs=["active","non","non","non","non"];




app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/newspaper", (req, res) => {
    //res.render("index.ejs");
});
app.get("/about-me", (req, res) => {
    res.render("about-me.ejs");
});
app.get("/archive", (req, res) => {
    res.render("archive.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/cv", (req, res) => {
    res.render("cv.ejs");
});
app.get("/history", (req, res) => {
    res.render("history.ejs");
});


app.get("/dicee", (req, res) => {
    res.render("projects/dicee.ejs");
});
app.get("/drumkit", (req, res) => {
    res.render("projects/drum.ejs");
});
app.get("/library", (req, res) => {
    res.render("projects/library.ejs");
});
app.get("/qrGenerator", (req, res) => {
    res.render("projects/qrGen.ejs");
});
app.get("/thesimongame", (req, res) => {
    res.render("projects/simon.ejs");
});

app.get("/calculator", (req, res) => {
  res.render("projects/calculator.ejs");
});


app.get("/blogsite", (req, res) => {
    file="main.ejs";
    navs=["active","non","non","non","non"];
    res.render("projects/blog/home.ejs", {bodytemplate: file, activeBtn:navs, text:data, posts:posts});
  });
  
  app.get("/calender", (req, res) => {
    file="calender.ejs";
    navs=["non","active","non","non","non"];
    res.render("projects/blog/home.ejs", {bodytemplate: file, activeBtn:navs, posts:posts});
    
  });
  
  app.get("/guzar", (req, res) => {
    file="guzar.ejs";
    navs=["non","non","non","active","non"];
    res.render("projects/blog/home.ejs", {bodytemplate: file, activeBtn:navs, posts:posts});
    
  });
  
  app.get("/day", (req, res) => {
    file="day.ejs";
    navs=["non","non","non","non","active"];
    res.render("projects/blog/home.ejs", {bodytemplate: file, activeBtn:navs, posts:posts});
   
   
  });
  
  app.get("/night", (req, res) => {
    file="night.ejs";
    navs=["non","non","active","non","non"];
    res.render("projects/blog/home.ejs", {bodytemplate: file, activeBtn:navs, posts:posts});
  
  
  });
  
  app.get("/compose", (req, res) => {
    file="compose.ejs";
    navs=["non","non","non","non","non"];
    res.render("projects/blog/home.ejs", {bodytemplate: file, activeBtn:navs, posts:posts});
  
  
  });
  app.post("/compose", (req, res) => {
    const post = {
      title:req.body.titlename,
      text:req.body.textname,
      date:req.body.datename,
    }
    posts.push(post);
    res.redirect("/");
   
  });
  
  
  app.get("/posts/:postName",function(req,res) {
    var requestedTitle = _.lowerCase( req.params.postName);
    var file =requestedTitle;
  
    posts.forEach(function(post){
      const storedTitle= _.lowerCase( post.title);
      if(storedTitle === file){
        res.render("projects/blog/home.ejs", {bodytemplate: file, activeBtn:navs, post:post});
      } else {
  
      }
    });
  
    
  });
  
  


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});