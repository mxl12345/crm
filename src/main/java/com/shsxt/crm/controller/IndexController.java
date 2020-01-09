package com.shsxt.crm.controller;

import com.shsxt.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController extends BaseController {

    //进入登录页
    @RequestMapping("index")
    public String index(){
        return "index";
    }

    //进入首页
    @RequestMapping("main")
    public String main(){
        return "main";
    }



}
