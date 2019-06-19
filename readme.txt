6月19日
上传文件的实现
设计思路：
  1·创建两个标签 <input type = 'file'> 和任意标签
  2·将input标签隐藏
  3·用别的事件去触发input
  4·编写监听input的函数，当input发生变化时进行文件的上传
代码示例：
  html文件
<button class="update-file"></button>
<input class="opc-file" type="file" style="display: none;" accept="image/*">
  js文件
   $(".update-file").click(()=>{
                    $(".opc-file").click();
                });
   $(".opc-file").on("change",()=>{}

