package springboot.controller.qusroom;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;
import springboot.service.qusroom.QusRoomService;

@RestController
@RequestMapping("/room")
public class QusRoomController {

	@Resource
	private QusRoomService qusRoomService;

	/**
	 * 科室管理
	 * 
	 * @return
	 */
	@GetMapping("/roomManager")
	public List<QusRoom1> test1() {
		List<QusRoom1> roomList = qusRoomService.getRoom1List(null);
		System.out.println("一级科室名称\t二级科室名称");
		for (QusRoom1 qusRoom1 : roomList) {
			System.out.println(qusRoom1.getR1_name());
			for (QusRoom2 qusRoom2 : qusRoom1.getRoom2s()) {
				System.out.println("\t\t" + qusRoom2.getR2_name());
			}
		}
		return roomList;
	}
}
