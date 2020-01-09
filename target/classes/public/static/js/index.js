function login() {
    var userName=$("#userName").val();
    var passWord=$("#passWord").val();

    if(isEmpty(userName)){
        alert("请输入用户名！");
        return;
    }

    if(isEmpty(passWord)){
        alert("请输入密码！");
        return;
    }

    $.ajax({
        type:"post",
        url:ctx+"/user/login",
        data:{
            userName:userName,
            passWord:passWord
        },
        dataType:"json",
        success:function (data) {
            if(data.code==200){
                var result=data.result;
                $.cookie("userIdStr",result.userIdStr);
                $.cookie("userName",result.userName);
                $.cookie("trueName",result.trueName);
                window.location.href=ctx+"/main";
            }else {
                alert(data.msg);
            }
        }
    })


}