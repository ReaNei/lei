---
title: 脚本本脚。
date: "2019-04-20"
---

```
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
        chmod u+x $file_func
        echo "Linux Shell Script $file_func" |boxes -d peek -p h10 > $file_bk
        cat $file_bk |boxes -d pound-cmt -i none >> $file_func
        rm -rf $file_bk
}
#
func_bash() {
        read -p "Do you want create $location? [Y|N]: "
        case $REPLY in
        Y|yes)
                mkdir -p $location
                func
                echo "$file_func created!"
                exit;;
        N|no)
                echo "OK, Bye..."
                exit;;
        *)
                func_bash
        #       echo "Please enter Y|yes or N|no!"
        esac
}
#
if [ $# = 0 ]
then
        echo "Please enter: ./xfile filename" |boxes -d peek -p h2
        exit
elif [ -d $location ]
then
        if [ -e $file_func ]
        then
                echo "$file_func is exist!"
                exit
        else
                func
        fi
else
        echo "$location is not exist!"
        sleep 1
        echo -n "but..."
        sleep 1
        clear
        # create
        func_bash
fi
#
```