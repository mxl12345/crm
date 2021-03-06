function openTab(text, url, iconCls){
    if($("#tabs").tabs("exists",text)){
        $("#tabs").tabs("select",text);
    }else{
        var content="<iframe frameborder=0 scrolling='auto' style='width:100%;height:100%' src='" + url + "'></iframe>";
        $("#tabs").tabs("add",{
            title:text,
            iconCls:iconCls,
            closable:true,
            content:content
        });
    }
}


function logout() {
    $.messager.confirm("来自crm","确定退出系统？",function (r) {
        if(r){
            $.removeCookie("userIdStr");
            $.removeCookie("userName");
            $.removeCookie("trueName");
            $.messager.confirm("来自crm","系统将在三秒后退出！","info");
            setTimeout(function () {
                window.location.href=ctx+"/index";
            },3000)
        }
    })
}

function openPasswordModifyDialog() {
    $("#dlg").dialog("open").dialog("setTitle","修改密码");
}

function modifyPassword() {
    $("#fm").form("submit",{
        url:ctx+"/user/updatePassWord",
        onSubmit:function () {
            return $("#fm").form("validate");
        },
        success:function (data) {
            data=JSON.parse(data);
            if(data.code==200){
                $.messager.alert("来自crm","密码修改成功，系统将在5秒后退出，请重新登录！","info");
                $.removeCookie("userIdStr");
                $.removeCookie("userName");
                $.removeCookie("trueName");
                setTimeout(function () {
                    window.location.href=ctx+"/index";
                },5000)
            }else {
                $.messager.alert("来自crm",data.msg,"error");
            }
        }
    })
}




