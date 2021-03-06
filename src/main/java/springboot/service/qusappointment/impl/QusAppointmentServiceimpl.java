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
	/**
	 * 删除预约单号
	 */
	@Override
	public int selectAppointmentByDocId(Integer docId) {
		return qusAppointmentDao.selectAppointmentByDocId(docId);
	}
	/**
	 * 查找约单的详细信息----实则查询用户信息
	 */
	@Override
	public List<QusAppointment> getUserByAppLists() {
		return qusAppointmentDao.getUserByAppLists();
	}
	/**
	 * 根据app_user_id(u_id)删除约单表
	 */
	@Override
	public Integer deleteAppByuserId(Integer u_id) {
		return qusAppointmentDao.deleteAppByuserId(u_id);
	}
	
	/**
	 * 添加约单
	 */
	@Override
	public int addAppInfo(QusAppointment qusAppointment) {
		return qusAppointmentDao.addAppInfo(qusAppointment);
	}
	
	/**
	 * 查询预约单的最后一条数据
	 */
	@Override
	public QusAppointment getAppEndInfo() {
		return qusAppointmentDao.getAppEndInfo();
	}

}
