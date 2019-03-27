package springboot.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MapController {
	
/*	@RequestMapping("/test")
	public String test() {
		return "back/test";
	}*/
	
	@RequestMapping("/test1")
	public String test1() {
		return "back/test1";
	}
	
}
