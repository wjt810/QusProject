package springboot.config;
import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import springboot.intercepter.LoginHandlerIntercepter;

@Configuration//标注改类是一个配置类    取代xml文件
public class WebMvcConfig1 implements WebMvcConfigurer {
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		//添加映射  相当于添加了一个     requestMapping("/list.html");  return "index";
		registry.addViewController("/login1.html").setViewName("/back/login");
		registry.addViewController("/error").setViewName("back/login");
	}
	@Bean  //添加到容器中  相当于实例一个bean    
	public LoginHandlerIntercepter getLoginHandlerIntercepter() {
		return new LoginHandlerIntercepter();
	}
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(getLoginHandlerIntercepter())//不拦截登陆页面和注册页面,和静态资源
		.excludePathPatterns(Arrays.asList("/static/**","/webjars/**","/backLogin","/login"))
		.addPathPatterns("/**");  
	}
/*	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(getLoginHandlerIntercepter()).addPathPatterns("/sys/**"); 
		//registry.addInterceptor(getLoginHandlerIntercepter()).excludePathPatterns("/static/**","/backLogin","/login","/login.html"); //不拦截登陆页面和注册页面,和静态资源
	}*/

}