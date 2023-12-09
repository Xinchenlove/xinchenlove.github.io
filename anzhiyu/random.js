var posts=["2023/12/09/c++ English/","2023/12/10/c++问题笔记/","2023/12/10/leetcode/","2023/12/10/image/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };