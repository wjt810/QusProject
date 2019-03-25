package springboot;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
	
	@Configuration
	public class MyWebConfig implements WebMvcConfigurer { 
	@Override   
	public void addResourceHandlers(ResourceHandlerRegistry registry) {  
		//和页面相关的页面
		registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/"); 
		}
	}
