package springboot.service.qusdoctor;

import org.apache.ibatis.annotations.Param;

import springboot.pojo.QusDoctor;


public interface QusDoctorService {
	/**
	 * 根据id查找医生
	 */
	public QusDoctor getDoctor(Integer id);
}
