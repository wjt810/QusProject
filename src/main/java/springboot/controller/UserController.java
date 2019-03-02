package springboot.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.User;
import springboot.service.UserService;

@RestController
public class UserController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	private UserService userService;
	
	@GetMapping("/list")
	public ModelAndView list(@RequestParam("name") String name) {
		List<User> list = userService.list(name);
		ModelAndView mv = new ModelAndView("index");
		for (User user : list) {
			logger.info(user.toString());
			mv.addObject("user", user.toString());
		}
		return mv;
	}
}
