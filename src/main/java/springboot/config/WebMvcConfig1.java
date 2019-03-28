package springboot.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

import springboot.intercepter.LoginHandlerIntercepter;

@Configuration // 标注改类是一个配置类 取代xml文件
@EnableWebMvc
@ComponentScan
public class WebMvcConfig1 implements WebMvcConfigurer {

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		// 添加映射 相当于添加了一个 requestMapping("/list.html"); return "index";
		registry.addViewController("/login1.html").setViewName("/back/login");
		registry.addViewController("/error").setViewName("back/login");
	}

	@Bean // 添加到容器中 相当于实例一个bean
	public LoginHandlerIntercepter getLoginHandlerIntercepter() {
		return new LoginHandlerIntercepter();
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(getLoginHandlerIntercepter())// 不拦截登陆页面和注册页面,和静态资源
				.excludePathPatterns(Arrays.asList("/static/**", "/webjars/**", "/backLogin", "/login"))
				.addPathPatterns("/login");
	}
	
	// 添加视图解析器
/*	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		 registry.jsp("templates/jsp/", ".jsp");
	}*/

	
	//配置支付接口

    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/"); //配置放置jsp文件夹
        resolver.setSuffix(".jsp");
        resolver.setViewNames("jsp/*");  //重要 setViewNames 通过它识别为jsp页面引擎
        resolver.setOrder(2);
        return resolver;
    }
    /**
     * @Description: 注册html视图解析器
     * @params: []
     * @return: org.thymeleaf.templateresolver.ITemplateResolver
     * @author kikock
     * @date 2018/11/15 9:30
     */
    @Bean
    public ITemplateResolver templateResolver() {
        SpringResourceTemplateResolver templateResolver = new SpringResourceTemplateResolver();
        templateResolver.setTemplateMode("HTML");
        templateResolver.setPrefix("/WEB-INF/templates/");
        templateResolver.setSuffix(".html");
        templateResolver.setCharacterEncoding("utf-8");
        templateResolver.setCacheable(false);
        return templateResolver;
    }
 
    /**
     * @Description: 将自定义tml视图解析器添加到模板引擎并主持到ioc
     * @params: []
     * @return: org.thymeleaf.spring5.SpringTemplateEngine
     * @author kikock
     * @date 2018/11/15 9:32
     */
    @Bean
    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver());
        return templateEngine;
    }
    /**
     * @Description: Thymeleaf视图解析器配置
     * @params: []
     * @return: org.thymeleaf.spring5.view.ThymeleafViewResolver
     * @author kikock
     * @date 2018/11/15 9:38
     */
    @Bean
    public ThymeleafViewResolver viewResolverThymeLeaf() {
        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
        viewResolver.setTemplateEngine(templateEngine());
        viewResolver.setCharacterEncoding("utf-8");
        viewResolver.setViewNames(new String[]{"themleaf"});
        viewResolver.setOrder(1);
        return viewResolver;
    }
 
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
 
    /**
     * @Description: 配置静态文件映射
     * @params: [registry]
     * @return: void
     * @author kikock
     * @date 2018/11/15 9:41 
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("/WEB-INF/static/");
    }
}