package springboot.controller.qusroom;

import java.awt.Window;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	 * 科室列表
	 * 
	 * @return
	 */
	@GetMapping("/roomManager")
	public List<QusRoom1> test1() {
		List<QusRoom1> roomList = qusRoomService.getRoom1List(null);
//		System.out.println("一级科室名称\t二级科室名称");
//		for (QusRoom1 qusRoom1 : roomList) {
//			System.out.println(qusRoom1.getR1_name());
//			for (QusRoom2 qusRoom2 : qusRoom1.getRoom2s()) {
//				System.out.println("\t\t" + qusRoom2.getR2_name());
//			}
//		}
		return roomList;
	}

	/**
	 * 科室管理(修改科室)
	 * 
	 * @return
	 */
	@RequestMapping("/roomModify")
	public ModelAndView roomManageModify(HttpServletRequest request, @RequestParam("r1_id") Integer r1_id,
			@RequestParam("r2_id") Integer r2_id, @RequestParam("type") String type) {
		ModelAndView mv = new ModelAndView("back/page/news/roomAdd");
		mv.addObject("r1Id", r1_id);
		mv.addObject("r2Id", r2_id);
		mv.addObject("type", type);
		return mv;
	}

	@RequestMapping("/roomEdit")
	public boolean roomEdit(HttpServletRequest request, @RequestParam("r1_id") Integer r1_id,
			@RequestParam("r1_name") String r1_name, @RequestParam("r2_id") Integer r2_id,
			@RequestParam("r2_name") String r2_name) {
		QusRoom1 room1 = new QusRoom1(r1_id, r1_name);
		QusRoom2 room2 = new QusRoom2(r2_id, r2_name, r1_id);
		if (qusRoomService.editRoom1(room1) == qusRoomService.editRoom2(room2)) {
			System.out.println("修改成功");
			return true;
		} else {
			System.out.println("修改失败");
			return false;
		}
	}

	// 添加二级科室 的跳转
	@RequestMapping("/roomAddR2")
	public ModelAndView roomAddR2(HttpServletRequest request, @RequestParam(value = "r1_id") Integer r1_id,
			@RequestParam(value = "type") String type) {
		ModelAndView mv = new ModelAndView("/back/page/news/roomAdd");
		mv.addObject("type", type);
		mv.addObject("r1Id", r1_id);
		return mv;
	}

	// 添加一级科室
	@RequestMapping("/roomAdd")
	public ModelAndView roomAdd(@RequestParam(value = "type") String type) {
		ModelAndView mv = new ModelAndView("/back/page/news/roomAdd");
		mv.addObject("type", type);
		return mv;
	}

	// 添加二级科室 的实现
	@RequestMapping("/addR2")
	public Map<String, Object> addR2(@RequestParam(value = "r1_id") Integer r1_id, @RequestParam(value = "r2_name") String r2_name) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<QusRoom1> roomList = qusRoomService.getRoom1List(r1_id);
		for (QusRoom1 qusRoom1 : roomList) {
			for (QusRoom2 room2 : qusRoom1.getRoom2s()) {
				if (room2.getR2_name().equals(r2_name) || room2.getR2_name() == r2_name) {
					System.out.println("二级科室已存在");
					map.put("result", "EXIT");
					return map;
				}
			}
		}
		boolean re = qusRoomService.addRoom2(r1_id, r2_name);
		if (re) {
			System.out.println("添加成功");
			map.put("result", "SUCCESS");
		} else {
			System.out.println("添加失败");
			map.put("result", "ERROR");
		}
		return map;
	}
	
	// 添加一级科室
	@RequestMapping("/addR1")
	public Map<String, Object> addR1(HttpServletRequest request,@RequestParam(value = "r1_name") String r1_name) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<QusRoom1> roomList = qusRoomService.getRoom1List(null);
		for (QusRoom1 qusRoom1 : roomList) {
			if (qusRoom1.getR1_name().equals(r1_name) || qusRoom1.getR1_name() == r1_name) {
				System.out.println("一级科室已存在");
				map.put("result", "EXIT");
				return map;
			}
		}
		boolean re = qusRoomService.addRoom1(r1_name);
		if (re) {
			System.out.println("添加成功");
			map.put("result", "SUCCESS");
		} else {
			System.out.println("添加失败");
			map.put("result", "ERROR");
		}
		return map;
	}

	@RequestMapping("/del")
	public Map<String, Object> del(@RequestParam("r1_id") Integer r1_id, @RequestParam("r2_id") Integer r2_id) {
		Map<String, Object> map = new HashMap<String, Object>();
		if (r2_id == 0 || r2_id.equals(0)) {
			qusRoomService.delRoom1(r1_id);
			map.put("result", "SUR1");
		} else {
			qusRoomService.delRoom2(r2_id);
			map.put("result", "SUR2");
		}
		return map;
	}


}
