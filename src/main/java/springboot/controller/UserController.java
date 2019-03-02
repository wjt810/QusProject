package springboot.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.pojo.User;
import springboot.pojo.User1;
import springboot.service.UserService;
@RestController
public class UserController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	private UserService userService;
	@RequestMapping("/list")
	public List<User1> selectList(){
		return userService.selecteInfo();
	}
}
