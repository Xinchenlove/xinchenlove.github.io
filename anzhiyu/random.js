var posts=["2023/12/10/2023年总结/","2023/12/10/2023年回顾-最喜欢的一集/","2023/12/12/HTML-CSS学习笔记2/","2023/12/12/HTML_CSS学习笔记/","2023/12/09/c++ English/","2023/12/10/c++问题笔记/","2023/12/10/leetcode/","2023/12/10/image/","2023/12/11/单链表-数组模拟/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };