package springboot.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.pojo.QusUser;
import springboot.service.qususer.QusUserService;

@RestController
public class UserController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	private QusUserService qusUserService;
	
	@RequestMapping("/list")
	public List<QusUser> selectList(){
		return qusUserService.getUserList();
	}
}
