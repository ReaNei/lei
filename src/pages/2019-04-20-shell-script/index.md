---
title: 初识脚本本脚。
date: "2019-04-20"
---

### &#x1F525; 快速创建一个初始化可执行脚本文件。

``` bash
#!/bin/bash
# /*       _\|/_
#          (o o)
#  +----oOO-{_}-OOo--------------------------+
#  |               Hello Shell               |
#  +----------------------------------------*/
#
location=$HOME/bash
file_bk=$location/$1_bk
file_func=$location/$1
#
function func {
        touch $file_func
        echo "#!/bin/bash" > $file_func
        chmod u+x $file_func
        echo "Linux Shell Script $file_func" |boxes -d peek -p h10 > $file_bk
        cat $file_bk |boxes -d pound-cmt -i none >> $file_func
        rm -rf $file_bk
}
#
func_bash() {
        read -n 1 -p "Do you want create $location? [Yes|No]: "
        case $REPLY in
        Y|y)
                mkdir -p $location
                func
				echo
                echo "$file_func created!" |boxes -d unicornsay -p h2
                exit;;
        N|n)
				echo
				echo "OK, Bye..." |boxes -d unicornsay -p h2
                exit;;
        *)
                echo
				echo "Please enter Y or N!" |boxes -d peek -p h2
                func_bash
        esac
}
#
if [ $# != 1 ]
then
        echo "Please enter: ./shell filename" |boxes -d peek -p h2
        exit
elif [ -d $location ]
then
        if [ -e $file_func ]
        then
                echo "$file_func is exist!" |boxes -d peek -p h2
                exit
        else
                func
                echo "$file_func created!" |boxes -d peek -p h2
        fi
else
        echo -e "$location is not exist! \nbut..." |boxes -d unicornthink -p h2
        sleep 1
#       clear
#       create location
        func_bash
fi
#
```
