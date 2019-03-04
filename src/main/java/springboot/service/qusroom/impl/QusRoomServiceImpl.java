package springboot.service.qusroom.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qusroom.QusRoomDao;
import springboot.pojo.QusRoom1;
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
	
}
