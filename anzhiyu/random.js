var posts=["2023/12/09/c++ English/","2023/12/09/leetcode/","2023/12/09/c++问题笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };