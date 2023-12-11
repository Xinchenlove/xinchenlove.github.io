var posts=["2023/12/10/2023年回顾-最喜欢的一集/","2023/12/10/2023年总结/","2023/12/09/c++ English/","2023/12/11/数据结构/","2023/12/10/leetcode/","2023/12/10/c++问题笔记/","2023/12/10/image/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };