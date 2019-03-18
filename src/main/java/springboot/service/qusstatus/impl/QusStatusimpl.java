package springboot.service.qusstatus.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qusstatus.QusStatusDao;
import springboot.pojo.QusStatus;
import springboot.service.qusstatus.QusStatusService;
@Service

public class QusStatusimpl implements QusStatusService {
	
	@Resource
	public QusStatusDao qusStatusDao;
	
	@Override
	public QusStatus qusStatusBy(Integer sta_id) {
		return qusStatusDao.qusStatusBy(sta_id);
	}

}
