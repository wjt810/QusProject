package springboot.service.qusdoctor.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qusdoctor.QusDoctorDao;
import springboot.pojo.QusDoctor;
import springboot.service.qusdoctor.QusDoctorService;
@Service
public class QusDoctorServiceimpl implements QusDoctorService {
	
	@Resource
	public QusDoctorDao qusDoctorDao;
	/**
	 * 根据id查找医生
	 */
	@Override
	public QusDoctor getDoctor(Integer id) {
		
		return qusDoctorDao.getDoctor(id);
	}
	/**
	 * 查询医生列表
	 */
	@Override
	public List<QusDoctor> getDoctorList() {
		return qusDoctorDao.getDoctorList();
	}
	@Override
	public int selectCountByDocId(Integer docId) {
		return qusDoctorDao.selectCountByDocId(docId);
	}
	@Override
	public int deleteByDocId(Integer docId) {
		return qusDoctorDao.deleteByDocId(docId);
	}
	/**
	 * 医生登录
	 */
	@Override
	public List<QusDoctor> doctorLogin(String d_name, String d_password) {
		return qusDoctorDao.doctorLogin(d_name, d_password);
	}
}
