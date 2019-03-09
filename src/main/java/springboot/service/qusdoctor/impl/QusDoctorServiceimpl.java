package springboot.service.qusdoctor.impl;

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

}
