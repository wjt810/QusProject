package springboot.service.qusroom.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qusroom.QusRoomDao;
import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;
import springboot.service.qusroom.QusRoomService;

@Service
public class QusRoomServiceImpl implements QusRoomService {
	
	@Resource
	private QusRoomDao qusRoomDao;

	@Override
	public List<QusRoom1> getRoom1List(Integer r1_id) {
		return qusRoomDao.getRoom1List(r1_id);
	}

	@Override
	public boolean delRoom2(Integer r2_id) {
		try {
			qusRoomDao.delRoom2(r2_id);
		}catch (Exception e) {
			return false;
		}
		return true;
	}

	/**
	 * 根据id获取一级科室
	 */
	@Override
	public QusRoom1 getRoom1ById(Integer r1_id) {
		return qusRoomDao.getRoom1ById(r1_id);
	}
	
	/**
	 * 根据id获取二级科室
	 */
	@Override
	public QusRoom2 getRoom2ById(Integer r2_id) {
		return qusRoomDao.getRoom2ById(r2_id);
	}
	
}
