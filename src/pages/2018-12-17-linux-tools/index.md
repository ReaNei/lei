---
title: 工欲善其事，必先利其器。
date: "2018-12-17"
---

To do a good job, an artisan needs the best tools (idiom).
Good tools are prerequisite the successful execution of a
job.

### tmux

[tmux][1.1] is a terminal multiplexer. See the [tmux(1) manual page][1.2].
``` bash
# tmux new -s session1 					新建会话
# tmux ls								会话列表
# tmux a -t session1    				进入会话
# tmux kill-session -t session1			终止会话
# tmux rename -t session1 session2		重命名会话
```
```
  C-b d									退出会话，保持后台运行
  C-b C-z								暂停tmux客户端
  C-b s									查看会话列表
  C-b :									输入tmux命令提示符
  C-b $									重命名当前会话
  C-b ，								重命名当前窗口
  C-b c 								新建窗口
  C-b p									切换至上个窗口（previous）
  C-b n									切换至下个窗口（next）
  C-b 0-9								切换窗口0-9
  C-b w									查看窗口列表
  C-b & /C-d /exit	 					终止窗口
  C-b %									左右拆分当前窗口
  C-b "									上下拆分当前窗口
  C-b o									切换当前窗口的下个窗格
  C-b C-o /{}							旋转当前窗格
  C-b Space								切换当前窗口所有窗格样式
  C-b z									缩放当前窗格
  C-b x /exit							关闭当前窗格
```

### boxes &#x1F354

[Boxes][2.1] is a command line filter program that draws ASCII art boxes around your input text ([examples][2.2]).

``` bash
# echo "ReaNei" | boxes -d santa -a c -s 30x17

                     .-"``"-.
                    /______; \
                   {_______}\|
                   (/ a a \)(_)
                   (.-.).-.)					-d 指定boxes模型
      _______ooo__(    ^    )____________		-a 文本位置 eg: c
     /             '-.___.-'             \		-s boxes规格 eg：30x17
    |         		 ReaNei		          |		-p 文本填充 eg: a1r2 alrtb
	|         https://reallei.com         |		-r 拆除boxes
     \________________________ooo________/		-d java-cmt -i box 批量注释，可保存原有代码格式
                   |_  |  _|  UUU				-d pound-cmt -i none 批量注释，不保持原有代码格式
                   \___|___/					-d headline 文本之间填充空格
                   {___|___}
                    |_ | _|
                    /-'Y'-\
                   (__/ \__)
```

















[1.1]: https://github.com/tmux/tmux/wiki "tmux/wiki"
[1.2]: http://man.openbsd.org/OpenBSD-current/man1/tmux.1
[2.1]: http://boxes.thomasjensen.com/
[2.2]: http://boxes.thomasjensen.com/examples.html
