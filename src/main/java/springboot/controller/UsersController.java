package springboot.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.pojo.QusAppointment;
import springboot.service.qususer.QusUserService;

@RestController
@RequestMapping("/user")
public class UsersController {
	
	Logger logger = LoggerFactory.getLogger(UserController.class);
    @Resource
	private QusUserService qusUserService;
    
    /**
	 * 获取user列表
	 * @return
	 */
	@RequestMapping("/userList")
	public List<QusAppointment> userList() {
		List<QusAppointment> qusUserList= qusUserService.getUserList();
		return qusUserList;
	}
	/**
	 * 修改
	 * @return
	 */
	/**
	 * 删除
	 * @return
	 */
}
