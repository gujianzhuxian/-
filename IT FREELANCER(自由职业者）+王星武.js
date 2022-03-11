var a=[3,5,7];
var player=1;
while(true)
{
	var n = parseInt(prompt("请输入"+player+"号玩家拿牙签的数目（1-"+a[0]+"）",""), 10);
	if (n<1 || n>a[0]) {
        alert("所拿牙签数目错误，请重新输入！");
				continue;
	}
    a[0] -= n;
    if (a[0]==0)
        a.shift();
    alert("剩余牙签的数目："+a);
    if (a.length>0) {
		if(player==1)
			{player=2;}
		else
			{player=2;}
    } else {
        break;
    }
}
alert(player+"号玩家是最后一个拿火柴的，他输了！")
