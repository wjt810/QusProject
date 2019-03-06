package springboot.pojo;

import java.sql.Date;

/**
 * 管理员表
 * 
 * @author dell
 *
 */
public class QusAdmin {

	private Integer a_id; // int(11)管理员id
	private String a_name; // varchar(50)昵称
	private String a_password; // varchar(50)密码
	private Integer a_sex; // int(11)性别
	private String a_phone; // varchar(50)手机号
	private String a_realName; // varchar(50)真实姓名
	private String a_email; // varchar(50)邮箱
	private String a_des; // varchar(50)自我描述
	private Date a_born; // datetime出生日期
	private String a_address; // varchar(50)地址
	private Integer a_roleid;
	
	public Integer getA_roleid() {
		return a_roleid;
	}

	public void setA_roleid(Integer a_roleid) {
		this.a_roleid = a_roleid;
	}

	public Integer getA_id() {
		return a_id;
	}

	public void setA_id(Integer a_id) {
		this.a_id = a_id;
	}

	public String getA_name() {
		return a_name;
	}

	public void setA_name(String a_name) {
		this.a_name = a_name;
	}

	public String getA_password() {
		return a_password;
	}

	public void setA_password(String a_password) {
		this.a_password = a_password;
	}

	public Integer getA_sex() {
		return a_sex;
	}

	public void setA_sex(Integer a_sex) {
		this.a_sex = a_sex;
	}

	public String getA_phone() {
		return a_phone;
	}

	public void setA_phone(String a_phone) {
		this.a_phone = a_phone;
	}

	public String getA_realName() {
		return a_realName;
	}

	public void setA_realName(String a_realName) {
		this.a_realName = a_realName;
	}

	public String getA_email() {
		return a_email;
	}

	public void setA_email(String a_email) {
		this.a_email = a_email;
	}

	public String getA_des() {
		return a_des;
	}

	public void setA_des(String a_des) {
		this.a_des = a_des;
	}

	public Date getA_born() {
		return a_born;
	}

	public void setA_born(Date a_born) {
		this.a_born = a_born;
	}

	public String getA_address() {
		return a_address;
	}

	public void setA_address(String a_address) {
		this.a_address = a_address;
	}

}
