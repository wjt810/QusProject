package springboot.service.qusappointment.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qusappointment.QusAppointmentDao;
import springboot.pojo.QusAppointment;
import springboot.service.qusappointment.QusAppointmentService;
@Service
public class QusAppointmentServiceimpl implements QusAppointmentService {
	
	@Resource
	public QusAppointmentDao qusAppointmentDao;
	/**
	 * 根据id查找约单
	 */
	@Override
	public QusAppointment getAppointment(Integer id) {
		return qusAppointmentDao.getAppointment(id);
	}

}
