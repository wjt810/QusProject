package springboot.service.qusappointment.impl;

import java.util.List;

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
<<<<<<< HEAD
	/**
	 * 删除预约单号
	 */
	@Override
	public int selectAppointmentByDocId(Integer docId) {
		return qusAppointmentDao.selectAppointmentByDocId(docId);
=======
	
	/**
	 * 查找约单的详细信息----实则查询用户信息
	 */
	@Override
	public List<QusAppointment> getUserByAppList() {
		return qusAppointmentDao.getUserByAppList();
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
	}

}
