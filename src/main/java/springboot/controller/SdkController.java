package springboot.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SdkController {
	
	@RequestMapping("/gopay")
	public String goPay() {
		System.out.println("goPay");
		return "jsp/index";
	}
    //这是测试写的
    @GetMapping("testJsp")
    public String testJsp(Model model) {
        model.addAttribute("message", "this is index jsp page");
        return "jsp/index";
    }
    @GetMapping("testThymeleaf")
    public String testVue(Model model) {
        model.addAttribute("message", "this is index html Thymeleaf");
        return "index";
    }
    //跳转到支付页面
    @PostMapping("notify_url")
    public String notifyUrl() {
        return "jsp/notify_url";
    }
    //关闭交易
    @PostMapping("refund_query")
    public String refundQuery() {
        return "jsp/refund_query";
    }
    
    //跳转到支付页面
    @RequestMapping("pagepay")
    public String pagePay(HttpServletRequest request,@RequestParam("WIDtotal_amount")String WIDtotal_amount,
    		@RequestParam("WIDout_trade_no")String WIDout_trade_no) {
    	//WIDtotal_amount=request.getParameter("price");
    	request.setAttribute("WIDtotal_amount", WIDtotal_amount);
    	request.setAttribute("WIDout_trade_no", WIDout_trade_no);
    	System.out.println(WIDtotal_amount);
        return "jsp/page_pay";
    }
    //
    @RequestMapping("return_url")
    public String returnUrl() {
        return "jsp/return_url";
    }
    @PostMapping("trade_refund")
    public String tradeRefund() {
        return "jsp/trade_refund";
    }
    @PostMapping("close")
    public String tradeClose() {
        return "jsp/close";
    }
    @PostMapping("trade_query")
    public String tradeQuery() {
        return "jsp/trade_query";
    }
}
