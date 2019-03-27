package springboot.intercepter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusAdmin;

@Configuration
public class LoginHandlerIntercepter implements HandlerInterceptor {
	// 登陆检查，如果没有登陆、就不能访问
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.out.println("preHandle");
		// 目标方法执行之前
		QusAdmin user = (QusAdmin) request.getSession().getAttribute("qusAdmin");//查看管理员是否登陆
		System.out.println("拦截的路径是：\t"+request.getRequestURI());
		if(user!=null) {
			System.out.println("已经登陆");
			return true;
		}else {
			System.out.println("还未登陆");
			request.getRequestDispatcher("/login1.html").forward(request, response);
			return false;
		}
	}
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			@Nullable ModelAndView modelAndView) throws Exception {
		System.out.println("postHandle");
	}
	
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
			@Nullable Exception ex) throws Exception {
		System.out.println("afterCompletion");
	}
}
